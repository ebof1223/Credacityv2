import type { Datapoint } from "./interface";

interface IncomeStorage {
  [key: string]: Datapoint[];
}

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
  const storage: IncomeStorage = {};
  for (const dp of data) {
    const { income, ...copy } = dp;

    //if dp.income is present in storage
    if (income) {
      //push to array
      storage[income]?.push(copy);
      //otherwise create storage[dp.icome] = [dp]
    } else if (income !== undefined) {
      storage[income] = [copy];
    }
  }

  return storage;
};

export const isHighestOffer = (current: Offer[], historical: Offer[]) => {
  const currentArr: number | undefined[] = [];
  const historicalArr: (number | undefined)[] = [];
  current.forEach((offer) => currentArr.push(offer.amount[0]?.amount));
  historical.forEach((offer) => historicalArr.push(offer.amount[0]?.amount));
  const currentHigh = Math.max(...currentArr);
  const historicalHigh = Math.max(...historicalArr);
  if (currentHigh < historicalHigh) return true;
  return false;
};
