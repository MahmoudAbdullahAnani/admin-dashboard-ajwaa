import { atom } from "recoil";

const TypeSystemSearch = atom({
  key: "TypeSystemSearch", // unique ID (with respect to other atoms/selectors)
  default: "airline", // default value (aka initial value)
});
const ReSearch = atom({
  key: "ReSearch", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export { TypeSystemSearch, ReSearch };
