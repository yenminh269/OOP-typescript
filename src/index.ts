import { Person } from "./interfaces/Person";
import {PersonService} from "./services/PersonService";
import { LibraryService } from "./services/LibraryService";
import { BookStatus } from "./enums/BookStatus";
// import * as readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

console.log("***Library Management System***");
console.log("Type 1 to log in as Admin or Type 2 to log in as Borrower");

const personService = new PersonService();
const libraryServiceInstance = new LibraryService();

const admin = personService.createAdmin(1, "Mincy", libraryServiceInstance);
console.log(`Admin created: ${admin.getName(1)}`);


const borrower1 = personService.createBorrower(2, "John Doe", new Date("2024-01-01"), new Date("2024-01-15"));
console.log(`Borrower created: ${borrower1.getName(2)}, Borrow Date: ${borrower1.getBorrowDate(2)}, Return Date: ${borrower1.getReturnDate(2)}`);

admin.addBook({ id: 101, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: BookStatus.AVAILABLE });
admin.addBook({ id: 102, title: "To Kill a Mockingbird", author: "Harper Lee", status: BookStatus.BORROWED });



