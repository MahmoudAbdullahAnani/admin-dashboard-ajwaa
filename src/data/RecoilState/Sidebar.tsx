import { atom } from "recoil";
const sidBar = atom({
  key: "sidBar", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default sidBar;
