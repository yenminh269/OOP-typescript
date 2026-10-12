import { BookStatus } from "../enums/BookStatus";
import { Book } from "./Book";

export class Library {
  private books: Book[] = [];

  addBooks(books: Book[]): void {
    this.books = [...this.books, ...books];
  }

  getBooks(): readonly Book[] {
    return this.books;
  }

  showBooks(){
    console.log("List of books: ");
    this.books.forEach((book) => { 
      console.log("ID " + book.getId() + " - Title: " + book.getTitle()); })
  }
};