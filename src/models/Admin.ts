import { Person } from "../interfaces/Person";
import { LibraryService } from "../services/LibraryService";

export class Admin extends Person {
  LibraryService: LibraryService;
  constructor(id: number, name: string, libraryService: LibraryService) {
    super(id, name);
    this.LibraryService = libraryService;
  }

  addBook(book: any): void {
    this.LibraryService.addBook(book);
  }

  showBookDetails(bookId: number): void {
    this.LibraryService.showBookDetails(bookId);
  }

  showBookStatus(bookId: number): void {
    this.LibraryService.showBookStatus(bookId);
  }
}