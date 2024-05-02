import { TextareaAutosize } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Flip, toast } from "react-toastify";
import { DataOfUserSearchPrivateNotifications } from "../../data/RecoilState/Notifications/NotificationsData";
import { useRecoilState } from "recoil";

export async function getNewNotifications(_id: string) {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_NODE_MODE === "development"
      ? `${process.env.NEXT_PUBLIC_API_LOCAL}/notifications/${_id}`
      : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/notifications/${_id}`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  );
  return data?.data.Notifications;
}

function CreatePrivateNotificationForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [mainError, setMainError] = useState("");
  const [{ _id, avatar, firstName, lastName, email, age }, setDataOfUser] =
    useRecoilState(DataOfUserSearchPrivateNotifications);
  const CreateNotification = async () => {
    if (_id === "") {
      return setMainError("يجب عليك اختيار مستخدم اولا");
    }
    if (title === "" || title.length <= 2) {
      return setTitleError("يجب عليك ادخال Topic title");
    }
    if (content === "" || content.length <= 2) {
      return setContentError("يجب عليك ادخال محتوي الموضوع");
    }

    await axios
      .post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/notifications/${_id}`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/notifications/${_id}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      )
      .then(async () => {
        const notification = await getNewNotifications(_id);

        setTitle("");
        setContent("");
        setMainError("");

        toast.success("تم الانشاء", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
        setDataOfUser({
          ...{ _id, avatar, firstName, lastName, email, age },
          notification,
        });
      })
      .catch((error) => {
        console.log("updatePublicNotificationById==> ", error);
        toast.error(error.response?.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
        setMainError(error.response?.data.message);
      });
  };

  return (
    <div className={`mt-5 flex flex-col gap-[5px]`}>
      {mainError && <p className={`text-[14px] text-[#ff0000]`}>{mainError}</p>}
      <label>
        <input
          disabled={!_id}
          type="text"
          placeholder={"Topic title"}
          onChange={(e) => {
            setTitleError("");
            setMainError("");
            setTitle(e.target.value);
          }}
          value={title}
          className={`rounded-lg border p-2 shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
        />
      </label>
      {titleError && (
        <p className={`text-[14px] text-[#ff0000]`}>{titleError}</p>
      )}
      <TextareaAutosize
        aria-label="maximum height"
        disabled={!title}
        color="neutral"
        minRows={3}
        // maxRows={2}
        placeholder={"Topic content"}
        onChange={(e) => {
          setContentError("");
          setMainError("");
          setContent(e.target.value);
        }}
        value={content}
        className={`h-[50px] w-full rounded-lg border p-2 shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
      />
      {contentError && (
        <p className={`text-[14px] text-[#ff0000]`}>{contentError}</p>
      )}

      <button
        name="CreateNotification"
        onClick={CreateNotification}
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className={`mm:text-[14.957px] mm:font-black mt-2 rounded-[13px] bg-[#117C99] py-2 text-[14px] font-[500] text-[#FFF] duration-150 hover:bg-[#216678] hover:text-[#cfcfcf] `}
      >
        {"Create Private Notification"}
      </button>
    </div>
  );
}

export default CreatePrivateNotificationForm;
