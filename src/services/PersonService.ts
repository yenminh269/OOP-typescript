import { Admin } from "../models/Admin";
import { Borrower } from "../models/Borrower";
import { LibraryService } from "./LibraryService";

export class PersonService{
  createAdmin(id: string, name: string, libraryService: LibraryService): Admin {
    console.log(`You logged in as Admin: ${name}`)
    return new Admin(id, name, libraryService);
  }

  createBorrower(id: string, name: string, libraryService: LibraryService ): Borrower {
    console.log(`You logged in as Borrower: ${name}`);
    return new Borrower(id, name, libraryService);
  }
}