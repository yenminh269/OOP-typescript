import { BookStatus } from "../enums/BookStatus";
import { Library } from "../models/Library";
import { books } from "../data/BookData";
export class LibraryService {
  private library: Library;

  constructor() {
    this.library = new Library();
    this.library.addBooks(books);
  }

  showBooks(){
    this.library.showBooks();
  }

  getBookDetails(id: string): any {
    const book = this.library.getBooks().find(book => book.getId() === id);
    return book ? book : null;
  }

  getBookStatus(bookId: string): any {
    const book = this.library.getBooks().find(book => book.getId() === bookId);
    return book ?  book.getStatus() : null;
  }

  borrowBook(bookId: string) : void{
    const book = this.library.getBooks().find(book => book.getId() === bookId);
    if(book){
      const bookStatus = book.getStatus();
        if(bookStatus != BookStatus.AVAILABLE){
          console.log("Book is not available to borrow");
        }else{
          this.library.getBooks().find(book => book.getId() === bookId)?.setStatus(BookStatus.BORROWED);
          console.log("Book is successfully borrowed.")
        }
        console.log(`Book ID ${bookId} status: ` + bookStatus);
    }else{
        console.log(`Book ID ${bookId}` + " is not found");
    }
  }

  returnBook(bookId: string) : void{
    const bookStatus = this.getBookStatus(bookId);
    if(bookStatus != BookStatus.AVAILABLE){
      console.log("Book is not available to borrow");
    }else{
      console.log("Book is successfully borrowed.")
    }
  }
}
