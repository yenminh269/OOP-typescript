import {BookStatus} from "../enums/BookStatus";

export class Book {
  private author: string;
  private status: BookStatus;
  private id: string;
  private title: string;

  constructor(id: string, title: string, author: string, status: BookStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.status = status;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getStatus(): BookStatus {
    return this.status;
  }

  setStatus(_status : BookStatus){
    this.status = _status;
  }
}