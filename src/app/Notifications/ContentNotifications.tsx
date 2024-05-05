"use client";
import UpdatePrivateNotification from "@/components/Dashboard/UpdatePrivateNotification";
import UpdatePublicNotification from "@/components/Dashboard/UpdatePublicNotification";
import {
  DataOfUserSearchPrivateNotifications,
  ReRenderNotificationData,
  UpdatePublicNotificationContentData,
  UpdatePublicNotificationExDateData,
  UpdatePublicNotificationTitleData,
  UpdatePublicNotification_idData,
} from "@/data/RecoilState/Notifications/NotificationsData";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

import * as React from "react";
import { Bounce, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { arabic_letters } from "@/components/Home/Systems/Notification/NotificationComponent";

export default function ContentNotifications() {
  const [reRenderComponent, setReRenderComponent] = useRecoilState(
    ReRenderNotificationData,
  );
  const token = localStorage.getItem("token") || "";
  const [
    dataOfUserSearchPrivateNotificationsState,
    setDataOfUserSearchPrivateNotificationsState,
  ] = useRecoilState(DataOfUserSearchPrivateNotifications);
  const [publicNotifications, setPublicNotifications] = React.useState([]);
  const deletePublicNotification = async (_id: string) => {
    // if get token then fetch to data me
    await axios
      .delete(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/public/notifications/${_id}`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/public/notifications/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(async () => {
        setReRenderComponent(!reRenderComponent);
        toast.success("تم الحذف"),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          };
      })
      .catch((error) => {
        console.log(error);
        // if (error.response?.data.statusCode === 401) {
        //   localStorage.removeItem("token");
        // }
      });
    // setLoading(false);
    return true;
  };

  const getPublicNotifications = async () => {
    // if get token then fetch to data me
    await axios
      .get(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/public/notifications`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/public/notifications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(async ({ data }) => {
        setPublicNotifications(
          data?.AllNotifications.filter(
            // @ts-ignore
            ({ exDate }: { exDate: string }) =>
              exDate !== "" && exDate > new Date().toISOString(),
          ),
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.data.statusCode === 401) {
          localStorage.removeItem("token");
          return (window.location.href = "https://ittrip.vercel.app");
        }
      });
    // setLoading(false);
    return true;
  };
  const [, setUpdatePublicNotificationTitle] = useRecoilState(
    UpdatePublicNotificationTitleData,
  );

  const [, setUpdatePublicNotificationContent] = useRecoilState(
    UpdatePublicNotificationContentData,
  );
  const [, setUpdatePublicNotificationExDate] = useRecoilState(
    UpdatePublicNotificationExDateData,
  );
  const [, UpdatePublicNotification_id] = useRecoilState(
    UpdatePublicNotification_idData,
  );
  const updatePublicNotification = (
    _id: string,
    title: string,
    content: string,
    exDate: Date,
  ) => {
    setUpdatePublicNotificationTitle(title);
    setUpdatePublicNotificationContent(content);
    UpdatePublicNotification_id(_id);
    setUpdatePublicNotificationExDate(new Date(exDate));
  };
  React.useEffect(() => {
    getPublicNotifications();
  }, [reRenderComponent]);
  return (
    <>
      <div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
          <h2 className="mb-4 text-lg font-semibold">
            {"Public Notifications"}
          </h2>
          <div
            dir={
              // @ts-ignore
              arabic_letters.includes(publicNotifications[0]?.title[0] || "")
                ? "rtl"
                : "ltr"
            }
            className={`flex flex-col items-center gap-[15px] lg:flex-row lg:items-start`}
          >
            <div className={`block w-[60%] lg:hidden`}>
              <UpdatePublicNotification />
            </div>

            <div className={`hidden w-[60%] lg:block`}>
              <UpdatePublicNotification />
            </div>
            <div className={`flex flex-col gap-[15px]`}>
              {publicNotifications?.map(
                ({ _id, title, content, exDate, createdAt }) => {
                  const exDateFormat = new Date(exDate).toLocaleDateString(
                    "en-GB",
                  );
                  return (
                    <div key={`${_id}--${Math.random()}--${createdAt}`}>
                      <div className={`flex items-center `}>
                        <h3 className={"text-[20px] font-bold"}>{title}</h3>
                        <div className={`flex items-center`}>
                          <button
                            name="delete"
                            className={`text-red-500 hover:bg-red-100 rounded-lg p-2`}
                            onClick={() => deletePublicNotification(_id)}
                          >
                            <DeleteIcon />
                          </button>
                          <button
                            name="update"
                            className={`rounded-lg p-2 text-blue-500 hover:bg-blue-100`}
                            onClick={() =>
                              updatePublicNotification(
                                _id,
                                title,
                                content,
                                exDate,
                              )
                            }
                          >
                            <UpdateIcon />
                          </button>
                          <span>
                            {"Ends in "} {exDateFormat}
                          </span>
                        </div>
                      </div>
                      <h6>{content}</h6>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
          <div className={`mb-4 flex items-center gap-2`}>
            <h2 className="text-lg font-semibold ">
              {"Private Notifications"}
            </h2>
            {dataOfUserSearchPrivateNotificationsState._id !== "" && (
              <button
                name="delete"
                onClick={() =>
                  setDataOfUserSearchPrivateNotificationsState({
                    _id: "",
                    avatar: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    age: 0,
                    notification: [],
                  })
                }
                className={`text-red-500 hover:bg-red-100 rounded-lg p-2`}
              >
                <RemoveCircleOutlineIcon />
              </button>
            )}
          </div>
          <UpdatePrivateNotification />
        </div>
      </div>
    </>
  );
}
