import { atom } from "recoil";

export const TokenJWT = atom({
  key: "TokenJWT", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const openLoginPageState = atom({
  key: "openLoginPageState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const openSignupPageState = atom({
  key: "openSignupPageState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

// --> Password <--
export const showPassword = atom({
  key: "showPassword", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const openForgotPasswordPageState = atom({
  key: "openForgotPasswordPageState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const openVerifyPageState = atom({
  key: "openVerifyPageState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const emailVerify = atom({
  key: "emailVerify", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const OpenResetPasswordPage = atom({
  key: "OpenResetPasswordPage", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const SignOutState = atom({
  key: "SignOutState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const OpenVerifyAccountPageState = atom({
  key: "OpenVerifyAccountPageState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
// Data Verify
export const EmailVerifyState = atom({
  key: "EmailVerifyState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const UserNameVerifyState = atom({
  key: "UserNameVerifyState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const RememberMeState = atom({
  key: "RememberMeState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const HolderNotifications = atom({
  key: "HolderNotifications", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
