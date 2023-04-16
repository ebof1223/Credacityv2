export interface credit {
  value: number;
  description: string;
  weight: number;
}

export interface offer {
  amount: { amount: number }[];
  spend: number;
  days: number;
  credits: credit[];
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
  credits: credit[];
  url: string;
  imageUrl: string;
  offers: offer[];
  historicalOffers: offer[];
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

export interface currentCardDisplay {
  isBusiness: boolean;
  issuer: string;
  cards: CardData[];
}
