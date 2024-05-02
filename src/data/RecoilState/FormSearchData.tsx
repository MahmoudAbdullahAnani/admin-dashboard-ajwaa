import { atom } from "recoil";

// Adults
const adultsData = atom({
  key: "adults",
  default: 1,
});
// rateing
export const Rateing = atom({
  key: "Rateing",
  default: 0,
});

// Youths
const youthsData = atom({
  key: "youthsData",
  default: 0,
});
// Children
const childrenData = atom({
  key: "childrenData",
  default: 0,
});
// LevelTravel
const levelTravelData = atom({
  key: "levelTravelData",
  default: "economy",
});

// //  UI
// Open Module Date
const moduleDate = atom({
  key: "moduleDate",
  default: false,
});

export { adultsData, youthsData, childrenData, levelTravelData, moduleDate };
