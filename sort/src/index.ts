import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([9, 5, 8, -1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
