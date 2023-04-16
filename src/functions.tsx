import { Datapoint } from 'interface';

interface IncomeStorage {
  [key: string]: Datapoint[];
}

//convert aaoa to int for x-axis-
export const aaoaToInt = (ageAsString: string): number => {
  let age = 0;
  const ageAsStringArray = ageAsString.split(',');
  //[1,0,Y,e,a,r,s,3,M,o]
  for (const item of ageAsStringArray) {
    let stringToAdd = '';
    const itemNoWhiteSpace = item.replace(/ /g, '');
    for (const char of itemNoWhiteSpace) {
      if (!isNaN(parseInt(char))) {
        stringToAdd += char;
      } else if (char === 'Y') {
        age += parseInt(stringToAdd);
        break;
      } else if (char === 'M') {
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
    //if dp.income is oresent in storage

    if (income) {
      storage[income]?.push(copy);
    } else if (income !== undefined) {
      storage[income] = [copy];
    }

    //push to array
    //otherwise create storage[dp.icome] = [dp]
  }

  return storage;
};
