import type { Datapoint, Storage } from "./interface";

interface Offer {
  amount: { amount: number }[];
  spend: number;
  days: number;
  credits: { value: number; description: string; weight: number }[];
  url?: string;
  details?: string;
}

//convert aaoa to int for x-axis-
export const aaoaToInt = (ageAsString: string): number => {
  let age = 0;
  const ageAsStringArray = ageAsString.split(",");
  //[1,0,Y,e,a,r,s,3,M,o]
  for (const item of ageAsStringArray) {
    let stringToAdd = "";
    const itemNoWhiteSpace = item.replace(/ /g, "");
    for (const char of itemNoWhiteSpace) {
      if (!isNaN(parseInt(char))) {
        stringToAdd += char;
      } else if (char === "Y") {
        age += parseInt(stringToAdd);
        break;
      } else if (char === "M") {
        const decimalRounded =
          Math.round((parseInt(stringToAdd) / 12) * 100) / 100;
        age += decimalRounded;
        break;
      }
    }
  }
  return age;
};

export const getKeyValueStorage = (data: Datapoint[]) => {
  const storage: Storage = {};
  for (const dp of data) {
    const { cardName } = dp;
    const { ...copy } = dp;

    if (cardName in storage) {
      //if dp.income is present in storage
      //push to array
      storage[cardName]?.push(copy);
      //otherwise create storage[dp.icome] = [dp]
    } else if (cardName !== undefined) {
      storage[cardName] = [copy];
    }
  }

  return storage;
};

export const isHighestOffer = (current: Offer[], historical: Offer[]) => {
  const currentArr: number[] = [];
  const historicalArr: number[] = [];

  current.forEach(
    (offer) => offer.amount[0] && currentArr.push(offer.amount[0]?.amount)
  );
  historical.forEach(
    (offer) => offer.amount[0] && historicalArr.push(offer.amount[0]?.amount)
  );

  const currentHigh = Math.max(...currentArr);
  const historicalHigh = Math.max(...historicalArr);
  if (currentHigh < historicalHigh) return true;
  return false;
};

export const getAbsStrMatch = (card1: string, value: string): boolean => {
  return card1
    .toLowerCase()
    .replace(/\s+/g, "")
    .includes(value.toLowerCase().replace(/\s+/g, ""));
};
