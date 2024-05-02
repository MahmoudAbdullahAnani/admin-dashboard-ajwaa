import SearchForUserPrivateNotifications from "./SearchForUserPrivateNotifications";
import {
  DataOfUserSearchPrivateNotifications,
  ReRenderNotificationData,
  UpdatePrivateNotificationContentData,
  UpdatePrivateNotificationTitleData,
  UpdatePrivateNotification_idDataComponent,
} from "../../data/RecoilState/Notifications/NotificationsData";
import { useRecoilState } from "recoil";
export const iconBarthDay = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M20 21.4565V13.4565C20 12.9261 19.7893 12.4174 19.4142 12.0423C19.0391 11.6673 18.5304 11.4565 18 11.4565H6C5.46957 11.4565 4.96086 11.6673 4.58579 12.0423C4.21071 12.4174 4 12.9261 4 13.4565V21.4565"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 16.4565C4 16.4565 4.5 15.4565 6 15.4565C7.5 15.4565 8.5 17.4565 10 17.4565C11.5 17.4565 12.5 15.4565 14 15.4565C15.5 15.4565 16.5 17.4565 18 17.4565C19.5 17.4565 20 16.4565 20 16.4565"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 21.4565H22"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 8.45654V11.4565"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8.45654V11.4565"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 8.45654V11.4565"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 4.45654H7.01"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 4.45654H12.01"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 4.45654H17.01"
      stroke="#117C99"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import CreatePrivateNotificationForm from "./CreatePrivateNotificationForm";
import UpdatePrivateNotificationForm from "./UpdatePrivateNotificationForm";

function UpdatePrivateNotification() {
  const [
    dataOfUserSearchPrivateNotificationsState,
    setDataOfUserSearchPrivateNotificationsState,
  ] = useRecoilState(DataOfUserSearchPrivateNotifications);
  const [, setUpdatePrivateNotificationTitleDataState] = useRecoilState(
    UpdatePrivateNotificationTitleData,
  );
  const [, setUpdatePrivateNotificationContentDataState] = useRecoilState(
    UpdatePrivateNotificationContentData,
  );
  const [, setUpdatePrivateNotification_idDataComponent] = useRecoilState(
    UpdatePrivateNotification_idDataComponent,
  );

  const { avatar, firstName, lastName, email, age, _id, notification } =
    dataOfUserSearchPrivateNotificationsState;
  const [reRenderDataApp, setReRenderDataApp] = useRecoilState(
    ReRenderNotificationData,
  );
  const deletePrivateNotification = async (notification_id: string) => {
    const token = localStorage.getItem("token") || "";
    await axios
      .patch(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/notificationsUserMe/${notification_id}`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/notificationsUserMe/${notification_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        toast.success("تم الحذف", {
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
        const newData = dataOfUserSearchPrivateNotificationsState;
        const notification =
          dataOfUserSearchPrivateNotificationsState.notification.filter(
            (n: { _id: string }) => n._id !== notification_id,
          );
        console.log({ notification });

        setDataOfUserSearchPrivateNotificationsState({
          ...newData,
          notification,
        });
      })
      .catch((error) => {
        console.log(error);
        // if (error.response?.data.statusCode === 401) {
        //   localStorage.removeItem("token");
        // }
      });
  };

  const updatePrivateNotification = (
    _id: string,
    title: string,
    content: string,
    // date: string,
    // isSee: string
  ) => {
    setUpdatePrivateNotificationTitleDataState(title);
    setUpdatePrivateNotificationContentDataState(content);
    setUpdatePrivateNotification_idDataComponent(_id);
  };
  return (
    <div>
      <SearchForUserPrivateNotifications />
      {_id !== "" && (
        <div
          className={`my-2 mt-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start`}
        >
          <div>
            <img
              width={100}
              height={100}
              className={`max-h-[150px] max-w-[200px] rounded-lg `}
              src={
                avatar ||
                "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              }
              alt={`${firstName}-${lastName}`}
            />
          </div>
          <div className={`flex flex-col items-center`}>
            <span>
              {firstName} {lastName}
            </span>
            <span>{email}</span>
            <span className={`flex `}>
              {iconBarthDay}
              {age}
            </span>
          </div>
        </div>
      )}

      <div className={`flex flex-wrap justify-center lg:justify-between`}>
        <div className={`mt-2 flex flex-col gap-5`}>
          {notification &&
            notification.map(({ isSee, title, content, date, _id }) => {
              const exDateFormat = new Date(date).toLocaleDateString("en-GB");
              return (
                <div
                  key={`${_id}--${Math.random()}--${date}`}
                  className={`${isSee && "hidden"}`}
                >
                  <div className={`flex items-center `}>
                    <h3 className={"text-[20px] font-bold"}>{title}</h3>
                    <div className={`flex items-center`}>
                      <button
                        name="deletePrivateNotification"
                        className={`text-red-500 hover:bg-red-100 rounded-lg p-2`}
                        onClick={() => deletePrivateNotification(_id)}
                      >
                        <DeleteIcon />
                      </button>
                      <button
                        name="updatePrivateNotification"
                        className={`rounded-lg p-2 text-blue-500 hover:bg-blue-100`}
                        onClick={() =>
                          updatePrivateNotification(
                            _id,
                            title,
                            content,
                            // date,
                            // isSee
                          )
                        }
                      >
                        <UpdateIcon />
                      </button>
                      <span>
                        {"Created in "} {exDateFormat}
                      </span>
                    </div>
                  </div>
                  <h6>{content}</h6>
                </div>
              );
            })}
        </div>
        <div>
          <UpdatePrivateNotificationForm />
          <CreatePrivateNotificationForm />
        </div>
      </div>
    </div>
  );
}

export default UpdatePrivateNotification;
