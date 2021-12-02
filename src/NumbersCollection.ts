import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter{

    constructor(public data: number[]){
        super();
    }

    //get keyword makes sure to use length as attribute, instead of as function
    //getter method makes length a property (instead of function)
    get length(): number{
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number):void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}