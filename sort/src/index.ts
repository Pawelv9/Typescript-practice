import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


// const numbersCollection = new NumbersCollection([9, 5, 8, -1]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('tXaamn');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(400);
linkedList.add(8);
linkedList.add(-4);
linkedList.add(90);
linkedList.add(50);

linkedList.sort();
linkedList.print();
