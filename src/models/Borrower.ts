import {Person} from "../interfaces/Person";
import { LibraryService } from "../services/LibraryService";
export class Borrower implements Person {
  id: string;
  name: string;
  LibraryService: LibraryService;
  public borrowDate: Date | null = null;
  public returnDate: Date | null = null;

  constructor(_id: string, _name: string, _libraryService: LibraryService) {
    this.id = _id;
    this.name = _name;
    this.LibraryService = _libraryService;
  }

  getId() : string {
    return this.id;
  }

  getName() : string {
    return this.name;
  }

  borrowBook(bookId: string): void {
    this.LibraryService.borrowBook(bookId);
  }

  returnBook(bookId: string): void {
    this.LibraryService.returnBook(bookId);
  }

}