import { Person } from "../interfaces/Person";
import { LibraryService } from "../services/LibraryService";

export class Admin implements Person {
  LibraryService: LibraryService;
  id: string;
  name: string;

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
  
  showBookDetails(bookId: string): void {
    const book = this.LibraryService.getBookDetails(bookId);
    console.log(`Details for book with ID: ${bookId}`);
    console.log(`Title: ` + book.getTitle());
    console.log(`Author: ` + book.getAuthor());
    console.log(`Status: ` + book.getStatus());
  }

  showBookStatus(bookId: string): void {
    console.log(`Book ID status: ` + this.LibraryService.getBookStatus(bookId));
  }
}