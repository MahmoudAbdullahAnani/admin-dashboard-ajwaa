import { useRecoilState } from "recoil";
import {
  ReRenderNotificationData,
  UpdatePublicNotificationContentData,
  UpdatePublicNotificationExDateData,
  UpdatePublicNotificationTitleData,
  UpdatePublicNotification_idData,
} from "../../data/RecoilState/Notifications/NotificationsData";
import { TextareaAutosize } from "@mui/material";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Bounce, toast } from "react-toastify";
import CreatePublicNotification from "./CreatePublicNotification";
import { useState } from "react";

function UpdatePublicNotification() {
  const [UpdatePublicNotificationTitle, setUpdatePublicNotificationTitle] =
    useRecoilState(UpdatePublicNotificationTitleData);
  const [UpdatePublicNotificationContent, setUpdatePublicNotificationContent] =
    useRecoilState(UpdatePublicNotificationContentData);
  const [UpdatePublicNotificationExDate, setUpdatePublicNotificationExDate] =
    useRecoilState(UpdatePublicNotificationExDateData);
  const [UpdatePublicNotification_id] = useRecoilState(
    UpdatePublicNotification_idData,
  );

  const [reRenderDataApp, setReRenderDataApp] = useRecoilState(
    ReRenderNotificationData,
  );
  const [mainError, setMainError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const updatePublicNotificationById = async () => {
    if (UpdatePublicNotification_id === "") {
      return setMainError("يجب عليك اختيار مستخدم اولا");
    }
    if (
      UpdatePublicNotificationTitle === "" ||
      UpdatePublicNotificationTitle.length <= 2
    ) {
      return setTitleError("يجب عليك ادخال Topic title");
    }
    if (
      UpdatePublicNotificationContent === "" ||
      UpdatePublicNotificationContent.length <= 2
    ) {
      return setContentError("يجب عليك ادخال محتوي الموضوع");
    }
    await axios
      .patch(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/public/notifications/${UpdatePublicNotification_id}`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/public/notifications/${UpdatePublicNotification_id}`,
        {
          title: UpdatePublicNotificationTitle,
          content: UpdatePublicNotificationContent,
          exDate: UpdatePublicNotificationExDate,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      )
      .then(() => {
        toast.success("تم التعديل", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setReRenderDataApp(!reRenderDataApp);
      })
      .catch((error: any) => {
        console.log("updatePublicNotificationById==> ", error);
      });
  };

  // const [startDate, setStartDate] = useState(
  //   new Date(UpdatePublicNotificationExDate)
  // );
  // @ts-ignore
  const handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <div>
      <div className={`flex flex-col gap-[5px]`}>
        {mainError && (
          <p className={`text-[14px] text-[#ff0000]`}>{mainError}</p>
        )}
        <label>
          <input
            disabled={!UpdatePublicNotification_id}
            type="text"
            defaultValue={UpdatePublicNotificationTitle}
            placeholder={"Topic title"}
            onChange={(e) => setUpdatePublicNotificationTitle(e.target.value)}
            className={`rounded-lg border p-2 shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
          />
        </label>
        {titleError && (
          <p className={`text-[14px] text-[#ff0000]`}>{titleError}</p>
        )}
        <TextareaAutosize
          disabled={!UpdatePublicNotification_id}
          defaultValue={UpdatePublicNotificationContent}
          color="neutral"
          minRows={3}
          // maxRows={2}
          placeholder={"Topic content"}
          onChange={(e) => setUpdatePublicNotificationContent(e.target.value)}
          className={`h-[50px] w-full rounded-lg border p-2 shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
        />
        {contentError && (
          <p className={`text-[14px] text-[#ff0000]`}>{contentError}</p>
        )}
        <DatePicker
          disabled={!UpdatePublicNotification_id}
          showTimeSelect
          minDate={new Date()}
          placeholderText={"تاريخ الانتهاء"}
          selected={UpdatePublicNotificationExDate}
          // @ts-ignore
          onChange={(date) => setUpdatePublicNotificationExDate(date)}
          timeClassName={handleColor}
          dateFormat="dd/MM/yyyy HH:mm"
          className={`h-[50px] w-full rounded-lg border p-2 text-center shadow-lg focus-visible:border-[#58a8f7] focus-visible:outline-none`}
        />
        <button
          name="updatePublicNotificationById"
          disabled={!UpdatePublicNotification_id}
          onClick={updatePublicNotificationById}
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`mm:text-[14.957px] mm:font-black mt-2 rounded-[13px] bg-[#117C99] py-2 text-[14px] font-[500] text-[#FFF] duration-150 hover:bg-[#216678] hover:text-[#cfcfcf] `}
        >
          {"Update"}
        </button>
      </div>
      <CreatePublicNotification />
    </div>
  );
}

export default UpdatePublicNotification;
