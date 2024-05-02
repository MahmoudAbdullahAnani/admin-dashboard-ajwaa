import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { useRecoilState } from "recoil";
import axios from "axios";
import { TokenJWT } from "../../data/RecoilState/AuthStatePages/Auth";
import { useEffect, useState } from "react";
import { arabic_letters } from "../Home/Systems/Notification/NotificationComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Bounce, toast } from "react-toastify";
import UpdatePublicNotification from "./UpdatePublicNotification";
import {
  DataOfUserSearchPrivateNotifications,
  ReRenderNotificationData,
  UpdatePublicNotificationContentData,
  UpdatePublicNotificationExDateData,
  UpdatePublicNotificationTitleData,
  UpdatePublicNotification_idData,
} from "../../data/RecoilState/Notifications/NotificationsData";
import UpdatePrivateNotification from "./UpdatePrivateNotification";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import StaticSections from "./StaticSections/StaticSections";
import { SchemaUser } from "@/types/auth";

function countUsersOnMonths(data: []) {
  let countJanuary = 0;
  let countFebruary = 0;
  let countMarch = 0;
  let countApril = 0;
  let countMay = 0;
  let countJune = 0;
  let countJuly = 0;
  let countAugust = 0;
  let countSeptember = 0;
  let countOctober = 0;
  let countNovember = 0;
  let countDecember = 0;
  data.map(({ createdAt }) => {
    switch (new Date(createdAt).getMonth()) {
      case 0:
        countJanuary += 1;
        break;
      case 1:
        countFebruary += 1;
        break;
      case 2:
        countMarch += 1;
        break;
      case 3:
        countApril += 1;
        break;
      case 4:
        countMay += 1;
        break;
      case 5:
        countJune += 1;
        break;
      case 6:
        countJuly += 1;
        break;
      case 7:
        countAugust += 1;
        break;
      case 8:
        countSeptember += 1;
        break;
      case 9:
        countOctober += 1;
        break;
      case 10:
        countNovember += 1;
        break;
      case 11:
        countDecember += 1;
        break;
    }
  });
  return {
    countJanuary,
    countFebruary,
    countMarch,
    countApril,
    countMay,
    countJune,
    countJuly,
    countAugust,
    countSeptember,
    countOctober,
    countNovember,
    countDecember,
  };
}

function MainChartsTop({
  children,
  allUsers,
  allUsersActive,
  allUsersUnActive,
  cashData,
}: {
  allUsers: SchemaUser[];
  allUsersActive: SchemaUser[];
  allUsersUnActive: SchemaUser[];
  cashData: { data: []; count: number };
  children: React.ReactNode;
}) {
  const [reRenderComponent, setReRenderComponent] = useRecoilState(
    ReRenderNotificationData,
  );
  const dataUsers = {
    labels: ["Total Users", "Active Users", "Inactive Users"],
    datasets: [
      {
        data: [allUsers.length, allUsersActive.length, allUsersUnActive.length],
        backgroundColor: ["#005A6C", "#36A2EB", "#FF6384"],
      },
    ],
  };
  const optionsUsers = {
    cutout: "20%",
  };
  const dataChart = countUsersOnMonths(cashData.data);
  // Handle Data Cashing
  const dataTrips = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: `${"Entries every month"}`,
        data: [
          dataChart.countJanuary,
          dataChart.countFebruary,
          dataChart.countMarch,
          dataChart.countApril,
          dataChart.countMay,
          dataChart.countJune,
          dataChart.countJuly,
          dataChart.countAugust,
          dataChart.countSeptember,
          dataChart.countOctober,
          dataChart.countNovember,
          dataChart.countDecember,
        ],
        backgroundColor: [
          "#117C99",
          "#005A6C",
          "#31B2E1",
          "#117C99",
          "#005A6C",
          "#31B2E1",
          "#117C99",
          "#005A6C",
          "#31B2E1",
          "#117C99",
          "#005A6C",
          "#31B2E1",
        ],
        barThickness: 20,
      },
    ],
  };
  // Handle Notifications
  const [publicNotifications, setPublicNotifications] = useState([]);
  const [tokenJWT] = useRecoilState(TokenJWT);

  const token = localStorage.getItem("token") || tokenJWT || "";

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
        // if (error.response?.data.statusCode === 401) {
        //   localStorage.removeItem("token");
        // }
      });
    // setLoading(false);
    return true;
  };

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

  const [
    dataOfUserSearchPrivateNotificationsState,
    setDataOfUserSearchPrivateNotificationsState,
  ] = useRecoilState(DataOfUserSearchPrivateNotifications);
  useEffect(() => {
    getPublicNotifications();
  }, [reRenderComponent]);

  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
        <h2 className="mb-4 text-center text-lg font-semibold text-black dark:text-white">
          {"Users"}
        </h2>
        <Chart type="doughnut" data={dataUsers} options={optionsUsers} />
      </div>
      <div className="col-span-12 hidden rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
        <h2 className="mb-4 text-lg font-semibold">{"الدخول الي النظام"}</h2>
        {/* <Chart
          type="bar"
          data={dataTrips}
          // options={{
          //   scales: {
          //     x: {
          //       type: "category", // Ensure x-axis is of type 'category'
          //       // Add any additional configuration options as needed
          //     },
          //     y: {
          //       // Add configuration options for the y-axis if needed
          //     },
          //   },
          // }}
        /> */}
      </div>
      {children}
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
        <h2 className="mb-4 text-lg font-semibold">{"Public Notifications"}</h2>
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
          <h2 className="text-lg font-semibold ">{"Private Notifications"}</h2>
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
      <StaticSections />
    </>
  );
}

export default MainChartsTop;
