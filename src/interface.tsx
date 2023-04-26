export interface Credit {
  value: number;
  description: string;
  weight: number;
}

export interface Offer {
  amount: { amount: number }[];
  spend: number;
  days: number;
  credits: Credit[];
  expiration?: string;
  url?: string;
  details?: string;
}
export interface CardData {
  name: string;
  issuer: string;
  network: string;
  currency: string;
  isBusiness: boolean;
  annualFee: number;
  isAnnualFeeWaived: boolean;
  universalCashbackPercent: number;
  credits: Credit[];
  url: string;
  imageUrl: string;
  offers: Offer[];
  historicalOffers: Offer[];
}

export interface Datapoint {
  timestamp: string;
  username: string;
  applicationDate: string;
  bankName: string;
  cardName: string;
  instantResult: "Approved" | "Denied" | "Pending";
  calledRecon: boolean;
  finalResult: "Approved" | "Denied";
  creditScore: number;
  bureausPulled: string;
  state: string;
  aaoa: string;
  income?: string;
  x3: number;
  x6: number;
  x12: number;
  notes: string;
}

export interface CurrentCardDisplay {
  isBusiness: boolean;
  issuer: string;
  cards: CardData[];
}

export interface Filters {
  type: {
    personal: boolean;
    business: boolean;
  };
  issuer: {
    amex: boolean;
    chase: boolean;
    bofa: boolean;
    usb: boolean;
    cap1: boolean;
    citi: boolean;
    barclays: boolean;
    wellsfargo: boolean;
    discover: boolean;
  };
  network: {
    americanexpress: boolean;
    visa: boolean;
    mastercard: boolean;
    discover: boolean;
  };
  utility: {
    cashback: boolean;
    travel: boolean;
  };
  misc: {
    524: boolean;
    highestoffer: boolean;
  };
}
