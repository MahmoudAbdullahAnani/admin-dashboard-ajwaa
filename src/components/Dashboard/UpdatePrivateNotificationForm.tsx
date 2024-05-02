import { useRecoilState } from "recoil";
import {
  DataOfUserSearchPrivateNotifications,
  ReRenderNotificationData,
  UpdatePrivateNotificationContentData,
  UpdatePrivateNotificationTitleData,
  UpdatePrivateNotification_idDataComponent,
} from "../../data/RecoilState/Notifications/NotificationsData";
import { TextareaAutosize } from "@mui/material";
import axios from "axios";
import { Flip, toast } from "react-toastify";
import { getNewNotifications } from "./CreatePrivateNotificationForm";
import { useState } from "react";

function UpdatePrivateNotificationForm() {
  const [UpdatePrivateNotificationTitle, setUpdatePrivateNotificationTitle] =
    useRecoilState(UpdatePrivateNotificationTitleData);
  const [
    UpdatePrivateNotificationContent,
    setUpdatePrivateNotificationContent,
  ] = useRecoilState(UpdatePrivateNotificationContentData);

  const [UpdatePrivateNotification_id, serUpdatePrivateNotification_id] =
    useRecoilState(UpdatePrivateNotification_idDataComponent);
  const [{ _id, avatar, firstName, lastName, email, age }, setDataOfUser] =
    useRecoilState(DataOfUserSearchPrivateNotifications);

  const [reRenderDataApp, setReRenderDataApp] = useRecoilState(
    ReRenderNotificationData,
  );
  const [mainError, setMainError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const updatePrivateNotificationById = async () => {
    if (_id === "") {
      return setMainError("يجب عليك اختيار مستخدم اولا");
    }
    if (
      UpdatePrivateNotificationTitle === "" ||
      UpdatePrivateNotificationTitle.length <= 2
    ) {
      return setTitleError("يجب عليك ادخال Topic title");
    }
    if (
      UpdatePrivateNotificationContent === "" ||
      UpdatePrivateNotificationContent.length <= 2
    ) {
      return setContentError("يجب عليك ادخال محتوي الموضوع");
    }
    await axios
      .patch(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/notifications/${_id}/${UpdatePrivateNotification_id}`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/notifications/${_id}/${UpdatePrivateNotification_id}`,
        {
          title: UpdatePrivateNotificationTitle,
          content: UpdatePrivateNotificationContent,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      )
      .then(async () => {
        const notification = await getNewNotifications(_id);

        setUpdatePrivateNotificationTitle("");
        setUpdatePrivateNotificationContent("");
        serUpdatePrivateNotification_id("");
        setMainError("");

        toast.success("تم التعديل", {
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
          ...{
            _id,
            avatar,
            firstName,
            lastName,
            email,
            age,
          },
          notification,
        });
        setReRenderDataApp(!reRenderDataApp);
      })
      .catch((error) => {
        console.log("updatePrivateNotificationById==> ", error);
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
    <div>
      <div className={`flex flex-col gap-[5px]`}>
        {mainError && (
          <p className={`text-[14px] text-[#ff0000]`}>{mainError}</p>
        )}
        <label>
          <input
            disabled={!UpdatePrivateNotification_id}
            type="text"
            value={UpdatePrivateNotificationTitle}
            placeholder={"Topic title"}
            onChange={(e) => {
              setTitleError("");
              setMainError("");
              setUpdatePrivateNotificationTitle(e.target.value);
            }}
            className={`rounded-lg border p-2 shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
          />
        </label>
        {titleError && (
          <p className={`text-[14px] text-[#ff0000]`}>{titleError}</p>
        )}
        <TextareaAutosize
          disabled={!UpdatePrivateNotificationTitle}
          value={UpdatePrivateNotificationContent}
          color="neutral"
          minRows={3}
          // maxRows={2}
          placeholder={"Topic content"}
          onChange={(e) => {
            setContentError("");
            setMainError("");
            setUpdatePrivateNotificationContent(e.target.value);
          }}
          className={`h-[50px] w-full rounded-lg border p-2 shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
        />
        {contentError && (
          <p className={`text-[14px] text-[#ff0000]`}>{contentError}</p>
        )}
        <button
          // disabled={!UpdatePrivateNotification_id}
          onClick={updatePrivateNotificationById}
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`mm:text-[14.957px] mm:font-black mt-2 rounded-[13px] bg-[#117C99] py-2 text-[14px] font-[500] text-[#FFF] duration-150 hover:bg-[#216678] hover:text-[#cfcfcf] `}
        >
          {"Update"}
        </button>
      </div>
    </div>
  );
}

export default UpdatePrivateNotificationForm;
