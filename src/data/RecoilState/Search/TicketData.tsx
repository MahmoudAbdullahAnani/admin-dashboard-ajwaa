import { atom } from "recoil";
// Interface Data
import { FlightOffer } from "../../../interface/MainData";

export const TicketId = atom({
  key: "TicketId", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const TicketChose = atom({
  key: "TicketChose", // unique ID (with respect to other atoms/selectors)
  default: {} as FlightOffer, // default value (aka initial value)
});
//============================================================================================= User Data For air booking ===========================================================================================

export const DataBooking = atom({
  key: "DataBooking", // unique ID (with respect to other atoms/selectors)
  default: {
    NameBooking: "",
    GenderBooking: "",
    EmailBooking: "",
    BirthDateBooking: "",
    PassportNumberBooking: "",
    NationalityBooking: "",
    CountryBooking: "",
    ExpiryDate: "",
    PhoneNumber: "",
  }, // default value (aka initial value)
});

//============================================================================================= User Data For air booking ===========================================================================================

export const priceOfTotalState = atom({
  key: "priceOfTotalState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
