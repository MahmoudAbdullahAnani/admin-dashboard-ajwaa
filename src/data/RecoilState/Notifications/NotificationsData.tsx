import { atom } from "recoil";

const publicNotifications = atom({
  key: "publicNotifications", // unique ID (with respect to other atoms/selectors)
  default: [] as { title: string }[], // default value (aka initial value)
});
const privateNotifications = atom({
  key: "privateNotifications", // unique ID (with respect to other atoms/selectors)
  default: [] as { title: string }[], // default value (aka initial value)
});
const allNotifications = atom({
  key: "allNotifications", // unique ID (with respect to other atoms/selectors)
  default: [] as { title: string }[], // default value (aka initial value)
});
const reRenderData = atom({
  key: "reRenderData", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
const ReRenderNotificationData = atom({
  key: "ReRenderNotificationData", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
const UpdatePublicNotificationTitleData = atom({
  key: "UpdatePublicNotificationTitleData", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const UpdatePublicNotificationContentData = atom({
  key: "UpdatePublicNotificationContentData", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const UpdatePublicNotificationExDateData = atom({
  key: "UpdatePublicNotificationExDateData", // unique ID (with respect to other atoms/selectors)
  default: new Date(), // default value (aka initial value)
});
const UpdatePublicNotification_idData = atom({
  key: "UpdatePublicNotification_idData", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export {
  publicNotifications,
  privateNotifications,
  allNotifications,
  reRenderData,
  UpdatePublicNotificationTitleData,
  UpdatePublicNotificationContentData,
  UpdatePublicNotificationExDateData,
  UpdatePublicNotification_idData,
  ReRenderNotificationData,
};

export const DataOfUserSearchPrivateNotifications = atom({
  key: "DataOfUserSearchPrivateNotifications", // unique ID (with respect to other atoms/selectors)
  default: {
    _id: "",
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    notification: [],
  }, // default value (aka initial value)
});

export const UpdatePrivateNotificationTitleData = atom({
  key: "UpdatePrivateNotificationTitleData", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const UpdatePrivateNotificationContentData = atom({
  key: "UpdatePrivateNotificationContentData", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const UpdatePrivateNotification_idDataComponent = atom({
  key: "UpdatePrivateNotification_idDataComponent", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
