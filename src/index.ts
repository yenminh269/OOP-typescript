import { Person } from "./interfaces/Person";
import {PersonService} from "./services/PersonService";
import { LibraryService } from "./services/LibraryService";
import { createInterface } from "node:readline/promises";
import { Admin } from "./models/Admin";
import { Borrower } from "./models/Borrower";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const adminId = "1";
const adminName = "Mincy";

const borrowerId = "2";
const borrowerName = "Alex";

const personService = new PersonService();
const libraryService = new LibraryService();

let answer;

async function main() {
  console.log("***Library Management System***");

  answer = await logIn();
  
  const user = createUser(answer);

  answer = await displayFeatures(user);
 
  processChoice(answer, user);
}

main();

async function logIn(){  
  console.log("Select the log in options below:")
  console.log("1. Log in as Admin");
  console.log("2. Log in as Borrower");
  return await rl.question("Enter your choice: ");
}

function createUser(choice : any) {
  const user = choice === adminId 
    ? personService.createAdmin(adminId, adminName, libraryService) 
    : personService.createBorrower(borrowerId, borrowerName, libraryService);
    return user;
}

async function displayFeatures(user: Person){
  console.log("Select the features below:")
  return user.getId() == adminId ? await adminActions() : await borrowerActions();
}

async function adminActions(){
  console.log("1. Show book details");
  console.log("2. Show book status");
  return await rl.question("Enter your choice: ");
}

async function borrowerActions(){
  console.log("1. Borrow book");
  console.log("2. Return book");
  return await rl.question("Enter your choice: ");
}
  
async function processChoice(answer : string, user : Person){
  if(user instanceof Admin){
    if(answer == "1"){
      answer = await rl.question("Type the book ID to view details: ");

      user.showBookDetails(answer);
    }else {
      answer = await rl.question("Type the book ID to view status: ");

      user.showBookStatus(answer);
    }
  }else if(user instanceof Borrower) {
    if(answer == "1"){
      libraryService.showBooks();

      answer = await rl.question("Type the book ID to borrow: ");
      user.borrowBook(answer);
    }else{
      answer = await rl.question("Type the book ID to return: ");
      user.returnBook(answer);
    }
  }
  
  console.log("***THANK YOU FOR YOUR BUSINESS***");

  rl.close();
}





