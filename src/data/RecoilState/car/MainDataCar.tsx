import { atom } from "recoil";

// CityNameCars
export const CityNameCars = atom({
  key: "CityNameCars",
  default: "",
});
// CountryNameCars
export const CountryNameCars = atom({
  key: "CountryNameCars",
  default: "",
});
// AgeCars
export const AgeCars = atom({
  key: "AgeCars",
  default: 0,
});
// GeoLocation

export const GeoLocation = atom({
  key: "GeoLocation",
  default: {
    lat: 0,
    long: 0,
  },
});
// GeoLocation

export const MainDataCars = atom({
  key: "MainDataCars",
  default: [
    {
      id: "8904078984",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
        address: {
          countryCode: "EG",
        },
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      cancellationRules: [
        {
          ruleDescription: "Test cancel policy",
        },
      ],
      duration: "PT1H52M",
      vehicle: {
        code: "CAR",
        category: "ST",
        description: "Ankit Test - Sedan",
        imageURL:
          "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusVehicle/U3hoRXhhdmVNMy9lci9nQU5zY0gxSWlHRlBFaWNZbWZ4YXkrQ2l4cjczYVVIeXJnQjNVZWorR3JLUnRBaFBOaSthMXA2ejhZMVFHN2tpV3g5ZlF5ZTRxcU9HTGl3cEkrS25PQlJCYWhBWTZyTHZhWmVMYjhudnV6SnJaOWZiMUk0MUdTR3FRT0VQMGl4UEFqMFVjd29IYlpzOEttUjY2TzVaZzc0b295SWJnPQ==.png",
        baggages: [
          {
            count: 1,
          },
        ],
        seats: [
          {
            count: 3,
          },
        ],
      },
      serviceProvider: {
        code: "GSN",
        name: "GroundSpan",
        logoUrl: "https://qa20.groundspan.com/Amadeus/Images/GroundSpan.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      partnerInfo: {
        serviceProvider: {
          code: "abc",
          name: "Ankit Test",
          termsUrl:
            "https://qa20.groundspan.com/Amadeus/Terms/L2t4azg4OXgza2tYYjF6b2Vwc21BZTc1TEpiTFJjcDZWbVNiRnd6V1FlcmJmcXp0M1RUOTB0blZzMkRvYzJvdmgxTDJ6WE8wNXBScUhhRVFFUkhITGxtc29MUDNjTUlucmhkeVo0dEdsQ0poR2g2dm5GUXFIYTAwS25BRmlmR2pFN2g1QlE0UUEzZ1dlNDRudDRTeWdxYzZ0SWNEL2FHWkxISTFqVUlEdVNjPQ%3d%3d",
          isPreferred: true,
          logoUrl:
            "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusProvider/eDJNYUhSbVNuREkvNjdHU0ZyQzFUWGJqNFJyT2c0QnhheUpFMkJ2c28wQW5oZUc0dEhXSHlNdEV4RnJSTm13bGZ3VE9aUHRkbVFESU1OVmJOaDBJVDc0MVdmaDBUQUZoV1F3U3htaEVKUCtUckp6d3pMUmFTcGUvK1p4ejNMOGE=.png",
        },
      },
      quotation: {
        monetaryAmount: "155.83",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        isEstimated: false,
        base: {
          monetaryAmount: "155.83",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "142.48",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "142.48",
        },
        isEstimated: false,
        totalTaxes: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      methodsOfPaymentAccepted: ["CREDIT_CARD"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
      distance: {
        value: 66,
        unit: "MI",
      },
      conditionSummary: [
        {
          descriptions: [
            {
              descriptionType: "PRICING",
              text: "HOURLY RATE All hourly rides are billed from garage to garage. The final charges are determined at the completion of the trip. Other charges apply.",
            },
          ],
        },
      ],
    },
    {
      id: "8904079677",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
        address: {
          countryCode: "EG",
        },
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      cancellationRules: [
        {
          ruleDescription:
            "Cancellations must be made at least 2 hours before the scheduled pick up time to avoid cancellation charges equal to the rate quoted.",
        },
      ],
      duration: "PT1H52M",
      vehicle: {
        code: "VAN",
        category: "ST",
        description: "Amadeus Cars - VAN",
        imageURL:
          "https://io.groundspan.com/ImageProcessor/Images/AmadeusVehicle/SGtFMXNWbENEUnhBTnAyMkxWQVBlYXc1UnVVTDkvWUhpWitXMG5tVVhZQS9lWjFkd0d6Y2Q3YlNyZ3Rxbm1IM3k1Nk4zVHJUckFyUGJFUUJJcU9SWVEwZzFWWGp6UWFsbVpYTGd6RHFvYlVwM1ByNlVmd3c4V1FzVkRtYkNtMFI3cVZ0MGZqdGdRcGh3dlcxQ3FwOVFMQVdZUmdLWGdYMm9wZEFJbmV0b0I4PQ==.png",
        baggages: [
          {
            count: 5,
          },
        ],
        seats: [
          {
            count: 7,
          },
        ],
      },
      serviceProvider: {
        code: "GSN",
        name: "GroundSpan",
        logoUrl: "https://qa20.groundspan.com/Amadeus/Images/GroundSpan.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      partnerInfo: {
        serviceProvider: {
          code: "AMA",
          name: "Amadeus Cars",
          termsUrl:
            "https://qa20.groundspan.com/Amadeus/Terms/OXdRNmdQTTRoa3FLN0wxWTdLVERrM2FRK2gyMVB6SXhNTkpjVzlSREtRZCtJU1dKa1BIeHY3V3E2OFhLZVUyR25LU2pEYVNDc3pESUxvMi9nN0dDQ3Y3U0xNdGp0Ym9EMEpPNHlPbUxyM3dwSGVFeHREK2xmcmJHUllGY1lxbWdla0dEc1JEZXlWTjZpaHlYOVR1WFdzUkZhc3J3SjhnUWE0OFlGM2dFalhJPQ%3d%3d",
          isPreferred: true,
          logoUrl:
            "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusProvider/a1d1Njluamt3UG0zWkhtNUtBSnl3Vk12b1F3bTJJZzlZN2ZBb2JqYmxhbWVXbkkwNndONEJQYkxVSmtUZG80bGxKZW8xdzdrSVpPOTQ5K2REc21BNzdmUnozWWlMaUVoTzRWWkZidXlhMDZXb3lnUi9Kb3hDUVNLd3c1ZGZyV0w=.png",
        },
      },
      quotation: {
        monetaryAmount: "471.00",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        isEstimated: false,
        base: {
          monetaryAmount: "471.00",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "430.66",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "430.66",
        },
        isEstimated: false,
        totalTaxes: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      distance: {
        value: 66,
        unit: "MI",
      },
      conditionSummary: [
        {
          descriptions: [
            {
              descriptionType: "PRICING",
              text: "Pricing includes base rate, tax, airport fees and tolls. Additional parking, tolls, wait time or stop fees will be added only if applicable. Cancellations must be made at least 2 hours before the scheduled pick up time to avoid cancellation charges equal to the rate quoted.",
            },
          ],
        },
      ],
    },
    {
      id: "8904080685",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
        address: {
          countryCode: "EG",
        },
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      cancellationRules: [
        {
          ruleDescription:
            "Cancellations must be made at least 2 hours before the scheduled pick up time to avoid cancellation charges equal to the rate quoted.",
        },
      ],
      duration: "PT1H52M",
      vehicle: {
        code: "SUV",
        category: "ST",
        description: "Amadeus Cars - SUV",
        imageURL:
          "https://io.groundspan.com/ImageProcessor/Images/AmadeusVehicle/Qnc5Rm8vR1ZKS01EZlRnZ3M0ODYyN2JBVlRTQVROMklFeHE0c25LTkRKaHBLMW4rdE1MUjRWcUluOUtUcXd1ZkF5aVVIRnVzbFdOVGFuS2hXWVJvaWg0WmowamxDMnNUYk5PaGtWakEzTEQrSnVsRk1pekNueUppWDdDTGlRQ1lxWk1WdXp3enRDU04yYXRCbU5YYndvd0tPRldCdE5PZTFPOW9heHptcGhRPQ==.png",
        baggages: [
          {
            count: 4,
          },
        ],
        seats: [
          {
            count: 5,
          },
        ],
      },
      serviceProvider: {
        code: "GSN",
        name: "GroundSpan",
        logoUrl: "https://qa20.groundspan.com/Amadeus/Images/GroundSpan.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      partnerInfo: {
        serviceProvider: {
          code: "AMA",
          name: "Amadeus Cars",
          termsUrl:
            "https://qa20.groundspan.com/Amadeus/Terms/VUdPVi9tbE1LMEYzaWV1TWdRMFJRQllsS3lWTEhBb1hTT29EaFRUN3dPL3BEblp6WFlXVnlJcWx6WUhyUk9pSllCOEdpQjVKZDMwZW1WbXFCTFpXMkVUNWp0UXBENzcyS0dscll6VUpyU3huTVltNlJITU5XckFPVjlacDFVOEYvaFhFRFFGcndDa00zOTBsYkpZWkNJWjZoTVluUmNiYlJEOGFRQ3gwK2dRPQ%3d%3d",
          isPreferred: true,
          logoUrl:
            "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusProvider/M3RIY1lMQjE5eWswV0NpOGlWVkF3c2lZdXpSMnFDVVhoUUFrVldPNnJpR01pbi8rS3RCVGdsSzNkQjBBVXZxVjBiMWVIcktRRW81bTZWQTgwNzRERUZCazltS04wZzBCTVNjZHpQb25DYVR2YmpMbThxbnZleE5yV3VxT0tDS0c=.png",
        },
      },
      quotation: {
        monetaryAmount: "366.33",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        isEstimated: false,
        base: {
          monetaryAmount: "366.33",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "334.95",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "334.95",
        },
        isEstimated: false,
        totalTaxes: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      distance: {
        value: 66,
        unit: "MI",
      },
      conditionSummary: [
        {
          descriptions: [
            {
              descriptionType: "PRICING",
              text: "Pricing includes base rate, tax, airport fees and tolls. Additional parking, tolls, wait time or stop fees will be added only if applicable. Cancellations must be made at least 2 hours before the scheduled pick up time to avoid cancellation charges equal to the rate quoted.",
            },
          ],
        },
      ],
    },
    {
      id: "8904081302",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
        address: {
          countryCode: "EG",
        },
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      cancellationRules: [
        {
          ruleDescription:
            "Cancellations must be made at least 2 hours before the scheduled pick up time to avoid cancellation charges equal to the rate quoted.",
        },
      ],
      duration: "PT1H52M",
      vehicle: {
        code: "CAR",
        category: "ST",
        description: "Amadeus Cars - Sedan",
        baggages: [
          {
            count: 2,
            size: "S",
          },
          {
            count: 2,
          },
        ],
        imageURL:
          "https://io.groundspan.com/ImageProcessor/Images/AmadeusVehicle/QmVmQ1d1MFVycWhxNktJc0tSOVNrZjh6S1pWa1pYUzJOUnY0SUdieW9NK0JCOWRTd1NWOW91TS9KemtNWXlhY2t1cUhuUEYrYWpEd1lZY2ZpeEdISFFHRWgxa2RMLzE0dUl2OFdjdFBnTll4NzY4VG5MLzY3eGxxRXlKbGFITXlqMERERHV5b2g1QUJ4NWVmNHRCR0JJWVVtOEZleEJuclhvZ0lHVlBSczZVPQ==.png",
        seats: [
          {
            count: 3,
          },
        ],
      },
      serviceProvider: {
        code: "GSN",
        name: "GroundSpan",
        logoUrl: "https://qa20.groundspan.com/Amadeus/Images/GroundSpan.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      partnerInfo: {
        serviceProvider: {
          code: "AMA",
          name: "Amadeus Cars",
          termsUrl:
            "https://qa20.groundspan.com/Amadeus/Terms/eDNrSllkR3BqMjdMb1k5UFp0dFBsT3Q1eXN5R2hmdzJvV0xMZWRSVjA3TU5JT1BwalMxbVNpZjhOeEdJa0NENGRRSFlUKzZNQUV6ODZhRysyY1VpZWVMd285S1orNXpFenQ0K0dnaXhYblc5bFRTVmFwZ0ZTaExpQm12WlBpWGJSWW9jZDZmenJvWW9aRUhBVVdLbERLU0lBRys0TXE1NEdCc3NtNUdqTldFPQ%3d%3d",
          isPreferred: true,
          logoUrl:
            "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusProvider/REczcHkyY2pkSjZwaDh3RFBjL3d0RXJOYkk1K2swclJkTWFUWTBrSElWSHVkN1Q0MGZrdXBrSkQxc2JNWHZRQzVwM2pPcElXUWZuRUZEVkZyeXNYYlB6NVFWSEUweUVacTVUWGFhYkdvQ3RZOUhlMmdmb3JhTWl4VVE1dUFJMjA=.png",
        },
      },
      quotation: {
        monetaryAmount: "270.25",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        isEstimated: false,
        base: {
          monetaryAmount: "270.25",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "247.10",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "247.10",
        },
        isEstimated: false,
        totalTaxes: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      distance: {
        value: 66,
        unit: "MI",
      },
      conditionSummary: [
        {
          descriptions: [
            {
              descriptionType: "PRICING",
              text: "Pricing includes base rate, tax, airport fees and tolls. Additional parking, tolls, wait time or stop fees will be added only if applicable. Cancellations must be made at least 2 hours before the scheduled pick up time to avoid cancellation charges equal to the rate quoted.",
            },
          ],
        },
      ],
    },
    {
      id: "8904081807",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
        address: {
          countryCode: "EG",
        },
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      cancellationRules: [
        {
          ruleDescription:
            "Cancellations must be made at least 2 hours prior to scheduled pick up time to avoid fees.",
        },
      ],
      duration: "PT1H52M",
      vehicle: {
        code: "CAR",
        category: "BU",
        description: "Carey - Executive Sedan",
        imageURL:
          "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusVehicle/OTlCMjZzK0txd0gzYVhoaVNRR3F6bEJOWXJYcjJGQm96UVc5UDg4eEg3cVhPejBIOWhoZSs1QmJ2Y09OSWxjQlVEWktuNW5SY0tWTDFRaS83dE5JNEdNYWFZYzhyQmZJUS9najcxdHFvMHZXVzAyYjBpL05lK3NxZFQ5MnhTckt1WWIvcFd4Q2ZzemtsSGxMbmlpY1Urb3ZyQ0dIdVlkdXI2SjdmM0N3bEFnPQ==.png",
        baggages: [
          {
            count: 2,
          },
        ],
        seats: [
          {
            count: 3,
          },
        ],
      },
      serviceProvider: {
        code: "GSN",
        name: "GroundSpan",
        logoUrl: "https://qa20.groundspan.com/Amadeus/Images/GroundSpan.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      partnerInfo: {
        serviceProvider: {
          code: "AKH",
          name: "Carey",
          termsUrl:
            "https://qa20.groundspan.com/Amadeus/Terms/R3luZlFFczlBb0FmZ2FPQ2kvWEdQME9oYzNTckI0M0xUK0xVQ0VmTHpXYkpWclJ2SXduSmovWEpJYS9LQzZmQXdIdDVpQzdFNVJFSFIzN3FVNXRwMkhiU3ZndnIxSCtibjBmd1JsbUYzYzJqVGdFRlpQS1N0bjN2bkZZaTNKdGRHdGVINFpjbU42NWlyU29tUGZaKzV2Ulp3ZXZVZS9ySmcrT3d2dWMxNFVRPQ%3d%3d",
          isPreferred: false,
          logoUrl:
            "https://qa20.groundspan.com/ImageProcessor/Images/AmadeusProvider/V2ROOUJja2ZyYncyQmQreEVQR0dIbzBQWlM1UWVXWkNFN3h0bHJtVFd4ZXNqNyt2cXFHQWFOWDlGdmZSa3lLdURId3gyL3FDUTZCcmluQk9nOVNMYy9yQm1NUTRKVnVONlZ0Nlh0c0RYQ01iSVgvMmxFNlBneW9NQ3VrRWZNNEU=.png",
        },
      },
      quotation: {
        monetaryAmount: "784.87",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        isEstimated: false,
        base: {
          monetaryAmount: "784.87",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "717.64",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "717.64",
        },
        isEstimated: false,
        totalTaxes: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      methodsOfPaymentAccepted: ["CREDIT_CARD"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
      distance: {
        value: 66,
        unit: "MI",
      },
      conditionSummary: [
        {
          descriptions: [
            {
              descriptionType: "PRICING",
              text: "STC is a surcharge based upon various overhead expense items, some of which may not relate to the specific trip. The STC is always calculated as a flat percentage of the base rate. The entire amount of all collected gratuities is paid to your professional chauffeur. For your convenience, a suggested gratuity, which is a percentage of the Base Rate, has been added to your bill. The amount of any gratuity you pay is at your discretion. Estimate includes surcharge, fuel, airport fee and suggested gratuity. Wait time, tolls, parking and local taxes may apply and are excluded. Additional service may change rate. Where hourly rates apply billing is garage to garage. Taxes and government fees include taxes imposed by all levels of taxing authorities and government fees and surcharges. Changes or cancellations must be made at least 4 hours prior to scheduled pick up time to avoid fees",
            },
          ],
        },
      ],
    },
    {
      id: "8904082341",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "CAR",
        category: "ST",
        description: "Toyota Prius+, Ford Mondeo",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/economy.png",
        baggages: [
          {
            count: 3,
            size: "M",
          },
        ],
        seats: [
          {
            count: 4,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "488.92",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "488.92",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "447.04",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "447.04",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904082817",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "VAN",
        category: "ST",
        description: "Mercedes-Benz Vito, VW Caravelle",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/economy_van.png",
        baggages: [
          {
            count: 6,
            size: "M",
          },
        ],
        seats: [
          {
            count: 6,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "500.42",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "500.42",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "457.56",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "457.56",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904083279",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "CAR",
        category: "ST",
        description: "Opel Zafira, VW Touran",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/economy_mpv.png",
        baggages: [
          {
            count: 4,
            size: "M",
          },
        ],
        seats: [
          {
            count: 4,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "579.19",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "579.19",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "529.58",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "529.58",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904083745",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "VAN",
        category: "ST",
        description: "Mercedes-Benz Sprinter",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/minibus.png",
        baggages: [
          {
            count: 16,
            size: "M",
          },
        ],
        seats: [
          {
            count: 16,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "579.19",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "579.19",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "529.58",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "529.58",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904084199",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "CAR",
        category: "BU",
        description: "Mercedes-Benz E-Class, BMW 5series",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/business.png",
        baggages: [
          {
            count: 3,
            size: "M",
          },
        ],
        seats: [
          {
            count: 3,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "619.71",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "619.71",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "566.63",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "566.63",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904084685",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "VAN",
        category: "BU",
        description: "Mercedes-Benz V-Class, Cadillac Escalade",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/business_van.png",
        baggages: [
          {
            count: 6,
            size: "M",
          },
        ],
        seats: [
          {
            count: 6,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "619.71",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "619.71",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "566.63",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "566.63",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904085172",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "CAR",
        category: "BU",
        description: "Mercedes-Benz Vito GLS, Chevrolet Suburban",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/business_mpv.png",
        baggages: [
          {
            count: 4,
            size: "M",
          },
        ],
        seats: [
          {
            count: 4,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "698.48",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "698.48",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "638.65",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "638.65",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
    {
      id: "8904085687",
      type: "transfer-offer",
      transferType: "PRIVATE",
      start: {
        dateTime: "2024-03-21T16:30:00",
        locationCode: "CAI",
      },
      end: {
        dateTime: "2024-03-21T17:30:00",
        address: {
          line: "المنصورة",
          countryCode: "EG",
          cityName: "المنصورة",
          latitude: 30.6346957,
          longitude: 31.3583121,
        },
      },
      vehicle: {
        code: "CAR",
        category: "FC",
        description: "Mercedes-Benz S-Class, BMW 7series",
        imageURL:
          "https://static-beta.talixo-staging.com/images/vehicles/first.png",
        baggages: [
          {
            count: 3,
            size: "M",
          },
        ],
        seats: [
          {
            count: 3,
          },
        ],
      },
      serviceProvider: {
        code: "TXO",
        name: "Talixo",
        termsUrl:
          "https://s3-eu-west-1.amazonaws.com/static-beta.talixo-staging.com/email-attachments/tos/amadeus/default.html",
        logoUrl:
          "https://static.talixo.de/images/talixo-logo-covid-tag-green.png",
        settings: ["FLIGHT_NUMBER_REQUIRED", "CORPORATION_INFO_REQUIRED"],
      },
      quotation: {
        monetaryAmount: "852.54",
        currencyCode: "USD",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        totalTaxes: {
          monetaryAmount: "0",
        },
        base: {
          monetaryAmount: "852.54",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
      },
      converted: {
        monetaryAmount: "779.52",
        currencyCode: "EUR",
        taxes: [
          {
            monetaryAmount: "0",
          },
        ],
        base: {
          monetaryAmount: "779.52",
        },
        discount: {
          monetaryAmount: "0",
        },
        totalFees: {
          monetaryAmount: "0",
        },
        totalTaxes: {
          monetaryAmount: "0",
        },
      },
      cancellationRules: [
        {
          feeType: "PERCENTAGE",
          feeValue: "100",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "0",
          metricMax: "3",
          ruleDescription: "Non-refundable within 3 hours of pick-up time",
        },
        {
          feeType: "VALUE",
          feeValue: "0",
          currencyCode: "USD",
          metricType: "HOURS",
          metricMin: "3",
          metricMax: "1000",
          ruleDescription: "Free cancellation up to 3 hours prior to ride",
        },
      ],
      methodsOfPaymentAccepted: ["CREDIT_CARD", "INVOICE"],
      passengerCharacteristics: {
        passengerTypeCode: "CAI",
        age: 22,
      },
    },
  ],
});
