import { atom } from "recoil";

const MainData = atom({
  key: "MainData", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
const TripDataFilters = atom({
  key: "TripDataFilters", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
const MaxPrice = atom({
  key: "MaxPrice", // unique ID (with respect to other atoms/selectors)
  default: 0 as number, // default value (aka initial value)
});
const MinPrice = atom({
  key: "MinPrice", // unique ID (with respect to other atoms/selectors)
  default: 0 as number, // default value (aka initial value)
});

const PriceFilter = atom({
  key: "PriceFilter", // unique ID (with respect to other atoms/selectors)
  default: { min: 0, max: 0 } as { min: number; max: number }, // default value (aka initial value)
});
const LoadingDataSearch = atom({
  key: "LoadingDataSearch", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

// Stope Filters
const IfCheckedFilter = atom({
  key: "IfCheckedFilter", // unique ID (with respect to other atoms/selectors)
  default: false as boolean, // default value (aka initial value)
});

const TripStopeFilters = atom({
  key: "TripStopeFilters", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export {
  MainData,
  MaxPrice,
  MinPrice,
  PriceFilter,
  TripDataFilters,
  LoadingDataSearch,
  IfCheckedFilter,
  TripStopeFilters,
};
