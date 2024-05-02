interface SearchResult {
  openWebsite: {
    user_id: string;
    isGuest: boolean;
  };
  _id: string;
  search: SearchItem[];
  chooseTicket: ChooseTicketItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface SearchItem {
  systemSearch: string;
  fromLocation: string;
  fromDate: string;
  toDate?: string;
  numberAdults: number;
  numberChild: number;
  RateingState?: number;
  _id: string;
}

interface ChooseTicketItem {
  CompanyLogo: string;
  data: {
    type: string;
    name: string;
    description: string;
    link: string;
    gps_coordinates: {
      latitude: number;
      longitude: number;
    };
    check_in_time: string;
    check_out_time: string;
    rate_per_night: PriceInfo;
    total_rate: PriceInfo;
    nearby_places: NearbyPlace[];
    hotel_class: string;
    extracted_hotel_class: number;
    images: Image[];
    overall_rating: number;
    reviews: number;
    ratings: Rating[];
    location_rating: number;
    reviews_breakdown: ReviewBreakdown[];
    amenities: string[];
    property_token: string;
    serpapi_property_details_link: string;
  };
  _id: string;
}

interface PriceInfo {
  lowest: string;
  extracted_lowest: number;
  before_taxes_fees: string;
  extracted_before_taxes_fees: number;
}

interface NearbyPlace {
  name: string;
  transportations: Transportation[];
}

interface Transportation {
  type: string;
  duration: string;
}

interface Image {
  thumbnail: string;
  original_image: string;
}

interface Rating {
  stars: number;
  count: number;
}

interface ReviewBreakdown {
  name: string;
  description: string;
  total_mentioned: number;
  positive: number;
  negative: number;
  neutral: number;
}
