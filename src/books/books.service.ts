import { Injectable } from '@nestjs/common';
import { Book, books } from 'src/db/fakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  getBook(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  createBook(bookData: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1;
    const newBook: Book = {
      id: newId,
      author: bookData.author ?? '',
      publicationYear: bookData.publicationYear ?? 0,
      title: bookData.title ?? '',
    };
    books.push(newBook);
    return newBook;
  }

  updateBook(book: Partial<Book>, id: number) {
    const index = books.findIndex((book) => book.id === id);
    console.log(book, 'dddd')
    const updatedBook: Book = {
      id,
      author: book.author ?? books[index].author,
      publicationYear: book.publicationYear ?? books[index].publicationYear,
      title: book.title ?? books[index].title,
    };
    books[index] = updatedBook;
    return updatedBook;
  }
}
