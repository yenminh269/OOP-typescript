import { Person } from "../interfaces/Person";
import { Admin } from "../models/Admin";
import { Borrower } from "../models/Borrower";
import { LibraryService } from "./LibraryService";

export class PersonService{
  createAdmin(id: number, name: string, libraryService: LibraryService): Admin {
    return new Admin(id, name, libraryService);
  }

  createBorrower(id: number, name: string, borrowDate: Date, returnDate: Date): Borrower {
    return new Borrower(id, name, borrowDate, returnDate);
  }
}