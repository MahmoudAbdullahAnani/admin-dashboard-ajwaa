import { atom } from "recoil";
const isLoading = atom({
  key: "isLoading", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export default isLoading;
