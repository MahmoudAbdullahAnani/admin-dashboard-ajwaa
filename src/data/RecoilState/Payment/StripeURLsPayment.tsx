import { atom } from "recoil";

export const URLsPayment = atom({
  key: "URLsPayment", // unique ID (with respect to other atoms/selectors)
  default: {
    PayPal: "",
    ApplePay: "",
    Visa: "",
    MasterCard: "",
    fawry: "",
  }, // default value (aka initial value)
});

export const URLPayPalPayment = atom({
  key: "URLPayPalPayment", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const URLApplePayPayment = atom({
  key: "URLApplePayPayment", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const URLVisaPayment = atom({
  key: "URLVisaPayment", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const URLfawryPayment = atom({
  key: "URLfawryPayment", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

/*======================== Main URL ====================== */
export const URLPayment = atom({
  key: "URLPayment", // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
