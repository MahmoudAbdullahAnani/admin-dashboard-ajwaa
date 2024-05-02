import { atom } from "recoil";
import { MessageResArray } from "../../../WebSocket/Chat/ChatAdmins";

export const MessageStore = atom({
         key: "MessageStore", // unique ID (with respect to other atoms/selectors)
         default: [] as MessageResArray[], // default value (aka initial value)
       });
