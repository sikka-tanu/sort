import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 0, -5, 3]);
numbersCollection.sort();
console.log("sorted numbers: " + numbersCollection.data);

const characterCollection = new CharactersCollection('teSt');
characterCollection.sort();
console.log("sorted string: " + characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(6);

linkedList.sort();
linkedList.print();