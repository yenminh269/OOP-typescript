import {Person} from "../interfaces/Person";
import {BookStatus} from "../enums/BookStatus";
export class Book extends Person {
  private title: string;
  private author: string;
  private status: BookStatus;
  constructor(
    id: number,
    name: string,
    title: string,
    author: string,
    status: BookStatus
  ) {
    super(id, name);
    this.title = title;
    this.author = author;
    this.status = status;
  }
  getTitle(id: number): string {
    return this.title;
  }
  getAuthor(id: number): string {
    return this.author;
  }
  getStatus(id: number): BookStatus {
    return this.status;
  }
  getName(id: number): string {
    return this.name;
  }
}