import { atom } from "recoil";

export const Friends = atom({
  key: "Friends", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
export const ReRebderingFriendsState = atom({
  key: "ReRebderingFriendsState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
export const SearchFriendsState = atom({
  key: "SearchFriendsState", // unique ID (with respect to other atoms/selectors)
  default: {
    count: 0,
    friends: [],
  }, // default value (aka initial value)
});
export const SearchUsers = atom({
  key: "SearchUsers", // unique ID (with respect to other atoms/selectors)
  default: [],
});

// Pending
export const PendingFriends = atom({
  key: "PendingFriends", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
