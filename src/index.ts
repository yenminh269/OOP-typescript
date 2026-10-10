import { Person } from "./interfaces/Person";
import {PersonService} from "./services/PersonService";
import { LibraryService } from "./services/LibraryService";
import { BookStatus } from "./enums/BookStatus";
import { createInterface } from "node:readline/promises";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const adminId = 1;
const adminName = "Mincy";
const borrowerId = 2;
const borrowerName = "Alex";

console.log("***Library Management System***");
console.log("Type 1 to log in as Admin or Type 2 to log in as Borrower");

async function main() {
  const answer = await rl.question("What is your choice? ");
  answer === adminId.toString() ? 
    console.log(`You logged in as Admin: ${adminName}`) :
    console.log(`You logged in as Borrower: ${borrowerName}`);
  const user = createUser(answer);
}
main().then(() => rl.close());
  


function createUser(choice: string) {
  const personService = new PersonService();
  const libraryServiceInstance = new LibraryService();
  const user = choice === adminId.toString() ? 
    personService.createAdmin(adminId, adminName, libraryServiceInstance) :
    personService.createBorrower(borrowerId, borrowerName, new Date("2024-01-01"), new Date("2024-01-15"));

    return user;
}

// const borrower1 = personService.createBorrower(2, "John Doe", new Date("2024-01-01"), new Date("2024-01-15"));
// console.log(`Borrower created: ${borrower1.getName(2)}, Borrow Date: ${borrower1.getBorrowDate(2)}, Return Date: ${borrower1.getReturnDate(2)}`);

// admin.addBook({ id: 101, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: BookStatus.AVAILABLE });
// admin.addBook({ id: 102, title: "To Kill a Mockingbird", author: "Harper Lee", status: BookStatus.BORROWED });


