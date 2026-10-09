import {Person} from "../interfaces/Person";

export class Borrower extends Person {
  public borrowDate: Date;
  public returnDate: Date;
  constructor(
    id: number,
    name: string,
    borrowDate: Date,
    returnDate: Date
  ) {
    super(id, name);
    this.borrowDate = borrowDate;
    this.returnDate = returnDate;
  }
  getBorrowDate(id: number): Date {
    return this.borrowDate;
  }
  getReturnDate(id: number): Date {
    return this.returnDate;
  }
}