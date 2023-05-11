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
  Timestamp: string;
  Username: string | number;
  applicationDate: string;
  bankName: string;
  cardName: string;
  instantResult: string | undefined;
  calledRecon: boolean | string;
  finalResult: string;
  creditScore: number | string;
  bureausPulled: string;
  state: string;
  aaoa: string;
  income: string;
  x3: number | string;
  x6: number | string;
  x12: number | string;
  notes?: string;
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
    americanexpress: boolean;
    chase: boolean;
    bankofamerica: boolean;
    usbank: boolean;
    capitalone: boolean;
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
    highestoffer: boolean;
  };
}
export interface Storage {
  [key: string]: Datapoint[];
}
