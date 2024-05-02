import { useRecoilState } from "recoil";
import { ReRenderNotificationData } from "../../data/RecoilState/Notifications/NotificationsData";
import { TextareaAutosize } from "@mui/material";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";
import { Flip, toast } from "react-toastify";

function CreatePublicNotification() {
  const [reRenderDataApp, setReRenderDataApp] = useRecoilState(
    ReRenderNotificationData,
  );
  // const [startDate, setStartDate] = useState(
  //   new Date(UpdatePublicNotificationExDate)
  // );
  // @ts-ignore
  const handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  const [exDate, setExDate] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [exDateError, setExDateError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [mainError, setMainError] = useState("");

  const CreateNotification = async () => {
    if (title === "") {
      return setTitleError("يجب عليك ادخال Topic title");
    }
    if (content === "") {
      return setContentError("يجب عليك ادخال محتوي الموضوع");
    }
    if (exDate == null) {
      return setExDateError("يجب عليك تحديد تاريخ الانتهاء");
    }

    await axios
      .post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/public/notifications`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/public/notifications`,
        {
          title,
          content,
          exDate,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      )
      .then(() => {
        setTitle("");
        setContent("");
        setExDate(null);
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
        setReRenderDataApp(!reRenderDataApp);
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
      <DatePicker
        showTimeSelect
        disabled={!content}
        minDate={new Date()}
        placeholderText={"The expiration date of this notice"}
        selected={exDate}
        onChange={(date) => {
          // @ts-ignore
          setExDateError(null);
          // @ts-ignore
          setExDate(date);
          setMainError("");
        }}
        timeClassName={handleColor}
        dateFormat="dd/MM/yyyy HH:mm"
        className={`h-[50px] w-full rounded-lg border p-2 text-center shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
      />
      {exDateError && (
        <p className={`text-[14px] text-[#ff0000]`}>{exDateError}</p>
      )}
      <button
        name="CreateNotification"
        onClick={CreateNotification}
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className={`mm:text-[14.957px] mm:font-black mt-2 rounded-[13px] bg-[#117C99] py-2 text-[14px] font-[500] text-[#FFF] duration-150 hover:bg-[#216678] hover:text-[#cfcfcf] `}
      >
        {"Create Notification"}
      </button>
    </div>
  );
}

export default CreatePublicNotification;
