import { Book } from "../models/Book";
import { BookStatus } from "../enums/BookStatus";

export const books = [new Book("1", "The Great Gatsby", "F. Scott Fitzgerald", BookStatus.AVAILABLE),
 new Book("2", "To Kill a Mockingbird", "Harper Lee", BookStatus.AVAILABLE),
 new Book("3", "1984", "George Orwell", BookStatus.BORROWED),
 new Book("4", "Pride and Prejudice", "Jane Austen", BookStatus.RESERVED),
 new Book("5", "The Catcher in the Rye", "J.D. Salinger", BookStatus.LOST)
];
