import { Library } from "../models/Library";
import { Book } from "../models/Book";
import { Person } from "../interfaces/Person";

export class LibraryService {
  private library: Library;

  constructor() {
    this.library = new Library();
  }
  addBook(book: Book): void {
    this.library.addBook(book);
    console.log(`Book with ID: ${book.id} added to the library.`);
  }

  showBookDetails(id: number): void {
    const book = this.library.getBooks().find(book => book.id === id);
    console.log(`Details for book with ID: ${id}`);
    console.log(`Title: ${book?.getTitle(id)}`);
    console.log(`Author: ${book?.getAuthor(id)}`);
    console.log(`Status: ${book?.getStatus(id)}`);
  }

  showBookStatus(bookId: number): void {
    const book = this.library.getBooks().find(book => book.id === bookId);
    if (book) {
      console.log(`Book with ID: ${bookId}: ${book.getStatus(bookId)}`);
    } else {
      console.log(`Book with ID: ${bookId} not found in the library.`);
    }
  }
}
