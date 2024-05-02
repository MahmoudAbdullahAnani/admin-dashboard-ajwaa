import { atom } from "recoil";

export const ChooseCityNameHotel = atom({
  key: "ChooseCityNameHotel", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const HotelChoose = atom({
  key: "HotelChoose", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
export const ChooseHotelIDs = atom({
  key: "ChooseHotelIDs", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
// Main Data SerpAPI
export const SerpAPIHotels = atom({
  key: "SerpAPIHotels",
  default: [
    {
      type: "hotel",
      name: "شتيجنبرجر",
      description:
        "غرف وأجنحة بسيطة في فندق أنيق يضمّ بارَين وحوض سباحة خارجيًا وإطلالات على النهر",
      link: "https://www.steigenberger.com/en/hotels/all-hotels/egypt/cairo/steigenberger-el-tahrir-cairo",
      gps_coordinates: {
        latitude: 30.046728500000004,
        longitude: 31.235258999999996,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏6,025 ج.م.‏",
        extracted_lowest: 6025,
        before_taxes_fees: "‏4,672 ج.م.‏",
        extracted_before_taxes_fees: 4672,
      },
      total_rate: {
        lowest: "‏6,025 ج.م.‏",
        extracted_lowest: 6025,
        before_taxes_fees: "‏4,672 ج.م.‏",
        extracted_before_taxes_fees: 4672,
      },
      deal: "17% أقل من المعتاد",
      deal_description: "Deal",
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Walking",
              duration: "3 د",
            },
          ],
        },
        {
          name: "QNB - Champollion Rd",
          transportations: [
            {
              type: "Walking",
              duration: "3 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "30 د",
            },
            {
              type: "Public transport",
              duration: "1 س 17 د",
            },
          ],
        },
        {
          name: "مطعم علي بابا",
          transportations: [
            {
              type: "Walking",
              duration: "3 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPeU-HvX6IEyi2pJEM-r4HxrOLNHHTVoErm1Rts=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPeU-HvX6IEyi2pJEM-r4HxrOLNHHTVoErm1Rts=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOcGHFv3Oic8kTKm_DZWLOReul6tvu4-jGxGjXm=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOcGHFv3Oic8kTKm_DZWLOReul6tvu4-jGxGjXm=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPlrpfLAVN3e2SXqhUrDHH6f1D2jkW83yY9gg8v=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPlrpfLAVN3e2SXqhUrDHH6f1D2jkW83yY9gg8v=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNpLOaf2jm1-pWV7aTKikHe9-k0kEkoSmpUxoSI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNpLOaf2jm1-pWV7aTKikHe9-k0kEkoSmpUxoSI=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/yxeqZuT1Rc10vljTIOXyf5lFxm63Xs9cH7omrPSpqMJleQa2rxZBDpbvx3kUELNKC06C7JRgB6y2AENfTFF6dbF3ZRiKnuLJ8BXCitDfDalCof_pl9Ot-JrqBiHQWUEzUV29S_uYlFZmPXt01JoqzsBItqXR18o=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/57/571161/571161a_hb_a_004.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOUOpK_kjtMQrRudIkvN3iL3RQh7NTpWoCT-Ruc=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOUOpK_kjtMQrRudIkvN3iL3RQh7NTpWoCT-Ruc=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMdf3leBHq7MgSF3ndVkzOm-vatKONclP0DHMJR=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMdf3leBHq7MgSF3ndVkzOm-vatKONclP0DHMJR=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMs2qaarLk5zTmLl46pSratgaeVEhr_7Ueda0bH=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMs2qaarLk5zTmLl46pSratgaeVEhr_7Ueda0bH=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOwHU9ij87rFKatrL3ELq0g6xCYXVrNxuiP1ynL=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOwHU9ij87rFKatrL3ELq0g6xCYXVrNxuiP1ynL=s10000",
        },
      ],
      overall_rating: 4.7,
      reviews: 15240,
      ratings: [
        {
          stars: 5,
          count: 12325,
        },
        {
          stars: 4,
          count: 1949,
        },
        {
          stars: 3,
          count: 552,
        },
        {
          stars: 2,
          count: 157,
        },
        {
          stars: 1,
          count: 257,
        },
      ],
      location_rating: 4.7,
      reviews_breakdown: [
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 3681,
          positive: 3455,
          negative: 147,
          neutral: 79,
        },
        {
          name: "المطاعم",
          description: "Food and Beverage",
          total_mentioned: 925,
          positive: 834,
          negative: 55,
          neutral: 36,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 1261,
          positive: 1199,
          negative: 32,
          neutral: 30,
        },
        {
          name: "مطعم",
          description: "Restaurant",
          total_mentioned: 620,
          positive: 594,
          negative: 4,
          neutral: 22,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 2234,
          positive: 2021,
          negative: 132,
          neutral: 81,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 1329,
          positive: 1214,
          negative: 34,
          neutral: 81,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Parking ($)",
        "Outdoor pool",
        "Air conditioning",
        "Fitness centre",
        "Bar",
        "Restaurant",
        "Room service",
        "Full-service laundry",
        "Accessible",
        "Child-friendly",
      ],
      property_token: "ChoIvcq-2vyWnLelARoNL2cvMTFieWN6cmQ1ZxAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoIvcq-2vyWnLelARoNL2cvMTFieWN6cmQ1ZxAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "هيلتون رمسيس",
      description:
        "يعمل جهاز تكيّيف وجهاز تدفئة على ضمان مناخ داخلي مريح في الغرف. تعدّ الشرفة جزءاً من المواصفات القياسية لمعظم …",
      link: "https://www.hilton.com/en/hotels/cairhtw-ramses-hilton/?SEO_id=GMB-EMEA-TW-CAIRHTW",
      gps_coordinates: {
        latitude: 30.050365,
        longitude: 31.2320411,
      },
      check_in_time: "3:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏6,472 ج.م.‏",
        extracted_lowest: 6472,
        before_taxes_fees: "‏5,018 ج.م.‏",
        extracted_before_taxes_fees: 5018,
      },
      total_rate: {
        lowest: "‏6,472 ج.م.‏",
        extracted_lowest: 6472,
        before_taxes_fees: "‏5,018 ج.م.‏",
        extracted_before_taxes_fees: 5018,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Walking",
              duration: "6 د",
            },
          ],
        },
        {
          name: "Hilton Ramses",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "32 د",
            },
            {
              type: "Public transport",
              duration: "1 س 29 د",
            },
          ],
        },
      ],
      hotel_class: "فندق 5 نجوم",
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOHx-fKhQla4BAF5LMz7yL4AUp5ZMIRDCo1Pa7A=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOHx-fKhQla4BAF5LMz7yL4AUp5ZMIRDCo1Pa7A=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMUA3OoTbVB6_XxZO1WaEuC2Gof6T7rHI2cFgtv=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMUA3OoTbVB6_XxZO1WaEuC2Gof6T7rHI2cFgtv=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO1Q6MQeovCH5hVqoapise9W5zQZEgmI00kRG2c=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO1Q6MQeovCH5hVqoapise9W5zQZEgmI00kRG2c=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNfDfpfjzGXJ7wWmSY6zzxHNCuohXgTb6C5C9gC=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNfDfpfjzGXJ7wWmSY6zzxHNCuohXgTb6C5C9gC=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOsqcEIqPZhbTxRiKp1T0V6rhNleicnhxAFxQ0k=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOsqcEIqPZhbTxRiKp1T0V6rhNleicnhxAFxQ0k=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMgkNNSF-c7B9QWHznHqv3Ar2r0O7JFXmICnMXv=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMgkNNSF-c7B9QWHznHqv3Ar2r0O7JFXmICnMXv=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNyeuX_Ddwbo_tCLnkNw8pZaTbHNIMaU1UGNm1i=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNyeuX_Ddwbo_tCLnkNw8pZaTbHNIMaU1UGNm1i=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNPM00p6HYNduaYNPzxPTAJLkT-O2mN8hE3yWgV=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNPM00p6HYNduaYNPzxPTAJLkT-O2mN8hE3yWgV=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNVkKkUGvQax-L_Z6LPlnsC7O7vuhEffKNlxcNS=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNVkKkUGvQax-L_Z6LPlnsC7O7vuhEffKNlxcNS=s10000",
        },
      ],
      overall_rating: 4.2,
      reviews: 25083,
      ratings: [
        {
          stars: 5,
          count: 14757,
        },
        {
          stars: 4,
          count: 4895,
        },
        {
          stars: 3,
          count: 2674,
        },
        {
          stars: 2,
          count: 930,
        },
        {
          stars: 1,
          count: 1827,
        },
      ],
      location_rating: 4.6,
      reviews_breakdown: [
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 2440,
          positive: 1468,
          negative: 726,
          neutral: 246,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 1903,
          positive: 1153,
          negative: 604,
          neutral: 146,
        },
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 841,
          positive: 377,
          negative: 365,
          neutral: 99,
        },
        {
          name: "المطاعم",
          description: "Food and Beverage",
          total_mentioned: 487,
          positive: 352,
          negative: 96,
          neutral: 39,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 607,
          positive: 464,
          negative: 92,
          neutral: 51,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 1095,
          positive: 780,
          negative: 155,
          neutral: 160,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Parking ($)",
        "Outdoor pool",
        "Air conditioning",
        "Fitness centre",
        "Bar",
        "Restaurant",
        "Room service",
        "Kitchen in rooms",
        "Full-service laundry",
        "Accessible",
        "Business centre",
        "Child-friendly",
      ],
      property_token: "ChgI4Zu50OT07OrxARoLL2cvMXRmM2t4amsQAQ",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChgI4Zu50OT07OrxARoLL2cvMXRmM2t4amsQAQ&q=CAIRO",
    },
    {
      type: "hotel",
      name: "Golden palace Hotel",
      description:
        "يمتلك هذا الفندق مصعد وقسم استقبال. من ضمن تجهيزات مكان الإقامة هناك حفظ أمتعة وخزينة. يتسنى للضيوف من خلال …",
      link: "https://goldenpalacehotel2019.business.site/?utm_source=gmb&utm_medium=referral",
      gps_coordinates: {
        latitude: 30.0516857,
        longitude: 31.240861700000004,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏1,662 ج.م.‏",
        extracted_lowest: 1662,
        before_taxes_fees: "‏1,445 ج.م.‏",
        extracted_before_taxes_fees: 1445,
      },
      total_rate: {
        lowest: "‏1,662 ج.م.‏",
        extracted_lowest: 1662,
        before_taxes_fees: "‏1,445 ج.م.‏",
        extracted_before_taxes_fees: 1445,
      },
      nearby_places: [
        {
          name: "برج القاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "8 د",
            },
          ],
        },
        {
          name: "Talaat Harb Mall (Downtown)",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "27 د",
            },
            {
              type: "Public transport",
              duration: "1 س 2 د",
            },
          ],
        },
        {
          name: "سندوتشات الاشوال",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipM9Uffu55BZHy6aGAMEQnmodGQnpVx8nET5S1wW=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipM9Uffu55BZHy6aGAMEQnmodGQnpVx8nET5S1wW=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO7IdwR4hTLX25GpUw8bpv6TUSpJDqhcwRL7Oye=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO7IdwR4hTLX25GpUw8bpv6TUSpJDqhcwRL7Oye=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipORiQOYzgqF1q961gzUX6phpIkEUhbC9Zk7Gy7f=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipORiQOYzgqF1q961gzUX6phpIkEUhbC9Zk7Gy7f=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipN2ZVnjs3h53HnVOqRPeUVI7urDbRMGQ9pHdSDl=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipN2ZVnjs3h53HnVOqRPeUVI7urDbRMGQ9pHdSDl=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOqFsl_Soyi2npqj2wLYJeZPydZNk-ve7fhw5Kn=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOqFsl_Soyi2npqj2wLYJeZPydZNk-ve7fhw5Kn=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNo0ccX9PNzG-3Jx3Q5d_LLNOrVcU8r2i5ixR-C=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNo0ccX9PNzG-3Jx3Q5d_LLNOrVcU8r2i5ixR-C=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/KoLWP2WdExYbqUumOKNGmeT98om9hzAjR6OjetX7WChXHY2UgBuP0eXE8jH7QUatnIl7zKdXmjvncjTYPcRFa4wW39ffaw3d6jwiO1hoTo4VT31DUP8OVAQNbL05r45cT3fgk76K-XhMz0nPieO5itiu6QJ4dQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/db/0b/db0bb86a0686bc80c1763eb312b084d03031946a.jpeg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/qGxczvFDANZNK52bah6zh1kV3VPhrvGEmEMEFHKYOMdxoL9rgz-HpO6_6-7lwHoKBGV8vhxSXhBvtlzA6cgnYb2T3sbwhlZOpL58aAtO5MMt4Czsax0okAGJh1auFBmtmxKKF2Dci54PSEBFRoyLENIgYkYJaQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/ee/d2/eed2d8a808dbcf5f45f3689fa0c7af774f726fe6.jpeg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/PTAAoS06X-7WH7ogC6KorGBrAso38cXqmbbEAPeFmMoQk3tKP0NeMlPHI1kO4sf5ZP5Gi-OP7aH8T0T0Qwn7IIegkMlYOuNtp-rRJNSl-ZNpcqY1gJE-ziUdLtsWi6QNzLROx1Kk1qWtp5ouWiZwmoA1P13tGvg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/66/a4/b2/caption.jpg",
        },
      ],
      overall_rating: 4.5,
      reviews: 518,
      ratings: [
        {
          stars: 5,
          count: 410,
        },
        {
          stars: 4,
          count: 39,
        },
        {
          stars: 3,
          count: 27,
        },
        {
          stars: 2,
          count: 12,
        },
        {
          stars: 1,
          count: 30,
        },
      ],
      location_rating: 4.7,
      reviews_breakdown: [
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 169,
          positive: 160,
          negative: 5,
          neutral: 4,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 118,
          positive: 109,
          negative: 7,
          neutral: 2,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 161,
          positive: 136,
          negative: 19,
          neutral: 6,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 100,
          positive: 89,
          negative: 5,
          neutral: 6,
        },
        {
          name: "الأجواء",
          description: "Atmosphere",
          total_mentioned: 55,
          positive: 55,
          negative: 0,
          neutral: 0,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 33,
          positive: 24,
          negative: 6,
          neutral: 3,
        },
      ],
      amenities: [
        "Free breakfast",
        "Free Wi-Fi",
        "Air conditioning",
        "Restaurant",
        "Full-service laundry",
      ],
      property_token: "ChoIqLbY1MuRnuqmARoNL2cvMTFqMGIwenFxdBAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoIqLbY1MuRnuqmARoNL2cvMTFqMGIwenFxdBAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "نيو جاردن بالاس هوتيل",
      description:
        "يسعد طاقم الموظفين المضياف عند قسم الاستقبال المساعدة لدى وجود أي استفسار. يشمل العرض مختلف الخدمات والتجهيزات …",
      link: "http://www.hostelworld.com/hosteldetails.php/New-Garden-Palace-Hotel/Cairo/34140?affiliate=wendatravel",
      gps_coordinates: {
        latitude: 30.035350899999997,
        longitude: 31.233401599999997,
      },
      check_in_time: "12:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏989 ج.م.‏",
        extracted_lowest: 989,
        before_taxes_fees: "‏860 ج.م.‏",
        extracted_before_taxes_fees: 860,
      },
      total_rate: {
        lowest: "‏989 ج.م.‏",
        extracted_lowest: 989,
        before_taxes_fees: "‏860 ج.م.‏",
        extracted_before_taxes_fees: 860,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "6 د",
            },
          ],
        },
        {
          name: "Roz Al Youssef Magazine (Garden City)",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "34 د",
            },
            {
              type: "Public transport",
              duration: "1 س 24 د",
            },
          ],
        },
        {
          name: "مطعم السلطان فول و فلافل",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
      ],
      hotel_class: "فندق 3 نجوم",
      extracted_hotel_class: 3,
      images: [
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/9xEgXl11LkCoruHbjn4ON4vADBD6rZSWGiP9i1FcpWZ7Qq01RRW0OfN4l4CL7tiLLVluTymEvgwW0rLdzeN2yTA2xb34ayY9PHurpWXbev4FZMqF-YMXlfTNOyddgcJiOgCBmdeQ3C95gbIwKORw2tCEm1SvK_w=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dd/42/35/photo2jpg.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/54Ds2KEmPhKuUm8ESckaoLS2uc0OVG1V4E2ry1zJUna4g_JoY2_pQEUwaki-SWLn9k7uFpeq_RfD34eJtC7G-SEz8nPBcbbi5uFIaX2_P6UPnmRaiZf6o580EeqqxfCjXuzrSS32ApEfVqB-lRG4EpWX-x98OeY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/84/02/8402f4afdd65098f30e8c12177aaaccb0eb79234.jpeg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/OmqgemaEtszR2yCzchNdF9jIfGrvYf9DIN5lov-2Wi7TKl0V8mn5Agwp943_r4jFQLvJlH_xy63h819vONaPtvt5mLxNWctnTdEzPOSyf5r8DR262D0J2GaA0KHXaiQUALnvadIgBEoJoejKQ4YRr2OoqMpH4xQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dd/25/3a/you-should-not-miss-this.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPYgmQVf2wDRSRkg0PF27441AVeAdUqr6MGQE3_=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPYgmQVf2wDRSRkg0PF27441AVeAdUqr6MGQE3_=s10000",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/LLPkNuxG__BXTAMJGAjB-Fiqbjizn6f67m0EBCTTveGpr_enFk8YNjeWMkgo5JliiQ8lXEe06jTcQpEEgbLkQDGWoDYJoKym2o8ra_ZAewa87jv-DJhv7Jse04xO3RL95E2_Z1_1sYoIISD0_XTjEsyPDEEZKAY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/b3/59/b35975420f49d0ce4aa0d2529a9d16fea4bfd541.jpeg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/JeBycUH4SSb0WuK2m_GenZHs9kQ2IKn5Tkk__z8jwklS8xGcLZS9s-VZKkkIxL7mm8WSkQN7GPXE8VTYH9xRlK-hK_9cXjWDAu9j1OIBDuvVJLeeEVHEOv7BVtW4LnBLobq0PLrEQAup04jEHZKWtCqRiSW53w=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dd/42/38/photo5jpg.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/fZX_9uu6GGzev-rCCOG3zStvvoS3LSlVpDi2wmIZQk8BNaS5D-ZaS3wbBqHCYh7sUG6h_uexXnv6IFnSwShUshxe03LNU0d-Ep8VnolC2lGiwfeK-b_hdr_Hs6crMFAkDUpfiB3S7B50meCoNnW8x6HrE2AsPw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dd/42/36/photo3jpg.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPvnPCXsTPtbcbUWtmO2pQXZ-WK9o-mDo10f23s=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPvnPCXsTPtbcbUWtmO2pQXZ-WK9o-mDo10f23s=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipP8a4p35ve3Gvwmz8D0G_olLsxqBJ_osuGtN6c=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipP8a4p35ve3Gvwmz8D0G_olLsxqBJ_osuGtN6c=s10000",
        },
      ],
      overall_rating: 4.4,
      reviews: 3798,
      ratings: [
        {
          stars: 5,
          count: 3130,
        },
        {
          stars: 4,
          count: 65,
        },
        {
          stars: 3,
          count: 112,
        },
        {
          stars: 2,
          count: 87,
        },
        {
          stars: 1,
          count: 404,
        },
      ],
      location_rating: 4,
      reviews_breakdown: [
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 238,
          positive: 131,
          negative: 101,
          neutral: 6,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 181,
          positive: 79,
          negative: 90,
          neutral: 12,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 52,
          positive: 0,
          negative: 48,
          neutral: 4,
        },
        {
          name: "تلفزيون",
          description: "Room entertainment",
          total_mentioned: 20,
          positive: 0,
          negative: 20,
          neutral: 0,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 92,
          positive: 11,
          negative: 79,
          neutral: 2,
        },
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 48,
          positive: 7,
          negative: 39,
          neutral: 2,
        },
      ],
      amenities: [
        "Free Wi-Fi",
        "Air conditioning",
        "Restaurant",
        "Full-service laundry",
        "Child-friendly",
      ],
      property_token: "ChcIwsK488PF5qZFGgsvZy8xdGx3NmNiNRAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChcIwsK488PF5qZFGgsvZy8xdGx3NmNiNRAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "Nile View Inn",
      link: "https://www.nileviewinn.com/",
      gps_coordinates: {
        latitude: 30.0180679,
        longitude: 31.223239499999995,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏950 ج.م.‏",
        extracted_lowest: 950,
        before_taxes_fees: "‏950 ج.م.‏",
        extracted_before_taxes_fees: 950,
      },
      total_rate: {
        lowest: "‏950 ج.م.‏",
        extracted_lowest: 950,
        before_taxes_fees: "‏950 ج.م.‏",
        extracted_before_taxes_fees: 950,
      },
      nearby_places: [
        {
          name: "الكنيسة المعلقة",
          transportations: [
            {
              type: "Taxi",
              duration: "8 د",
            },
          ],
        },
        {
          name: "Al Rawda Square (Al Manial)",
          transportations: [
            {
              type: "Walking",
              duration: "4 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "36 د",
            },
            {
              type: "Public transport",
              duration: "1 س 39 د",
            },
          ],
        },
        {
          name: "اطلانتيس",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
      ],
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNpWfIk-paTlUJLnWODi-PhbakJs1XOOjIKVSWh=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNpWfIk-paTlUJLnWODi-PhbakJs1XOOjIKVSWh=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOBsz0qj5TVj3NiQucJDD082cECwBlnr4aAA0kG=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOBsz0qj5TVj3NiQucJDD082cECwBlnr4aAA0kG=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMJyAy3lE63c9tWnCimwim5pBRqlEZRcbx894ec=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMJyAy3lE63c9tWnCimwim5pBRqlEZRcbx894ec=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMC8Pmx4RM7nZiyBcQqjoUjywGitoToGA0fb5iK=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMC8Pmx4RM7nZiyBcQqjoUjywGitoToGA0fb5iK=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipM4LdNZwV_li28DoJN77kwvEqS0N02Rvh_6PL97=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipM4LdNZwV_li28DoJN77kwvEqS0N02Rvh_6PL97=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPxq4_P0CE3yYjigLZ6RMuCqJZ3DT5oDhxBkgw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPxq4_P0CE3yYjigLZ6RMuCqJZ3DT5oDhxBkgw=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPHsRatstkHCYRqtnWOB7CW4bd-DZ4CLskFEouq=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPHsRatstkHCYRqtnWOB7CW4bd-DZ4CLskFEouq=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMD85pYuB3vzga1wTdpCkytpoHdNsEOsydYre_d=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMD85pYuB3vzga1wTdpCkytpoHdNsEOsydYre_d=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipP9oEeVRChm-qDe__P8EevxNF3OxyYH350c7ghV=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipP9oEeVRChm-qDe__P8EevxNF3OxyYH350c7ghV=s10000",
        },
      ],
      overall_rating: 4.6,
      reviews: 451,
      ratings: [
        {
          stars: 5,
          count: 365,
        },
        {
          stars: 4,
          count: 37,
        },
        {
          stars: 3,
          count: 19,
        },
        {
          stars: 2,
          count: 7,
        },
        {
          stars: 1,
          count: 23,
        },
      ],
      location_rating: 4.1,
      reviews_breakdown: [
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 33,
          positive: 27,
          negative: 2,
          neutral: 4,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 48,
          positive: 42,
          negative: 5,
          neutral: 1,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 63,
          positive: 47,
          negative: 10,
          neutral: 6,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 61,
          positive: 54,
          negative: 5,
          neutral: 2,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 38,
          positive: 32,
          negative: 2,
          neutral: 4,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 21,
          positive: 14,
          negative: 5,
          neutral: 2,
        },
      ],
      amenities: [
        "Free Wi-Fi",
        "Restaurant",
        "Room service",
        "Full-service laundry",
        "Accessible",
      ],
      property_token: "ChoIkbKP3aHqtcyVARoNL2cvMTFwcTQzMDcxehAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoIkbKP3aHqtcyVARoNL2cvMTFwcTQzMDcxehAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "Holiday Express Hotel",
      description:
        "فندق بسيط يتميّز بغرف وأجنحة مريحة ويضم مطعمًا معاصرًا وصالة للشيشة وناديًا رياضيًا",
      link: "http://www.holidaysexpresshotel.com/",
      gps_coordinates: {
        latitude: 30.0591197,
        longitude: 31.2075497,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏1,930 ج.م.‏",
        extracted_lowest: 1930,
        before_taxes_fees: "‏1,497 ج.م.‏",
        extracted_before_taxes_fees: 1497,
      },
      total_rate: {
        lowest: "‏1,930 ج.م.‏",
        extracted_lowest: 1930,
        before_taxes_fees: "‏1,497 ج.م.‏",
        extracted_before_taxes_fees: 1497,
      },
      deal: "27% أقل من المعتاد",
      deal_description: "Great Deal",
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "9 د",
            },
          ],
        },
        {
          name: "Sphinx Square",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "36 د",
            },
            {
              type: "Public transport",
              duration: "1 س 32 د",
            },
          ],
        },
        {
          name: "بهية المهندسين",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNdPjHlkAbGe4qoh5JFpWFIDOFTLCQ9deAM4Px3=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNdPjHlkAbGe4qoh5JFpWFIDOFTLCQ9deAM4Px3=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMF4crA--LTAF_SuZYQlQx1WHoaiv4gnp4WmJDh=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMF4crA--LTAF_SuZYQlQx1WHoaiv4gnp4WmJDh=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/nU44iIjSWvYJCBDW-gkIJst0qpRx2D2L2QUZMbsUMr6rKwJbvNCHfGyy3MDHDAs9IviXXrHRLMLSTVlDR8l4-ESh2Ml6tQY4MfKM5xUTzyKG3Jjty2zAo7aShlGIrw4PZDUZdV8a8ZoG8GbbY0G1cyNpbXNtRw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/18/185360/185360a_hb_ro_019.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/GPHIjBxCXP2QM2MuGsLr0zecbM9IEprif8Oo8HChGQlRvxYLgYqDYT_Vyn_wlfW5wk5l4eqGXbvo6npFKticr0o_rph1q6joD9_AAWvFH35AMqSWaMYfOYwmgUBGZRM38XeciPpo_GucENyvIxB_lskSMS4KDw8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/18/185360/185360a_hb_ro_020.JPG",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNFmlPlMYy59O7-Y0VHMOcmt_21Qttn13bV7bFB=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNFmlPlMYy59O7-Y0VHMOcmt_21Qttn13bV7bFB=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipP6WLweAx2bsrEARctJ2OsNxVgQaAtSJiGiadvl=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipP6WLweAx2bsrEARctJ2OsNxVgQaAtSJiGiadvl=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/1W9x-goarKiYyXwauvBAsAKhlu7IytMRSGzSz26JEFqCu_9u8EenoUk3FDK1V_kA3YnyLh3FilydgS2GsBorpa2LvfvnR3B38VqtAqN60t8G3LGDSNEJ52v1LUEPpSHv3T_mQ8dxteCiijANCDiIJEhlypQBbA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/8d/de/8dde6912574b0406faef7536b4a365106af085db.jpeg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/ecren9zfphUqJ_3Uhe_SR-C-WlNX-_DswMaP4Ce4sVcmbn-ZxvPPImJDM0cdAxsqK_-PDs4frR3MEqU5kTx274OOYIvLSIAsW1oQyYS1q_yVNhVJHqoTR1eB9afNz078Prhk9N3Xo9jjwiYhgUTx6UkLDcMSog=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/13/1c/aa/restaurant-cafe.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/xAzNF429lbYQsd4VdV8Sa0bi45EHBqAdypOo3dLOWB8M4ioo_3Wj4RwCJnY0_ZWwA4dtUnFVdKOnlBDHy42powff2chl0ar44egiAyJlf_64bOtTNVeWbhdGYjCTc-2dNzCO0YQfo4Ba5b-eu_YSyzciKLvQFFw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/aa/a2/aaa279ede146aeb059ad4fbe088555e23dce64a9.jpeg",
        },
      ],
      overall_rating: 3.2,
      reviews: 1054,
      ratings: [
        {
          stars: 5,
          count: 321,
        },
        {
          stars: 4,
          count: 136,
        },
        {
          stars: 3,
          count: 229,
        },
        {
          stars: 2,
          count: 117,
        },
        {
          stars: 1,
          count: 251,
        },
      ],
      location_rating: 3.2,
      reviews_breakdown: [
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 131,
          positive: 43,
          negative: 74,
          neutral: 14,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 78,
          positive: 10,
          negative: 63,
          neutral: 5,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 118,
          positive: 36,
          negative: 73,
          neutral: 9,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 59,
          positive: 34,
          negative: 17,
          neutral: 8,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 21,
          positive: 0,
          negative: 19,
          neutral: 2,
        },
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 38,
          positive: 3,
          negative: 35,
          neutral: 0,
        },
      ],
      amenities: [
        "Breakfast",
        "Free Wi-Fi",
        "Parking",
        "Air conditioning",
        "Spa",
        "Bar",
        "Restaurant",
        "Room service",
        "Airport shuttle",
        "Full-service laundry",
        "Accessible",
      ],
      property_token: "ChgIvZWo2dyIwq7-ARoLL2cvMXRnXzB6dGwQAQ",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChgIvZWo2dyIwq7-ARoLL2cvMXRnXzB6dGwQAQ&q=CAIRO",
    },
    {
      type: "hotel",
      name: "فندق تريومف",
      description:
        "فندق أنيق يتميز بغرف دافئة تطل على المدينة مع مطعمَين ومخبز متاح على مدار الساعة طيلة أيام الأسبوع ونادٍ رياضي",
      link: "https://triumphhotel.com/plaza-home/",
      gps_coordinates: {
        latitude: 30.086216599999997,
        longitude: 31.3058207,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏2,471 ج.م.‏",
        extracted_lowest: 2471,
        before_taxes_fees: "‏2,072 ج.م.‏",
        extracted_before_taxes_fees: 2072,
      },
      total_rate: {
        lowest: "‏2,471 ج.م.‏",
        extracted_lowest: 2471,
        before_taxes_fees: "‏2,072 ج.م.‏",
        extracted_before_taxes_fees: 2072,
      },
      nearby_places: [
        {
          name: "Triumph Hotel",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "20 د",
            },
            {
              type: "Public transport",
              duration: "52 د",
            },
          ],
        },
        {
          name: "دجاج كنتاكي",
          transportations: [
            {
              type: "Walking",
              duration: "7 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPG4RrUNQMXwWTMm90kW4qDU0r5cRJsNIEC6jn_=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPG4RrUNQMXwWTMm90kW4qDU0r5cRJsNIEC6jn_=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMOTuizTj_GBv8lqaJG0EaNYiD60RBxDYBtrAAq=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMOTuizTj_GBv8lqaJG0EaNYiD60RBxDYBtrAAq=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOiXs5fLUbw_i7D5zonZ4pUFn3biys-1nsFRQWs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOiXs5fLUbw_i7D5zonZ4pUFn3biys-1nsFRQWs=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/2rYOColzd3nUk4W-JamyJtQPhsLMPVvXNTSISqgdO_avApVTM5hFeGF_KFx8CwpKvMXBNhXUUP9lBbhtGKZqAJSwKeyXEdvLbYrObw507JXhR7SQI6AyKOJMBbZ9fu4hX6CNlze2Z45FZIv99fOz93sdbMGydA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KAANLpQUFAEaiyl2OYHZrxoRY8buEp_Y",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPebQh3K-O4MZCig_TsGPWEn7p71McZIjYC-9NX=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPebQh3K-O4MZCig_TsGPWEn7p71McZIjYC-9NX=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/9TOowH_I4HehOjQN6TpIAvIu_3gOz8wLYL4KZ096iPlvxDrqM95bro0_JznGznIBV5qug9oqKbSLDaPf1oJWGI0Bj_BCYpLb5S7xj5ntW33Sij3bb4j9IZYWjsvGpyDj1n7VMYnyIZqSkSSsO2HGoKSysXFB37s=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KAD9BxQUFAK_7Rw1iShQODPrtjlNWaMM",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPsoVwK2rS2QNTqlTDwwD8Budg4t_pIqXtl62lk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPsoVwK2rS2QNTqlTDwwD8Budg4t_pIqXtl62lk=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/j5lJo9TnzJXFN7CuaAQhlRYCnY5fWyqi2maHHKn7FQDcnzIJ5WhRnLk4fKCo6ZpLCdAQM1LhKAwin1FwD5oZU9FZT5rQObB216OhK_e-uDttDmBr18Q_b5vl-DHsmQus3-UfkwK69x-LsSWmfwMoYzjVfFak_MI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KAB1LpQUFALqGRvmA4vKy7OUh2nYI-6M",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/wu59evniDTQzNYTfKAOtM7n0QVosRKnb-wBa0xJ8o0WCvfAOnerNxCwWn4oWRclXPVgqwfK3H8EAiP4Apzl59o5MDRvK5M0twmF2C7cZibtd_pgNEvkbjGQOjp1dnjrFH0mAlyqoiz1uR_ZN3cFe8aGEkIz9hZ8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KABtLpQUFABcrWnu0W0sWd52kn1ZJGRI",
        },
      ],
      overall_rating: 4.2,
      reviews: 6972,
      ratings: [
        {
          stars: 5,
          count: 3838,
        },
        {
          stars: 4,
          count: 1687,
        },
        {
          stars: 3,
          count: 864,
        },
        {
          stars: 2,
          count: 227,
        },
        {
          stars: 1,
          count: 356,
        },
      ],
      location_rating: 3.2,
      reviews_breakdown: [
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 528,
          positive: 431,
          negative: 60,
          neutral: 37,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 448,
          positive: 341,
          negative: 77,
          neutral: 30,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 160,
          positive: 130,
          negative: 12,
          neutral: 18,
        },
        {
          name: "تكييف الهواء",
          description: "Air conditioning",
          total_mentioned: 13,
          positive: 3,
          negative: 10,
          neutral: 0,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 30,
          positive: 5,
          negative: 18,
          neutral: 7,
        },
        {
          name: "مرافِق النوم",
          description: "Sleep",
          total_mentioned: 36,
          positive: 10,
          negative: 22,
          neutral: 4,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Parking ($)",
        "Air conditioning",
        "Fitness centre",
        "Spa",
        "Restaurant",
        "Room service",
        "Full-service laundry",
        "Accessible",
        "Child-friendly",
      ],
      property_token: "ChcI6fikx7SjvfwUGgsvZy8xdGZkdnZmbRAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChcI6fikx7SjvfwUGgsvZy8xdGZkdnZmbRAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "New Royal Grand Hotel Cairo",
      description:
        "فندق بسيط يقع في مبنى أنيق من القرن التاسع عشر ويضمّ غرفًا متواضعة كما يقدّم وجبة فطور",
      link: "http://www.newcairohotelgrandroyal.com/",
      gps_coordinates: {
        latitude: 30.047560599999997,
        longitude: 31.238494199999998,
      },
      check_in_time: "12:30 م",
      check_out_time: "11:30 ص",
      rate_per_night: {
        lowest: "‏1,020 ج.م.‏",
        extracted_lowest: 1020,
        before_taxes_fees: "‏792 ج.م.‏",
        extracted_before_taxes_fees: 792,
      },
      total_rate: {
        lowest: "‏1,020 ج.م.‏",
        extracted_lowest: 1020,
        before_taxes_fees: "‏792 ج.م.‏",
        extracted_before_taxes_fees: 792,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Walking",
              duration: "9 د",
            },
          ],
        },
        {
          name: "Talaat Harb Square (Downtown)",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "27 د",
            },
            {
              type: "Public transport",
              duration: "1 س 8 د",
            },
          ],
        },
        {
          name: "مطعم شارع الحمرا",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOhj7mzGKOxvlXgmC3UvXrnmTBJ8P5TI7dPUsPJ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOhj7mzGKOxvlXgmC3UvXrnmTBJ8P5TI7dPUsPJ=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipM0_8NfLZixMKJ81b_Hv3vmy4EA975EFLSHM1Ht=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipM0_8NfLZixMKJ81b_Hv3vmy4EA975EFLSHM1Ht=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/JKkA0YRInYvbnze7FCv5CDejokhy-oKNLB2sUGxBz78W3_G3txq28WAQQgcUBLebjsH990dwa200WE4Qp5u9GK2erSIQJlTGWpYGkSb6bh5kpJEyyHIeKP3ZPE7oy5aEMCHoP1rIZVKedVIL7dUrtELQkr3tCUE=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/93/81/9381995168085302f0cc7ed36b5daebce0cbae74.jpeg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNlKS-YmusAWsIsTtLuSGcAlBhGYG-VHITD9B5r=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNlKS-YmusAWsIsTtLuSGcAlBhGYG-VHITD9B5r=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/kRj6l1sQxydHIT-P1rz5ZvSXHU2rbHNiiOc6diR7GVw41lXMyBrq0bvtisf4Ngf-IgtjBrx6yK6LqWaaJNfx_6kWYzgjOru4tQSM0knASsRq3mtdpMaY1lajBD6ev91_xw52H6fsZqzA9wDNoaTVHuJVabRrAOs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/extranet/45/b6/45b6499df4ab03fa41707b926729a2353726a801.jpeg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/j6IQU8p_Omhma3LuslzZA7Xgg2XtTC1E--SeneLDzcWnCdf6kXJJq24_bwk2Pud-BCNCJ5USensMX-M8WDurkXo3FlMty570vnduI2Eam7dXLi19wMjqFsruJp81ZsBvG_Ttx_DdXraULQXNU2mnMQd4CY-ln-I=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/f5/6d/f56ded6691c437742288a3f50d9b00b98d9bc3f2.jpeg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/H07jaoP7DEoJA4h6N8rhqc0WZZJzKChywobLzR1EuWUkDDWabnoSc1R3Ph4H0r3xR8HjJaCd67T65cvF_o2PMRv2bpPL7aKATJTCazsSffDza8q8OKJlr5c6-26Iwxi8dvvFbiiwBN0nq399PJsBQlHxAkr6zQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/d7/67/hotel-grand-royal.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO0kNdtQZUVBIEskl70jyyrrZqF10cA095WxL8D=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO0kNdtQZUVBIEskl70jyyrrZqF10cA095WxL8D=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMn_GEpv4qoCXRd8v6Twjld_AiOqi1R1rfRkrJz=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMn_GEpv4qoCXRd8v6Twjld_AiOqi1R1rfRkrJz=s10000",
        },
      ],
      overall_rating: 4,
      reviews: 924,
      ratings: [
        {
          stars: 5,
          count: 538,
        },
        {
          stars: 4,
          count: 104,
        },
        {
          stars: 3,
          count: 115,
        },
        {
          stars: 2,
          count: 52,
        },
        {
          stars: 1,
          count: 115,
        },
      ],
      location_rating: 4.7,
      reviews_breakdown: [
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 139,
          positive: 78,
          negative: 50,
          neutral: 11,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 93,
          positive: 68,
          negative: 8,
          neutral: 17,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 119,
          positive: 86,
          negative: 24,
          neutral: 9,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 83,
          positive: 47,
          negative: 33,
          neutral: 3,
        },
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 42,
          positive: 12,
          negative: 19,
          neutral: 11,
        },
        {
          name: "مرافِق النوم",
          description: "Sleep",
          total_mentioned: 40,
          positive: 7,
          negative: 28,
          neutral: 5,
        },
      ],
      amenities: [
        "Free breakfast",
        "Free Wi-Fi",
        "Parking ($)",
        "Restaurant",
        "Airport shuttle",
        "Full-service laundry",
        "Child-friendly",
      ],
      property_token: "ChgI_dWeoLD59vBiGgwvZy8xMTNodnk1ZjMQAQ",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChgI_dWeoLD59vBiGgwvZy8xMTNodnk1ZjMQAQ&q=CAIRO",
    },
    {
      type: "hotel",
      name: "فندق هورايزون شهرزاد",
      description:
        "غرف مفروشة بشكل بسيط في فندق مريح يضمّ مطعمًا ومركزًا للّياقة البدنية ويتميّز بإطلالات على النهر",
      link: "https://www.horizonshahrazad.com/",
      gps_coordinates: {
        latitude: 30.056978299999997,
        longitude: 31.2154469,
      },
      check_in_time: "2:00 م",
      check_out_time: "11:00 ص",
      rate_per_night: {
        lowest: "‏2,502 ج.م.‏",
        extracted_lowest: 2502,
        before_taxes_fees: "‏1,943 ج.م.‏",
        extracted_before_taxes_fees: 1943,
      },
      total_rate: {
        lowest: "‏2,502 ج.م.‏",
        extracted_lowest: 2502,
        before_taxes_fees: "‏1,943 ج.م.‏",
        extracted_before_taxes_fees: 1943,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "6 د",
            },
          ],
        },
        {
          name: "Al Agouza Hospital",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "34 د",
            },
            {
              type: "Public transport",
              duration: "1 س 17 د",
            },
          ],
        },
        {
          name: "White Roof Restaurant",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOc7IIWulqsedFoRPaYKvDtyBqODW2iM2AOAdt4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOc7IIWulqsedFoRPaYKvDtyBqODW2iM2AOAdt4=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNqvsixLjFtMdOCz84p2KSSlUe2jMS0n2P_Du6d=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNqvsixLjFtMdOCz84p2KSSlUe2jMS0n2P_Du6d=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMmlRcDj0oaPpdCc5S9zpMnp7B4TP7gZ6MKB3ps=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMmlRcDj0oaPpdCc5S9zpMnp7B4TP7gZ6MKB3ps=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/uqJNGwRAf0niZi3hPkM1vL4LJqcCOZgA4CINzKA7xugXGV1nYyimKgF64egfaP6MlGh2_hhGijtn8_6sHAIQDWKU5AKJ2Qz4CyyGR90U1Pw9iKzcJM9eKueHefYoD5D9VosKY9cF5tMx4j9DzsLHvzNwfUSvhg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/28/284713/284713a_hb_l_002.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/mSztSuWgNQfbCQbECvkUrIW88iThCw645tOeLGOjxkGe2pv6TeBur84BD1r7uujyQjiwkO1qg1QZcZ5nP8jp4NkzLWLt6mMLJtVkwitp1AAHXIxAWeRW2P7CNVUb1SuXouWG2PutpStJyXSdVs5pImUxkjIW7pY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/28/284713/284713a_hb_w_001.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNJau56HblNA49SiwOlEsxvzV7DVP2rdwb7mJ6m=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNJau56HblNA49SiwOlEsxvzV7DVP2rdwb7mJ6m=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/OLRFqe3TjGY-EkKoZakA-Yp_WhSogmimfzXyvKHYb3yijC52PXB-_ukGFmGPNUQFEKUiiNXd_nE7gyAiwYxVDhyNUKtb0uCWwjUKztdqOOQI8M_XbWduc1YGjrleujnCmKaZ7GpwGETXelprStVSnmM453JMAA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/28/284713/284713a_hb_r_001.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNHD8Y8YV8e-AWrcYxO1nKn8TC5dllDzinSxSRY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNHD8Y8YV8e-AWrcYxO1nKn8TC5dllDzinSxSRY=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPbQjrr2sViqjnNQYEk2h1J0_tivrp4YL4e0ubt=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPbQjrr2sViqjnNQYEk2h1J0_tivrp4YL4e0ubt=s10000",
        },
      ],
      overall_rating: 3.4,
      reviews: 3171,
      ratings: [
        {
          stars: 5,
          count: 1228,
        },
        {
          stars: 4,
          count: 475,
        },
        {
          stars: 3,
          count: 534,
        },
        {
          stars: 2,
          count: 243,
        },
        {
          stars: 1,
          count: 691,
        },
      ],
      location_rating: 3.3,
      reviews_breakdown: [
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 232,
          positive: 33,
          negative: 173,
          neutral: 26,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 95,
          positive: 2,
          negative: 87,
          neutral: 6,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 220,
          positive: 25,
          negative: 185,
          neutral: 10,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 311,
          positive: 88,
          negative: 194,
          neutral: 29,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 329,
          positive: 113,
          negative: 196,
          neutral: 20,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 185,
          positive: 98,
          negative: 57,
          neutral: 30,
        },
      ],
      amenities: [
        "Breakfast",
        "Free Wi-Fi",
        "Pool",
        "Air conditioning",
        "Restaurant",
        "Room service",
        "Airport shuttle",
        "Full-service laundry",
        "Accessible",
        "Child-friendly",
      ],
      property_token: "ChoIo6e3ivvK8-HgARoNL2cvMTFidHY2NGt0MBAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoIo6e3ivvK8-HgARoNL2cvMTFidHY2NGt0MBAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "فندق نوفوتيل برج القاهرة",
      description:
        "فندق حديث يوفّر إطلالات على نهر النيل ويضمّ مطعمًا ومقهًى على السطح ومسبحًا خارجيًا",
      link: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=6600&merchantid=seo-maps-EG-6600&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTUzNTk4NjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      gps_coordinates: {
        latitude: 30.0444933,
        longitude: 31.226782600000003,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏4,429 ج.م.‏",
        extracted_lowest: 4429,
        before_taxes_fees: "‏3,189 ج.م.‏",
        extracted_before_taxes_fees: 3189,
      },
      total_rate: {
        lowest: "‏4,429 ج.م.‏",
        extracted_lowest: 4429,
        before_taxes_fees: "‏3,189 ج.م.‏",
        extracted_before_taxes_fees: 3189,
      },
      nearby_places: [
        {
          name: "برج القاهرة",
          transportations: [
            {
              type: "Walking",
              duration: "6 د",
            },
          ],
        },
        {
          name: "Opera House",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "31 د",
            },
            {
              type: "Public transport",
              duration: "1 س 21 د",
            },
          ],
        },
        {
          name: "لو جوت",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNCiypolBtrs8vYR_JCMIOKk0nSiCzSgXmWjYbW=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNCiypolBtrs8vYR_JCMIOKk0nSiCzSgXmWjYbW=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPzvJ31qcWiByvIkFo4q7iyLvigqgE3b_swgYn1=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPzvJ31qcWiByvIkFo4q7iyLvigqgE3b_swgYn1=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOfNroae-q8QK8F9EWvGTelXeTER2khFJupHYw8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOfNroae-q8QK8F9EWvGTelXeTER2khFJupHYw8=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNXDejfkqhj7LzMehlBvZDceZVnscwp7QPJj3mk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNXDejfkqhj7LzMehlBvZDceZVnscwp7QPJj3mk=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMFOKU-xetaK9TC7QKOYhRFr6YFNBK2fBn-r8YB=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMFOKU-xetaK9TC7QKOYhRFr6YFNBK2fBn-r8YB=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOF3bDiqeIGqQyuwXe7Gp1MdVbB6ckIcjOcZLwu=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOF3bDiqeIGqQyuwXe7Gp1MdVbB6ckIcjOcZLwu=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/9IIYM8II0pN6nzFu1fCoYpwrBMobFFJw3dGxS9m7llQDIsJ7aohnku50lVByRH_gxDZXOz3Pq3bmZ2tbSNgjaXoXUDris0lketaxMaJNqCbM1VF20TdmnVvycrEXVWWEqqPzHLWMAHnQWE4xHv9Yk_M9TQ9ybw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/13/134910/134910a_hb_ro_070.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMQhVoEEeoF_gPCLm1iem572v_es14sZ5UhNHQl=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMQhVoEEeoF_gPCLm1iem572v_es14sZ5UhNHQl=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMbXrZgPM7MInxV2Dt6IcpshN70mj9MhaUkqqDx=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMbXrZgPM7MInxV2Dt6IcpshN70mj9MhaUkqqDx=s10000",
        },
      ],
      overall_rating: 4.5,
      reviews: 7652,
      ratings: [
        {
          stars: 5,
          count: 5655,
        },
        {
          stars: 4,
          count: 1069,
        },
        {
          stars: 3,
          count: 451,
        },
        {
          stars: 2,
          count: 171,
        },
        {
          stars: 1,
          count: 306,
        },
      ],
      location_rating: 4.6,
      reviews_breakdown: [
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 2109,
          positive: 1883,
          negative: 166,
          neutral: 60,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 552,
          positive: 466,
          negative: 62,
          neutral: 24,
        },
        {
          name: "المطاعم",
          description: "Food and Beverage",
          total_mentioned: 364,
          positive: 279,
          negative: 59,
          neutral: 26,
        },
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 604,
          positive: 375,
          negative: 182,
          neutral: 47,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 1343,
          positive: 1145,
          negative: 119,
          neutral: 79,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 810,
          positive: 719,
          negative: 70,
          neutral: 21,
        },
      ],
      amenities: [
        "Free breakfast",
        "Free Wi-Fi",
        "Free parking",
        "Outdoor pool",
        "Air conditioning",
        "Fitness centre",
        "Bar",
        "Restaurant",
        "Room service",
        "Full-service laundry",
        "Accessible",
        "Business centre",
        "Child-friendly",
      ],
      property_token: "ChgI2Im_xeGNyqq7ARoLL2cvMXY2X2RwcGYQAQ",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChgI2Im_xeGNyqq7ARoLL2cvMXY2X2RwcGYQAQ&q=CAIRO",
    },
    {
      type: "hotel",
      name: "كوزموبوليتان",
      description:
        "يعمل جهاز تكيّيف وجهاز تدفئة على ضمان مناخ داخلي مريح في الغرف. تعدّ الشرفة جزءاً من التجهيزات الاعتيادية …",
      link: "https://cosmopolitancairo.com/",
      gps_coordinates: {
        latitude: 30.0478024,
        longitude: 31.2406543,
      },
      check_in_time: "12:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏2,732 ج.م.‏",
        extracted_lowest: 2732,
        before_taxes_fees: "‏2,151 ج.م.‏",
        extracted_before_taxes_fees: 2151,
      },
      total_rate: {
        lowest: "‏2,732 ج.م.‏",
        extracted_lowest: 2732,
        before_taxes_fees: "‏2,151 ج.م.‏",
        extracted_before_taxes_fees: 2151,
      },
      nearby_places: [
        {
          name: "برج القاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "8 د",
            },
          ],
        },
        {
          name: "Talaat Harb Square (Downtown)",
          transportations: [
            {
              type: "Walking",
              duration: "4 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "27 د",
            },
            {
              type: "Public transport",
              duration: "1 س 8 د",
            },
          ],
        },
        {
          name: "مطعم روستيكا",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPdoy0LKtoQMGEjr___ZksXHMmoHrklZCB3u-Bo=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPdoy0LKtoQMGEjr___ZksXHMmoHrklZCB3u-Bo=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOy6dY5pjcY_phfxqw7_3kgTP9iUU3EzGMac6xI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOy6dY5pjcY_phfxqw7_3kgTP9iUU3EzGMac6xI=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOI7IPp4c17UhbMdqSJVP1Jt3fIBjcufecuEl_N=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOI7IPp4c17UhbMdqSJVP1Jt3fIBjcufecuEl_N=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/Qy5w51Xc4dbXAdsmk23-hxATfPeQFXX9GtxmGcLjfBst5xyLTu2qqxfvjMnbuiD45Fa-9FFlws69VTBrCbcs5WeddqdFlQSL7SQ3lireG4NoEztpJw3jJxC_OnNYmIbBbz68WvokSOqA85ab4j-Dl9QVPkkpnS8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/extranet/e5/fe/e5fe0ca44db3f37ac71f2922b9d2763f78512f1a.jpeg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/s1FP_vn_SANmk65jRTk2rsh7PDeMgH-Pp418FsG1kU_HKQCjCdsdI9F9KN2w2zwGWjsdwLfEmc2oddkPQSE2RXtWxryYbnCQ81hi3fdzIZQms2VaiiIeAuGy1YqTHWCK2OqE1fzWjrqCkbI9l-A1Gen57q947A=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/94/947986/947986a_hb_w_002.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNi4oxqxlud44SsmMf-hgDWAaJOXxLHiOEp_Ltm=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNi4oxqxlud44SsmMf-hgDWAaJOXxLHiOEp_Ltm=s10000",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/rzqWRvwuPcnjf8B4PxAzybcV003gXKSSXbSojlx0ZqJQvBPJnzDa-g1eSxNnOZGN1eEAkdrF24mjNFBCk3nuN5tSn0ungIrKPfGLoObJHkFO1gbUNQYe4hfFiFA_Rsu2bx9PeUDqkbD6o6vvSOrbJrrogWTcXQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/94/947986/947986a_hb_ba_001.jpeg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipP-Ich4Bb2I3yWQ4B2leJAlIk2ZceVh99qsuD7K=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipP-Ich4Bb2I3yWQ4B2leJAlIk2ZceVh99qsuD7K=s10000",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/trk7fR6WrcvQYLh1phNM4hNrlhfOW5ODmGyFWPIuvC8kguDhHZDBNwN2Rz1hb0EFVEwAyVhGUt4pqXA8CPsog5XLz8pwn1eDuHVovGFLrNFEMyTXS0owuA4t2P1fBs4J51unHiHTRSSw7XxIkWwEaBQRbAomkF0=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/extranet/b9/c3/b9c31921dcd3dda2dd174eb266e723b54b84ae31.jpeg",
        },
      ],
      overall_rating: 4.1,
      reviews: 561,
      ratings: [
        {
          stars: 5,
          count: 344,
        },
        {
          stars: 4,
          count: 80,
        },
        {
          stars: 3,
          count: 65,
        },
        {
          stars: 2,
          count: 21,
        },
        {
          stars: 1,
          count: 51,
        },
      ],
      location_rating: 4.7,
      reviews_breakdown: [
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 90,
          positive: 47,
          negative: 30,
          neutral: 13,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 72,
          positive: 44,
          negative: 26,
          neutral: 2,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 56,
          positive: 44,
          negative: 9,
          neutral: 3,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 21,
          positive: 3,
          negative: 17,
          neutral: 1,
        },
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 23,
          positive: 5,
          negative: 17,
          neutral: 1,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 21,
          positive: 12,
          negative: 8,
          neutral: 1,
        },
      ],
      amenities: [
        "Free breakfast",
        "Free Wi-Fi",
        "Free parking",
        "Air conditioning",
        "Restaurant",
        "Airport shuttle",
        "Full-service laundry",
        "Child-friendly",
      ],
      property_token: "ChcI7vba5dfgmqkSGgsvZy8xdGYwNG5kbhAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChcI7vba5dfgmqkSGgsvZy8xdGYwNG5kbhAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "The President Hotel Cairo",
      description:
        "غرف متواضعة في فندق بسيط يضمّ مطعمَين ومتجرًا للمعجنات الفرنسية وصالة",
      link: "http://www.thepresidentcairo.com/",
      gps_coordinates: {
        latitude: 30.0675107,
        longitude: 31.2195847,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏3,671 ج.م.‏",
        extracted_lowest: 3671,
        before_taxes_fees: "‏2,851 ج.م.‏",
        extracted_before_taxes_fees: 2851,
      },
      total_rate: {
        lowest: "‏3,671 ج.م.‏",
        extracted_lowest: 3671,
        before_taxes_fees: "‏2,851 ج.م.‏",
        extracted_before_taxes_fees: 2851,
      },
      nearby_places: [
        {
          name: "Yamama Center",
          transportations: [
            {
              type: "Walking",
              duration: "7 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "40 د",
            },
            {
              type: "Public transport",
              duration: "1 س 12 د",
            },
          ],
        },
        {
          name: "اوليفو بيتزا وبار ( زمالك )",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: "فندق 3 نجوم",
      extracted_hotel_class: 3,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO8DY1C-d-ps_7eHpWM_TQcKdB-momRd7DZk2ak=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO8DY1C-d-ps_7eHpWM_TQcKdB-momRd7DZk2ak=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMZ8uUAeyctankZ1Bv-5jzJQIYWFte8wZ4o9wBX=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMZ8uUAeyctankZ1Bv-5jzJQIYWFte8wZ4o9wBX=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNQHkzCMeHCS7g1I1XvEl8NnX8UmIin38UQinm5=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNQHkzCMeHCS7g1I1XvEl8NnX8UmIin38UQinm5=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPfUDLMoiO15BtRiSuQnDRpdZIEYmEWr8JgGb_G=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPfUDLMoiO15BtRiSuQnDRpdZIEYmEWr8JgGb_G=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPSSyxdI6ksqz2oyBi41Bzs6ReCa8CVx5qbOI2l=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPSSyxdI6ksqz2oyBi41Bzs6ReCa8CVx5qbOI2l=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO9QXNm8YsP6XRokXr_SJd46KPOBLN6QkAxRI8K=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO9QXNm8YsP6XRokXr_SJd46KPOBLN6QkAxRI8K=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMeAJUIc5fEECpU_-fnE66I-7k3j7MD-NjaUd5C=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMeAJUIc5fEECpU_-fnE66I-7k3j7MD-NjaUd5C=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMMVnPmvAvob32XLtRsmXNf5vf-vGoGItMTxjp3=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMMVnPmvAvob32XLtRsmXNf5vf-vGoGItMTxjp3=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO2SsZaoCEawvyxZuzr-IaCPiIO4DVDy_OcwdD0=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO2SsZaoCEawvyxZuzr-IaCPiIO4DVDy_OcwdD0=s10000",
        },
      ],
      overall_rating: 4.8,
      reviews: 7952,
      ratings: [
        {
          stars: 5,
          count: 7170,
        },
        {
          stars: 4,
          count: 262,
        },
        {
          stars: 3,
          count: 207,
        },
        {
          stars: 2,
          count: 67,
        },
        {
          stars: 1,
          count: 246,
        },
      ],
      location_rating: 3.5,
      reviews_breakdown: [
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 649,
          positive: 571,
          negative: 54,
          neutral: 24,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 422,
          positive: 344,
          negative: 64,
          neutral: 14,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 184,
          positive: 152,
          negative: 19,
          neutral: 13,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 184,
          positive: 135,
          negative: 39,
          neutral: 10,
        },
        {
          name: "الأجواء",
          description: "Atmosphere",
          total_mentioned: 139,
          positive: 133,
          negative: 3,
          neutral: 3,
        },
        {
          name: "المطاعم",
          description: "Food and Beverage",
          total_mentioned: 41,
          positive: 27,
          negative: 12,
          neutral: 2,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Parking ($)",
        "Air conditioning",
        "Fitness centre",
        "Spa",
        "Bar",
        "Restaurant",
        "Room service",
        "Kitchen in some rooms",
        "Airport shuttle",
        "Full-service laundry",
        "Accessible",
      ],
      property_token: "ChcIpcC99s_dlLFqGgsvZy8xdGQ1YzJ4ehAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChcIpcC99s_dlLFqGgsvZy8xdGQ1YzJ4ehAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "The Square Boutique Hotel",
      description:
        "يمتلك هذا الفندق مصعد وقسم استقبال. يشمل العرض مختلف الخدمات والتجهيزات - حفظ أمتعة ومكتبة وغسالة تعمل بعملات …",
      link: "http://thesquareboutiquehotel.com/",
      gps_coordinates: {
        latitude: 30.0473604,
        longitude: 31.238731400000002,
      },
      check_in_time: "2:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏2,677 ج.م.‏",
        extracted_lowest: 2677,
        before_taxes_fees: "‏2,308 ج.م.‏",
        extracted_before_taxes_fees: 2308,
      },
      total_rate: {
        lowest: "‏2,677 ج.م.‏",
        extracted_lowest: 2677,
        before_taxes_fees: "‏2,308 ج.م.‏",
        extracted_before_taxes_fees: 2308,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Walking",
              duration: "10 د",
            },
          ],
        },
        {
          name: "Talaat Harb Square (Downtown)",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "27 د",
            },
            {
              type: "Public transport",
              duration: "1 س 9 د",
            },
          ],
        },
        {
          name: "مطعم شارع الحمرا",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: "فندق 3 نجوم",
      extracted_hotel_class: 3,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNd6IceDCcEJt4PInMZb2yxdv0He38-8CPQzAn1=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNd6IceDCcEJt4PInMZb2yxdv0He38-8CPQzAn1=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPCT8Nh57AXlmS6LFv7g0FbGzKG0Qs0QV_HF8Sj=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPCT8Nh57AXlmS6LFv7g0FbGzKG0Qs0QV_HF8Sj=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMpGUtQwaHmEOZpkPbhndvU3Viyt7ER8lM3B0SB=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMpGUtQwaHmEOZpkPbhndvU3Viyt7ER8lM3B0SB=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOjWNmS2GA7x5K1cLgawRb61-0eR8UO6IsDAwqF=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOjWNmS2GA7x5K1cLgawRb61-0eR8UO6IsDAwqF=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipM8Whk6semCF8BYAhtLWOqRWlATO3W2pVo1R15B=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipM8Whk6semCF8BYAhtLWOqRWlATO3W2pVo1R15B=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOsdx9zhNzyonssebEk_fkI-TnTsQtK5n2JXkFi=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOsdx9zhNzyonssebEk_fkI-TnTsQtK5n2JXkFi=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPR_RkyC3KymKVyp9iba7-hX_rHAVPh5r9vtEAP=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPR_RkyC3KymKVyp9iba7-hX_rHAVPh5r9vtEAP=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMCx0-tTTomPKdCAiW_cjyDnC9x7o22IO6DFClr=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMCx0-tTTomPKdCAiW_cjyDnC9x7o22IO6DFClr=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOhMLwV2vZcbzAoaiMG9lMKscDxpC9yc83fbnia=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOhMLwV2vZcbzAoaiMG9lMKscDxpC9yc83fbnia=s10000",
        },
      ],
      overall_rating: 4.1,
      reviews: 168,
      ratings: [
        {
          stars: 5,
          count: 98,
        },
        {
          stars: 4,
          count: 26,
        },
        {
          stars: 3,
          count: 22,
        },
        {
          stars: 2,
          count: 7,
        },
        {
          stars: 1,
          count: 15,
        },
      ],
      location_rating: 4.7,
      reviews_breakdown: [
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 24,
          positive: 14,
          negative: 9,
          neutral: 1,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 16,
          positive: 13,
          negative: 1,
          neutral: 2,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 17,
          positive: 6,
          negative: 11,
          neutral: 0,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 39,
          positive: 30,
          negative: 7,
          neutral: 2,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 28,
          positive: 23,
          negative: 3,
          neutral: 2,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 38,
          positive: 23,
          negative: 9,
          neutral: 6,
        },
      ],
      amenities: [
        "Free breakfast",
        "Free Wi-Fi",
        "Air conditioning",
        "Restaurant",
        "Room service",
        "Full-service laundry",
        "Child-friendly",
      ],
      property_token: "ChoIrY-ilZqgwvPoARoNL2cvMTFmajVxODZ5ahAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoIrY-ilZqgwvPoARoNL2cvMTFmajVxODZ5ahAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "باريس الشرق",
      gps_coordinates: {
        latitude: 30.047772000000002,
        longitude: 31.242430099999996,
      },
      check_in_time: "2:00 م",
      check_out_time: "11:00 ص",
      rate_per_night: {
        lowest: "‏615 ج.م.‏",
        extracted_lowest: 615,
        before_taxes_fees: "‏527 ج.م.‏",
        extracted_before_taxes_fees: 527,
      },
      total_rate: {
        lowest: "‏615 ج.م.‏",
        extracted_lowest: 615,
        before_taxes_fees: "‏527 ج.م.‏",
        extracted_before_taxes_fees: 527,
      },
      nearby_places: [
        {
          name: "برج القاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "8 د",
            },
          ],
        },
        {
          name: "Mohammed Farid Post Office",
          transportations: [
            {
              type: "Walking",
              duration: "3 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "28 د",
            },
            {
              type: "Public transport",
              duration: "1 س 6 د",
            },
          ],
        },
        {
          name: "مطعم وصايا",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOIjsf13DZtasXpcTHFNRTw-TnkYkx-jnMgwwO5=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOIjsf13DZtasXpcTHFNRTw-TnkYkx-jnMgwwO5=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMGtNE8C7xQApMZR3wFN4d1GwY-pRtW53E1qLgf=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMGtNE8C7xQApMZR3wFN4d1GwY-pRtW53E1qLgf=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNoT3ad5A97zJQ5L9JP9Ud7WKqMSJpEf_uufVf2=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNoT3ad5A97zJQ5L9JP9Ud7WKqMSJpEf_uufVf2=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMqEAO1zfUAktuIOOQXmvOXwlVpt46RrJL_J14w=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMqEAO1zfUAktuIOOQXmvOXwlVpt46RrJL_J14w=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPLJy7AVbpqO9fBodt8W7M8fVkw3gzFEIOuCc-4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPLJy7AVbpqO9fBodt8W7M8fVkw3gzFEIOuCc-4=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMKDpl9nlH4cXFk-cfwtYUE5L0Pf4eUjaAhFaqI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMKDpl9nlH4cXFk-cfwtYUE5L0Pf4eUjaAhFaqI=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOCi0Ke-fNqiw--is18Ot7rHrztTiR5trpFF443=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOCi0Ke-fNqiw--is18Ot7rHrztTiR5trpFF443=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOJHuqeNosmB_LhwNWEd3tH7S52p6hvzaIz5pl2=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOJHuqeNosmB_LhwNWEd3tH7S52p6hvzaIz5pl2=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNqJP5LIK6ntGrvR6NLg2Gi8jm_EX0QUbGfYevg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNqJP5LIK6ntGrvR6NLg2Gi8jm_EX0QUbGfYevg=s10000",
        },
      ],
      overall_rating: 4.8,
      reviews: 68,
      ratings: [
        {
          stars: 5,
          count: 61,
        },
        {
          stars: 4,
          count: 5,
        },
        {
          stars: 3,
          count: 0,
        },
        {
          stars: 2,
          count: 0,
        },
        {
          stars: 1,
          count: 2,
        },
      ],
      location_rating: 4.6,
      reviews_breakdown: [
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 9,
          positive: 8,
          negative: 0,
          neutral: 1,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 10,
          positive: 9,
          negative: 1,
          neutral: 0,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 7,
          positive: 6,
          negative: 0,
          neutral: 1,
        },
      ],
      property_token: "ChoIpf7u8aCtv9KMARoNL2cvMTFzdHZkbl81NxAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoIpf7u8aCtv9KMARoNL2cvMTFzdHZkbl81NxAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "فنــــــــــدق مركــــز التجارة العالمي القاهرة للأجنحـــــــــــــة الفندقيـــــــــــــــــة",
      description:
        "في الغرف هناك فراغ معيشة ومطبخ وحمام، يهتم جهاز تكيّيف وجهاز تدفئة بضمان مناخ داخلي مريح. يعد وجود البلكون في …",
      link: "https://wtccairohotel.com/",
      gps_coordinates: {
        latitude: 30.063936100000003,
        longitude: 31.228256299999998,
      },
      check_in_time: "3:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏5,059 ج.م.‏",
        extracted_lowest: 5059,
        before_taxes_fees: "‏3,923 ج.م.‏",
        extracted_before_taxes_fees: 3923,
      },
      total_rate: {
        lowest: "‏5,059 ج.م.‏",
        extracted_lowest: 5059,
        before_taxes_fees: "‏3,923 ج.م.‏",
        extracted_before_taxes_fees: 3923,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "9 د",
            },
          ],
        },
        {
          name: "Al Ahli Bank (Courniche Boulaq)",
          transportations: [
            {
              type: "Walking",
              duration: "4 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "37 د",
            },
            {
              type: "Public transport",
              duration: "1 س 10 د",
            },
          ],
        },
        {
          name: "Sirocco Restaurant & Pool Bar",
          transportations: [
            {
              type: "Walking",
              duration: "4 د",
            },
          ],
        },
      ],
      hotel_class: " فندق 4 نجوم",
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/sufAGulGtXpegCXkhFSiL0A00p7I13m1CtuPOvxZxwGV5UOdV8tDdWpjtVnhB_fdVV-pjLtK9jnp3AFfMdEurvarDMDXG781Cpn238sUWMBFPYGC9feSCcCWN3ern_36qPAlOKLjEIhNpmWSBwb2Bze-n4siAYI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/145/373/326/WTC_03795_(Residences_Exterior_-_at_night)_O.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO_YgM4QfodmBYe-h-m_uM2pJ6zKCw1Wo4kXNZo=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO_YgM4QfodmBYe-h-m_uM2pJ6zKCw1Wo4kXNZo=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOgdUcQ1QIXal7elUgHaFGdyTmQ-PMbD2aj0WCb=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOgdUcQ1QIXal7elUgHaFGdyTmQ-PMbD2aj0WCb=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMhsI9GafYQFViA5dFrsWrhvjSzVYqNe8AcmI3_=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMhsI9GafYQFViA5dFrsWrhvjSzVYqNe8AcmI3_=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNkLs_CRYPcUnmGbIAyq3kwfzfAcYVDtAklyaM7=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNkLs_CRYPcUnmGbIAyq3kwfzfAcYVDtAklyaM7=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPr7U7NfKBXR4tUj2U3fr75YC4E8_H0BnBKtNcM=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPr7U7NfKBXR4tUj2U3fr75YC4E8_H0BnBKtNcM=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPe3D6pXujK2IA111P71SMC5mDHt9zF91-_dvvp=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPe3D6pXujK2IA111P71SMC5mDHt9zF91-_dvvp=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMR6_V7VC-1TnJOt0jZaIlQ6MSy_wNXQKLNWLBj=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMR6_V7VC-1TnJOt0jZaIlQ6MSy_wNXQKLNWLBj=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOvSlaoo2_d5Q8jAQ8Tp4fWzNSdImYUq6wPL2B7=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOvSlaoo2_d5Q8jAQ8Tp4fWzNSdImYUq6wPL2B7=s10000",
        },
      ],
      overall_rating: 4.1,
      reviews: 372,
      ratings: [
        {
          stars: 5,
          count: 220,
        },
        {
          stars: 4,
          count: 65,
        },
        {
          stars: 3,
          count: 35,
        },
        {
          stars: 2,
          count: 11,
        },
        {
          stars: 1,
          count: 41,
        },
      ],
      location_rating: 3.2,
      reviews_breakdown: [
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 33,
          positive: 10,
          negative: 18,
          neutral: 5,
        },
        {
          name: "مطبخ",
          description: "Kitchen",
          total_mentioned: 12,
          positive: 5,
          negative: 5,
          neutral: 2,
        },
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 19,
          positive: 5,
          negative: 13,
          neutral: 1,
        },
        {
          name: "مناسب للعائلات",
          description: "Family friendly",
          total_mentioned: 10,
          positive: 6,
          negative: 3,
          neutral: 1,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 40,
          positive: 25,
          negative: 12,
          neutral: 3,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 31,
          positive: 15,
          negative: 15,
          neutral: 1,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Free parking",
        "Outdoor pool",
        "Air conditioning",
        "Pet-friendly",
        "Bar",
        "Restaurant",
        "Room service",
        "Kitchen in rooms",
        "Full-service laundry",
        "Accessible",
        "Child-friendly",
      ],
      property_token: "ChkI-Yu8_9T62vATGg0vZy8xMXN4eTgxNHR5EAE",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChkI-Yu8_9T62vATGg0vZy8xMXN4eTgxNHR5EAE&q=CAIRO",
    },
    {
      type: "hotel",
      name: "جراند اجور هوتيل",
      description:
        "يعمل جهاز تكيّيف وجهاز تدفئة على ضمان مناخ داخلي مريح في الغرف. يعد وجود البلكون في معظم الغرف من ضمن …",
      link: "https://onesttravels.wixsite.com/onesttravels/hotels",
      gps_coordinates: {
        latitude: 30.047311699999995,
        longitude: 31.2420041,
      },
      check_in_time: "3:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏1,201 ج.م.‏",
        extracted_lowest: 1201,
        before_taxes_fees: "‏932 ج.م.‏",
        extracted_before_taxes_fees: 932,
      },
      total_rate: {
        lowest: "‏1,201 ج.م.‏",
        extracted_lowest: 1201,
        before_taxes_fees: "‏932 ج.م.‏",
        extracted_before_taxes_fees: 932,
      },
      nearby_places: [
        {
          name: "برج القاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "8 د",
            },
          ],
        },
        {
          name: "Noubar St.",
          transportations: [
            {
              type: "Walking",
              duration: "4 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "28 د",
            },
            {
              type: "Public transport",
              duration: "1 س 16 د",
            },
          ],
        },
        {
          name: "مطعم وصايا",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: "فندق بنجمتين",
      extracted_hotel_class: 2,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipP81THdZMKx_JYyP0xRu7Xk2LZBU787azxxKzAq=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipP81THdZMKx_JYyP0xRu7Xk2LZBU787azxxKzAq=s10000",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/DLXxe0QDgl7R0vLDvgNbKgrNPZltUPCbETFQ7kr6FbPnWcnPCgI3Bie4DoEJc7zBySFE5gulSaeneBJ3qOa2LQhc3umzU0J31E2Kw2lDzcJAE9o9w7JuTPey919ucMnva3gJc1olyu0Wkd_-lVNhlBInG81lQg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://cdn.worldota.net/t/1024x768/content/09/70/097054ec6676802ef172846c260c798a8fb3ec47.jpeg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNci869uzt4zXCLZBf54jwT7vTXACUYzziFdKKC=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNci869uzt4zXCLZBf54jwT7vTXACUYzziFdKKC=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipP5meoprwbbt_VeDVprInp9P52sX2TaKmw6wwoN=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipP5meoprwbbt_VeDVprInp9P52sX2TaKmw6wwoN=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMKB-qV2_bLrtPfIHW_15ubwafD8Imnb6dWx_N6=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMKB-qV2_bLrtPfIHW_15ubwafD8Imnb6dWx_N6=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOuh4hXh0Nilui5Q9UGmbkgICRo0HEvHzFdMjhu=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOuh4hXh0Nilui5Q9UGmbkgICRo0HEvHzFdMjhu=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPSTeJ45Xyj2zTmo9ULyF5i34Ucgvr87d65Tks9=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPSTeJ45Xyj2zTmo9ULyF5i34Ucgvr87d65Tks9=s10000",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/01TWB5ewtGsFQlrhcOwn3ZDBJUCcjQJkX_3PsE0reBEe7_1s7l2kM2fwgNr9ZRtv2GmuZtglpbU6KBVN0Mv0nWGMLOdWrk-qm5jy5K_FzybmuTnDE8MIjRlW7GRya4I3i1cc7shIkbIMuTKTKmbZ12q6fL05DDs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/98/989134/989134a_hb_ro_006.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/erBQd5SkJgpj_T0BbSZWDa2YFN-Y2-4IGbWni17W7_JVW3msQsggkAzfKe2pboY81xsKc8xV5RZ1ap7AFY_b5rjkKQg744g18umt5YJhR2bEvl9PMeAgQtkSFGFewy3tyHBwgdT54VgDJgoou7gmay4ssclHzW8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://images.trvl-media.com/lodging/18000000/17810000/17805100/17805058/0e92ba0d_z.jpg",
        },
      ],
      overall_rating: 4.4,
      reviews: 294,
      ratings: [
        {
          stars: 5,
          count: 216,
        },
        {
          stars: 4,
          count: 33,
        },
        {
          stars: 3,
          count: 17,
        },
        {
          stars: 2,
          count: 10,
        },
        {
          stars: 1,
          count: 18,
        },
      ],
      location_rating: 4.7,
      reviews_breakdown: [
        {
          name: "حمّام",
          description: "Bathroom and toiletries",
          total_mentioned: 17,
          positive: 4,
          negative: 10,
          neutral: 3,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 40,
          positive: 34,
          negative: 3,
          neutral: 3,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 45,
          positive: 35,
          negative: 7,
          neutral: 3,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 24,
          positive: 20,
          negative: 4,
          neutral: 0,
        },
        {
          name: "الأمان",
          description: "Safety",
          total_mentioned: 7,
          positive: 6,
          negative: 1,
          neutral: 0,
        },
        {
          name: "الفطور",
          description: "Breakfast",
          total_mentioned: 10,
          positive: 6,
          negative: 2,
          neutral: 2,
        },
      ],
      amenities: [
        "Free breakfast",
        "Free Wi-Fi",
        "Air conditioning",
        "Restaurant",
        "Airport shuttle",
        "Full-service laundry",
        "Child-friendly",
      ],
      property_token: "ChoItrzC543DrrreARoNL2cvMTFkeGdqd25zeBAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoItrzC543DrrreARoNL2cvMTFkeGdqd25zeBAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "Fairmont Nile City",
      description:
        "فندق أنيق فيه مطاعم راقية وصالة شيشة ومنتجع صحي، فضلاً عن مسبح على السطح مع بار",
      link: "https://www.fairmont.com/nile-city-cairo/?goto=fiche_hotel&code_hotel=A5E9&merchantid=seo-maps-EG-A5E9&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjE0NjctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      gps_coordinates: {
        latitude: 30.071854799999997,
        longitude: 31.227727400000003,
      },
      check_in_time: "3:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏8,474 ج.م.‏",
        extracted_lowest: 8474,
        before_taxes_fees: "‏6,574 ج.م.‏",
        extracted_before_taxes_fees: 6574,
      },
      total_rate: {
        lowest: "‏8,474 ج.م.‏",
        extracted_lowest: 8474,
        before_taxes_fees: "‏6,574 ج.م.‏",
        extracted_before_taxes_fees: 6574,
      },
      nearby_places: [
        {
          name: "Nile Towers (Nile Corniche)",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "37 د",
            },
            {
              type: "Public transport",
              duration: "1 س 27 د",
            },
          ],
        },
        {
          name: "L'Uliveto Italian Restaurant",
          transportations: [
            {
              type: "Walking",
              duration: "1 د",
            },
          ],
        },
      ],
      hotel_class: "فندق 5 نجوم",
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/7skVgKhPC3vm0r1yOu7dmQmau4u9fiBPp1wM8UGo7S-q0AIYN2YxCLBE8xPY9YgxfcMZooCCDGf29Lul2HQOHONCrpVZ5EYfC6IthwGWII1tFYhgLOv9Rd2Acr5dx-1owuPKE5X6509xnUA8yyA8EorscTW_Mwk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KABKvKwYFAM-VixQdyxNl4L9A8ccZGbQ",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOqACYcif5mYIIPLzwFtsN_bvaTo4wlFoRNmR2G=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOqACYcif5mYIIPLzwFtsN_bvaTo4wlFoRNmR2G=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPLtgj9FSqVHF9azCA3PqxCFkfqf30Q2vUCdByr=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPLtgj9FSqVHF9azCA3PqxCFkfqf30Q2vUCdByr=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipO5j_z4fOxz4u_iRTR2KVBn8IjF4Gemf1vjrQvt=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipO5j_z4fOxz4u_iRTR2KVBn8IjF4Gemf1vjrQvt=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/RaAeV5E7XoLKvQC4Q2dsuHAGGoXwlrFDqsQvbjMQuebMcj-8Qkbdo7G7XGpLoEGCBZ-lmhglngbxKxBwU158xKtP9UIhtHUejiggiT3nXKo0OGPL2-a_J7Hl5dmTwsqFD-KBLw1f0jHDNX3SBINaIdfdI3TYeF0=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://photos.hotelbeds.com/giata/original/14/143385/143385a_hb_r_027.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPc1b3n6eIuGf2exPzZiysD0Rgs0w9szXXPUuOq=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPc1b3n6eIuGf2exPzZiysD0Rgs0w9szXXPUuOq=s10000",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/rOo-tFOUTH31inYAP27aBuRDcZ41bjli3Tq8m9w-21yMF2jYzTKRkL1e5S-gSmvJeU8mtVQTrzDlGJrxuD24xSkbl3XG_8MNIm5t27nx6WxnbdiI__zfXxBuewixASBBTgv7P62XJRdOSDg4cPl6ooI8S2d9eZM=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://xx.bstatic.com/xdata/w/hotel/840x460_watermarked_standard_bluecom/Ul7Sk3QsZYUcl4Sg0WhyyPKFZhcDauMeQrIborKDlHd7ebDYDgO6-GKI3Fm9O_Kj8UslM3Z4-yTJu5eYhZe1fbXLbPLZmN77ZRlycAbceExkNXjXAEGvmoh15kNBJZjT.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipPxaKS3c0A8UJyw4SQ_rZBhEug1LF3g0M9RtU9v=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipPxaKS3c0A8UJyw4SQ_rZBhEug1LF3g0M9RtU9v=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/GfLF_Rw3RxF5MGFSQJ6f7OHVDlDJBlLjJLR1OMCevhYLEGfJMSvBeVv6pSxKp3exv-G72MGIM48viEN6H2yZKSW6HSn0LmGH8CDc7iT8yQkEHJQ2ISmpjNr2uyVv14LxYnmn3iQtrA5nWPVS3pJmisfiyCFg3Q=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KANStKwYFAIYEwwjX3iIGfKU31TG2DMU",
        },
      ],
      overall_rating: 4.7,
      reviews: 21598,
      ratings: [
        {
          stars: 5,
          count: 17884,
        },
        {
          stars: 4,
          count: 2061,
        },
        {
          stars: 3,
          count: 661,
        },
        {
          stars: 2,
          count: 243,
        },
        {
          stars: 1,
          count: 749,
        },
      ],
      location_rating: 3.2,
      reviews_breakdown: [
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 5117,
          positive: 4830,
          negative: 207,
          neutral: 80,
        },
        {
          name: "المطاعم",
          description: "Food and Beverage",
          total_mentioned: 664,
          positive: 595,
          negative: 39,
          neutral: 30,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 2626,
          positive: 2375,
          negative: 128,
          neutral: 123,
        },
        {
          name: "النظافة",
          description: "Cleanliness",
          total_mentioned: 1440,
          positive: 1324,
          negative: 67,
          neutral: 49,
        },
        {
          name: "بار",
          description: "Bar or lounge",
          total_mentioned: 294,
          positive: 259,
          negative: 15,
          neutral: 20,
        },
        {
          name: "الأجواء",
          description: "Atmosphere",
          total_mentioned: 731,
          positive: 687,
          negative: 20,
          neutral: 24,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Free parking",
        "Outdoor pool",
        "Hot tub",
        "Air conditioning",
        "Fitness centre",
        "Spa",
        "Bar",
        "Restaurant",
        "Room service",
        "Kitchen in some rooms",
        "Airport shuttle",
        "Full-service laundry",
        "Accessible",
        "Business centre",
        "Child-friendly",
      ],
      property_token: "ChcI_NWvnpX0gL8_GgsvbS8wMTJoZjUychAB",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChcI_NWvnpX0gL8_GgsvbS8wMTJoZjUychAB&q=CAIRO",
    },
    {
      type: "hotel",
      name: "فندق جراند نايل تاور",
      description: "فندق راقٍ بجوار نهر النيل يضمّ 8 مطاعم تشمل مطعمًا دوّارًا",
      link: "https://www.grandniletower.com/ar",
      gps_coordinates: {
        latitude: 30.034274099999998,
        longitude: 31.226918399999995,
      },
      check_in_time: "3:00 م",
      check_out_time: "12:00 م",
      rate_per_night: {
        lowest: "‏5,606 ج.م.‏",
        extracted_lowest: 5606,
        before_taxes_fees: "‏4,353 ج.م.‏",
        extracted_before_taxes_fees: 4353,
      },
      total_rate: {
        lowest: "‏5,606 ج.م.‏",
        extracted_lowest: 5606,
        before_taxes_fees: "‏4,353 ج.م.‏",
        extracted_before_taxes_fees: 4353,
      },
      nearby_places: [
        {
          name: "المتحف المصري بالقاهرة",
          transportations: [
            {
              type: "Taxi",
              duration: "9 د",
            },
          ],
        },
        {
          name: "Grand Hyatt Hotel",
          transportations: [
            {
              type: "Walking",
              duration: "6 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "36 د",
            },
            {
              type: "Public transport",
              duration: "1 س 30 د",
            },
          ],
        },
      ],
      hotel_class: "فندق 5 نجوم",
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMgzCKBJBnVej9qwbrQS77Z65KLfTbzDtYcQjO5=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMgzCKBJBnVej9qwbrQS77Z65KLfTbzDtYcQjO5=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipMtFQv4QAqjHfKgdkRRczhNIzO6eQeSXwkvcHp6=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipMtFQv4QAqjHfKgdkRRczhNIzO6eQeSXwkvcHp6=s10000",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/7NXBvnn__kNXkqrLpHX9iN531zqCuUVQxTOS4gzjLcr4R8G7I0ZTGsZlfdKUAfi-ekU-bUTtK9B59lH6-OkFJxAEFNabu4Fs71HAHXQZ3HMEvmM1_MlVNgbGK5M4S5P4GgO5LKVeTjr6Bf20MNQ8n3YQ4W2v9g=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/4a/c2/a4/view-from-room.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNH5q5rflFvqVfrkhukw8YQjm-2N9EExMavXVkT=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNH5q5rflFvqVfrkhukw8YQjm-2N9EExMavXVkT=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOEUJJ2jatVfCS0d_DRiHG0mVtVDVN8Y7oupdAB=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOEUJJ2jatVfCS0d_DRiHG0mVtVDVN8Y7oupdAB=s10000",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/kN-sdHrTfE9QRyLbtE52TrNxUAbmvWqbn_gdF6I3WUHa6OTuSvoFa-nvg4KXSwdf3vIAInqc5aeGFnoim44uU1-2k49D205fAu3QQ39zOOz_T2dOMDyy4bfnyuvsnjlbNDCnc3vVxc_Kj9xryuGzzKUp5MG7dA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/3/0/39/873/720/map001_I.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/MDqbORMUjw_RLBTiwEps45uWZp1Z3j8jC5ysWsykWmuQriqOqOPFeupmfprvHMw0cXWDkvY71REsSaUrhH5ZoWpqLCi_x-4XP_Zn58M8gWPkRKAihISlKO1iwXMxvQKmzBJTx2SgNPOJu5icQc4kijWWWhtQmI4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://i.giatamedia.com/m.php?m=AQABAAAAla4KAA3vOQYFADROji5ZAjhfA2jjmQgJxow",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipNhry_XHqlCVUvgVBI00Z_Y0ceG-vbcWlKgC4SP=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipNhry_XHqlCVUvgVBI00Z_Y0ceG-vbcWlKgC4SP=s10000",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/p/AF1QipOVAP8CfaKcd72lYmIVwAqZPDiSWS_3A1GM6JY-=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://lh5.googleusercontent.com/p/AF1QipOVAP8CfaKcd72lYmIVwAqZPDiSWS_3A1GM6JY-=s10000",
        },
      ],
      overall_rating: 4.2,
      reviews: 15732,
      ratings: [
        {
          stars: 5,
          count: 9393,
        },
        {
          stars: 4,
          count: 3044,
        },
        {
          stars: 3,
          count: 1514,
        },
        {
          stars: 2,
          count: 566,
        },
        {
          stars: 1,
          count: 1215,
        },
      ],
      location_rating: 4.1,
      reviews_breakdown: [
        {
          name: "غرفة",
          description: "Room amenities",
          total_mentioned: 1013,
          positive: 427,
          negative: 414,
          neutral: 172,
        },
        {
          name: "الخدمة",
          description: "Service",
          total_mentioned: 1507,
          positive: 723,
          negative: 656,
          neutral: 128,
        },
        {
          name: "المرافِق الفندقية",
          description: "Property",
          total_mentioned: 1639,
          positive: 1003,
          negative: 477,
          neutral: 159,
        },
        {
          name: "المطاعم",
          description: "Food and Beverage",
          total_mentioned: 368,
          positive: 233,
          negative: 99,
          neutral: 36,
        },
        {
          name: "المناظر الطبيعة",
          description: "Nature and outdoor activities",
          total_mentioned: 208,
          positive: 196,
          negative: 4,
          neutral: 8,
        },
        {
          name: "الموقع الجغرافي للبطولة",
          description: "Location",
          total_mentioned: 779,
          positive: 549,
          negative: 111,
          neutral: 119,
        },
      ],
      amenities: [
        "Breakfast ($)",
        "Free Wi-Fi",
        "Parking ($)",
        "Outdoor pool",
        "Hot tub",
        "Air conditioning",
        "Fitness centre",
        "Spa",
        "Restaurant",
        "Room service",
        "Full-service laundry",
        "Accessible",
        "Child-friendly",
      ],
      property_token: "ChYIuoyeiIenoYkgGgovbS8wY204ZjRtEAE",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChYIuoyeiIenoYkgGgovbS8wY204ZjRtEAE&q=CAIRO",
    },
    {
      type: "vacation rental",
      name: "Town View Hotel",
      link: "https://www.bluepillow.com/search?p_id=589dfad07c00cb10c8daaa72&dest=ago&cat=Vacation rental (other)&accomodationids=61828d169e3163a56a29a9bf",
      gps_coordinates: {
        latitude: 30.04701042175293,
        longitude: 31.235200881958008,
      },
      rate_per_night: {
        lowest: "‏935 ج.م.‏",
        extracted_lowest: 935,
        before_taxes_fees: "‏813 ج.م.‏",
        extracted_before_taxes_fees: 813,
      },
      total_rate: {
        lowest: "‏935 ج.م.‏",
        extracted_lowest: 935,
        before_taxes_fees: "‏813 ج.م.‏",
        extracted_before_taxes_fees: 813,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 1,
          rate_per_night: {
            lowest: "‏935 ج.م.‏",
            extracted_lowest: 935,
            before_taxes_fees: "‏813 ج.م.‏",
            extracted_before_taxes_fees: 813,
          },
        },
      ],
      nearby_places: [
        {
          name: "QNB - Champollion Rd",
          transportations: [
            {
              type: "Walking",
              duration: "2 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "30 د",
            },
            {
              type: "Public transport",
              duration: "1 س 30 د",
            },
          ],
        },
        {
          name: "مطعم علي بابا",
          transportations: [
            {
              type: "Walking",
              duration: "3 د",
            },
          ],
        },
      ],
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/q0_ekj4nt7WGB-V_op6RHT8f3cw9yGqP6vgCRK9IslgOZMDLOxVjM-L3FZAqtzQgb_qjEJrVXws2RGzDU5vcbd4jQUR7V3uaWZcPXDkWbeh9f0l77oJa08ZVakaJHNw5NlKPHde0_hjasH2IdgBa5AnUYJOLbg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/353658393.jpg?k=e88d64c2fff567a3f5c9725030eaa9e8533dd7e589a3c838c7bde641c06aefce&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/2sT9tiVckEZ0iAvTBVCViRFhXZ1ten0E8gV3fQAUfbXlxvYpUaAdhmIwpIS5mNFV02iXtSbDjG69CozCKfs0lWdHpvRx2R_uF4Om3q1IyUYmEaTzmzpzmepGBlwaPt_H5dhI1IqH8w4st2P6i2sHu6i0BdG7tQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/353657146.jpg?k=5e5a2324e0f25d6a137a3a1db963c6180a7f0af4c8bef6b9cd91bbe92efda5cc&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/tiEZdYrpIOQDRtCiQhG4qPRpvd8qCqmX1msF63gOgx3xmLDIS68uCNMznj6d5qqRNCJog9JZSotJIDWONlzfd4bbb5uint9BdaErHkKQ3sov2Pk83YR3omQ_JWZyzdKAGV6cs7f-UrpfU1CRjJMu0Obz2h_VzQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/352167032.jpg?k=ff802d018e9000194bc860a1372308cf0f4444401daf71185b34b122d64f03a8&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/0Cjv0uFeV3xdJ5FRaG93Oo-qJBb8l_ZLDneG7BnsIjAkzYANDGLmd76hlegEJl2r7LZXjj25n5EmXky2L7tlwdnAE6YVmKbHQi-wCjwjWk2501jDZ31MG9oBWW0wzqYSiyNSoN-0X4t6QznSQ_Ec2JB6s7ZpZPk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/353659201.jpg?k=d5bc2f766bb8a58d58a0c8013d10dd57b103873b452ee999535cd26eddefd5c3&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/Ya97u59dPd3rpGKbYn4tQ0HvdqpW16qdulNtZIMA5E0GAKkyRjfGOs2J-g3m3u5Tts7C62OpSGFL5AEKKVBdWjImbvAM-f2Jf2EEe8szKCoq9NboKe8movcSEso5Dp1vCRboC3YHOomndb_Ct3Ai2Lg7QSHy580=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/353658707.jpg?k=fb2ba21acb67326ab04a73c77d55e1d7b9da36b31dad09882d399cd4d5200244&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/pnAEU1Alj0VEw569vrkzDpkd7aBIFMcrfg0hN5IErP-Y14AFhhTRgGS_I-6j6pasfKSbpNmzaU1CP16AtjGbjMdG54us2R5mvuJDqbpOmM3ck8XiyGjgeCq9sV7m7OnzYvmjme3-wDzxmdgL4D4TmJ2F5FsmOew=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/748/7480087/7480087_19061115350075705605.jpg?ca=8&ce=1&s=1024x",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/vch35KYl-wxj0W6KrJmua_5YpWBJiP4LTvjoVOU2pNzOiJAkkanN9Tx7d0rh0e9LAKDsDFe3NeNW1U4H-jHq9aDljQP3aoaI2EqHlrY8kgJs7GcPjLOmh3EiicIsGAk0lilk_q3ZEtEJ57ek543Lk13N9BG-r1k=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/748/7480087/7480087_19061115330075705538.jpg?ca=13&ce=1&s=1024x",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/txf5QfIuVXdumdGQxaRLHeMekTeUw93CLuKYwDYnuvVkqkqXbGkMoWGkEK9Sco8XJ7n_KUJtdGkBlqM4aunCsYLnxZOJ5FBkGLadfCf8bzkuF7w-3d6fF_qVZQZDBG-gLFOpKkh5g8t3fzcAgx8_aTiuBNZ033A=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/353656970.jpg?k=391fd5ad48926c138504d2c5f7dbdd99d9fac4ae8b9859ac183e39c6a3283af8&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/ZKBtdIh-TIRzgbeeJMqApJebWbcNQ2g9mzvOA09SJ5ZZS2_t6a0yBGDYw24NK1zE0PzBGQOoKG7Eh_9L-Vflc7kzQl7AqS-BDZ1f1sO7u3saw7kAhRyewO3Dn-polrLE7_koQKTu-oTbEIHKq4kNuHUEjm7MDU8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/748/7480087/7480087_19061115350075705602.jpg?ca=8&ce=1&s=1024x",
        },
      ],
      overall_rating: 3.1,
      reviews: 102,
      location_rating: 4.6,
      amenities: [
        "مكيِّف هواء",
        "حافلة للمطار",
        "مناسب للأطفال",
        "مصعد",
        "موقد",
        "تدفئة",
        "مطبخ",
        "يُحظر التدخين",
        "خدمة التلفزيون الكبلي",
        "غسّالة",
        "مناسب للكراسي المتحرّكة",
        "موقف سيارات مجاني",
        "اتصال Wi-Fi مجاني",
      ],
      excluded_amenities: [
        "لا تتوفّر شرفة.",
        "لا تتوفّر إمكانية الدخول إلى الشاطئ.",
        "لا يتوفّر سرير طفل.",
        "لا يتوفر مركز لياقة بدنية",
        "لا يتوفّر حوض استحمام ساخن.",
        "لا يتوفّر حمّام سباحة داخلي.",
        "لا يتوفّر لوح كيّ.",
        "لا يتوفّر ميكروويف.",
        "لا تتوفّر آلة شواء في الهواء الطلق.",
        "لا يتوفّر حمّام سباحة خارجي.",
        "لا يتوفّر فرن مع موقد.",
        "لا يُسمح باصطحاب الحيوانات الأليفة.",
      ],
      essential_info: [
        "عدد الأشخاص: 2",
        "غرفة نوم واحدة (1)",
        "حمّام واحد (1)",
        "سرير واحد (1)",
      ],
      property_token: "ChkQ6_vmopqMl6kWGg0vZy8xMWxjdjkzbF9wEAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChkQ6_vmopqMl6kWGg0vZy8xMWxjdjkzbF9wEAI&q=CAIRO",
    },
    {
      type: "vacation rental",
      name: "Brassbell apartments in Downtown Talaat Harb street",
      link: "https://www.bluepillow.com/search?p_id=589dfad07c00cb10c8daaa72&dest=ago&cat=Apartment&accomodationids=62de89fcde4e4eebed132a02",
      gps_coordinates: {
        latitude: 30.051950454711914,
        longitude: 31.241519927978516,
      },
      rate_per_night: {
        lowest: "‏3,265 ج.م.‏",
        extracted_lowest: 3265,
        before_taxes_fees: "‏3,265 ج.م.‏",
        extracted_before_taxes_fees: 3265,
      },
      total_rate: {
        lowest: "‏3,265 ج.م.‏",
        extracted_lowest: 3265,
        before_taxes_fees: "‏3,265 ج.م.‏",
        extracted_before_taxes_fees: 3265,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 3,
          rate_per_night: {
            lowest: "‏3,265 ج.م.‏",
            extracted_lowest: 3265,
          },
        },
      ],
      nearby_places: [
        {
          name: "Talaat Harb Mall (Downtown)",
          transportations: [
            {
              type: "Walking",
              duration: "3 د",
            },
          ],
        },
        {
          name: "مطار القاهرة الدولي",
          transportations: [
            {
              type: "Taxi",
              duration: "28 د",
            },
            {
              type: "Public transport",
              duration: "1 س 3 د",
            },
          ],
        },
      ],
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/lUcWOG2FixIcHo6rU0vUhVMWafofQxTI_7ebCMcaJ6HGUOMAAk5hTaAS0xBnVv-ugXH8ZoFNmsMHURT-bISpUh8TVMzeNRgYbQ8h1s3_GnGuNtZh32lvRu4QOMOxu4otXWb3bAO30j48vstn5BWoSDUlnyKGUQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349331653.jpg?k=13e958d0f1f8d290c774b718936578ab4ee76de3a793abcf23638b474831cabe&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/xoGer1Joxw-FgdTRDzRPjfcPmwX3IV2Rt_SLhY4XybeiAXkrqL1fTZkka82bXrLmlEiWDL-nLJptbsK6r7QPxPQF3K9-hnwML8-13-4Y2PJ6AkcwLXTxyFqnaRFJy75AHdWDNk9Z3781NqBtphsjpbtXySqDncE=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349298517.jpg?k=79fee763d562b96a07cab3c1ea66efe1aa97cbe1ce7733a8ada05f6e48f285e7&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/-7QNQWo4c0ksgL4unzmEd_najVC96iXbFSH-K8F11CZLHa3fGnUo0khdNgOLaIfoupE8CmOyIElW4H5FIZr8OJaxkGs_jYSabnMF7_BVHrhd2znoSCBYGWWpPHeOg60U81AjHjgx-rhKzrKLBT7G1sZzZgQpmqs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349263417.jpg?k=ec62314a2a56843eaaa9acea7cfdc1a87367c56e3206bf6ba1752d670466a9e5&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/97yMTGMoQvQR005VIMQiTsrQcaUnLIJAjqJY_2gU5WOQKB3VSRQBlY1HlO2u1-uPLN8NXs4LjmMV7sHtPp0qcd8xSVTztt4ybsMaC6I0EXv70CmpTsxDUciWHXaNqpqYY9O6bUWcpZK51MKYhGOguL1yV8pCIWM=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349263573.jpg?k=327e19324f77c39273984e1336673dd8639e9005cf6b252d1e6900e83e7c439a&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/YJnBvrnL2ezHq3wmaRHjfPemqXZEfuMyPIFh1qaGIY6sQWps9i03pq02soCikOfZh5QJvuMOducqpF6w2Qy_IGNsM4z-wD2BI6t8X1793NxqoKfk6PIOBW7MTNpCJGXx_rwLUjQr1pTSFBYu_J9iR5c-s5x8fmA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349334753.jpg?k=976e43dfbaaf0997d66715427af9e0b5ee56401e1459705014f30b9cd5b7c3b5&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/RplXBzIEu_iKzQ7YX5G68Hh8ICoazwMi7XH4HirD-xy_golhiAoSuSKC48ONv51j1WnDrL5fyTRHantuDHDQpjpN-i4lCF9Uje74cM78XPWgg-beh21REglqcT8T0d_6cyFvEs0KXG7onbK-QH2YTZVosXo3Kwc=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349264744.jpg?k=f64acf0b35d6f040062fcd78b7499bf0ec3e44a9aafeaa4fc1ce1980b2dfa2dd&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/LnhUjxJVRmVBSSjpAP5660Kg4GAE9fyNzfJ1-UdRlNmJz-Zm05wysBYZeu4Cqb-kt2i9laOADgFU7-USq5FgqMEUw-sMyvIU_HoNZ_YO9QypB0rx4fBLVs1ePWfAvu8-geM_zT2x5Y6M6lD570SmI24G5iZJHQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349263530.jpg?k=a1ddc108be13354b18dc2d6fee10ca6a9998afeef3ee7886b5f35d6a9d5d38d1&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/AlD3oHGB5LF7M22U6jas7RXYrp5nxQAo_bV0ZIV8VYc8XFsCO8QvLt31_XgeUwT0ZZHDlofnwNDnU89DfZwMSi2otDa81nRGfoMA2XnW4JsM3HsYDw_eQZK9mD48xPazkgYNdWiXxJUupenNjOn7tzQXSIVXwA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349263590.jpg?k=7cf6f21905dff892169da44ccb246777b440aaaec3a70e6cd45e4a84ffc33b0a&o=&s=1024x",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/gjCujFCyuYGpc4i-TjEzmxpOF_NBVBnTBkR9lrkfoawh-DIY1uUn0W4qIgtd3X4A0VCEkXxxeexyc0g8_0N-h22Wuc-dgM6j7dn8aISNkGbiNpYDyNYExrRVUhk9onFMAcAHXCwzzi5aLsw2NKeShgZF40q2pw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024/349263561.jpg?k=e481cc1b2cd41047651e54bef0bfc96f36d1061394c0d9fbc79f660d5d5cf840&o=&s=1024x",
        },
      ],
      overall_rating: 4.2,
      reviews: 10,
      location_rating: 4.6,
      amenities: [
        "مكيِّف هواء",
        "تدفئة",
        "لوح كيّ",
        "مطبخ",
        "يسمح باصطحاب الحيوانات الأليفة",
        "خدمة التلفزيون الكبلي",
        "غسّالة",
        "اتصال Wi-Fi مجاني",
      ],
      excluded_amenities: [
        "لا تتوفر حافلة للمطار",
        "لا تتوفّر شرفة.",
        "لا تتوفّر إمكانية الدخول إلى الشاطئ.",
        "غير مناسب للأطفال",
        "لا يتوفّر سرير طفل.",
        "لا يتوفّر مصعد.",
        "لا تتوفّر مدفأة.",
        "لا يتوفر مركز لياقة بدنية",
        "لا يتوفّر حوض استحمام ساخن.",
        "لا يتوفّر حمّام سباحة داخلي.",
        "لا يتوفّر ميكروويف.",
        "لا تتوفّر آلة شواء في الهواء الطلق.",
        "لا يتوفّر حمّام سباحة خارجي.",
        "لا يتوفّر فرن مع موقد.",
        "التدخين غير ممنوع",
        "غير صالح للكراسي المتحرّكة",
        "لا يتوفّر موقف سيارات.",
      ],
      essential_info: [
        "شقة كاملة",
        "عدد الأشخاص: 2",
        "غرفة نوم واحدة (1)",
        "حمّام واحد (1)",
        "سرير واحد (1)",
      ],
      property_token: "ChoQzKnStprW1aPKARoNL2cvMTF2al80d2swcxAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=1&check_in_date=2024-03-15&check_out_date=2024-03-15&children=0&currency=EGP&engine=google_hotels&gl=ar&hl=ar&property_token=ChoQzKnStprW1aPKARoNL2cvMTF2al80d2swcxAC&q=CAIRO",
    },
  ],
});
// Main Data Amadeus
export const SetTicketsHotels = atom({
  key: "SetTicketsHotels",
  default: [
    {
      id: 2631062,
      name: "CAIRO",
      iataCode: "TRN",
      subType: "HOTEL_LEISURE",
      relevance: 1000,
      type: "location",
      hotelIds: ["BBTRNAAT"],
      address: {
        cityName: "TURIN",
        countryCode: "IT",
      },
      geoCode: {
        latitude: 45.03325,
        longitude: 7.64839,
      },
    },
    {
      id: 1735668,
      name: "CAIRO",
      iataCode: "TRN",
      subType: "HOTEL_LEISURE",
      relevance: 1000,
      type: "location",
      hotelIds: ["GUTRNABA", "AETRNADE", "HVTRNAAQ", "DGTRNACP", "TETRNACE"],
      address: {
        cityName: "TURIN",
        countryCode: "IT",
      },
      geoCode: {
        latitude: 45.03335,
        longitude: 7.64823,
      },
    },
    {
      id: 1558119,
      name: "HILTON ZAMALEK RESIDENCE CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAC", "GUCAIAAW", "DGCAIACH"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.06756,
        longitude: 31.22216,
      },
    },
    {
      id: 1689191,
      name: "CONRAD CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIAAW", "GUCAIAAG", "HVCAIABJ", "DGCAIAAP"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.06449,
        longitude: 31.22606,
      },
    },
    {
      id: 1558128,
      name: "JW MARRIOTT HOTEL CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAN", "AECAIACD", "GUCAIABW", "TECAIAAL"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.06566,
        longitude: 31.22769,
      },
    },
    {
      id: 2299623,
      name: "PHARAOHS DOKI HOTEL CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["DGCAIAAZ"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.04446,
        longitude: 31.21758,
      },
    },
    {
      id: 1558130,
      name: "NOVOTEL CAIRO AIRPORT",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAP", "AECAIACQ", "GUCAIACS", "DGCAIACA", "DGCAIACZ"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.12094,
        longitude: 31.403,
      },
    },
    {
      id: 1689193,
      name: "BARCELO CAIRO PYRAMIDS",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIAAY", "DGCAIAAX", "TECAIAAE"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.00367,
        longitude: 31.19151,
      },
    },
    {
      id: 1689211,
      name: "SONESTA HOTEL TOWER CASINO CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIABS", "HVCAIAAU", "DGCAIADF"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.06486,
        longitude: 31.25198,
      },
    },
    {
      id: 1689212,
      name: "PYRAMISA SUITES HOTEL AND CASINO CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIABT"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.12633,
        longitude: 31.25225,
      },
    },
    {
      id: 1558124,
      name: "NOVOTEL CAIRO 6TH OF OCTOBER",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAI", "AECAIAEI"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 29.99679,
        longitude: 30.96887,
      },
    },
    {
      id: 1624705,
      name: "CAIRO MARRIOTT HOTEL OMAR KHAYYAM CASI",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIACT", "AECAIAAD", "GUCAIABQ", "TECAIABV"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.05711,
        longitude: 31.22475,
      },
    },
    {
      id: 1745003,
      name: "FOUR SEASONS CAIRO AT FIRST RESIDENCE",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["GUCAIABB", "HVCAIAAH", "AECAIAFB", "DGCAIABQ"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.02424,
        longitude: 31.21723,
      },
    },
    {
      id: 1634430,
      name: "MERCURE CAIRO LE SPHINX HOTEL",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAE", "AECAIAEG"],
      address: {
        cityName: "GIZA",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 29.99005,
        longitude: 31.12813,
      },
    },
    {
      id: 1689262,
      name: "SHERATON CAIRO HOTEL TOWERS AND CASINO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIAEF", "DGCAIACT", "TECAIAAI"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.08374,
        longitude: 31.25536,
      },
    },
    {
      id: 1558118,
      name: "INTERCONTINENTAL CAIRO SEMIRAMIS",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAB", "AECAIABP", "TECAIAAD"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.04286,
        longitude: 31.23215,
      },
    },
    {
      id: 2769219,
      name: "CONCORDE EL SALAM HOTEL CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAZ"],
      address: {
        cityName: "KAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.09592,
        longitude: 31.32376,
      },
    },
    {
      id: 1558133,
      name: "SAFIR CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["HVCAIAAX", "DGCAIACC", "DGCAIACR", "TECAIACC"],
      address: {
        cityName: "KAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.03592,
        longitude: 31.21248,
      },
    },
    {
      id: 1689249,
      name: "OASIS PYRAMIDS CAIRO",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIADP"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.07,
        longitude: 31.28,
      },
    },
    {
      id: 1689270,
      name: "MOVENPICK CAIRO PYRAMIDS RESORT",
      iataCode: "CAI",
      subType: "HOTEL_LEISURE",
      relevance: 71,
      type: "location",
      hotelIds: ["AECAIAEN", "GUCAIAAN", "DGCAIABM", "HVCAIABE", "BBCAIABD"],
      address: {
        cityName: "CAIRO",
        countryCode: "EG",
      },
      geoCode: {
        latitude: 30.0594,
        longitude: 31.24975,
      },
    },
  ],
});
