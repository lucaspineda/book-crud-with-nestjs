import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from 'src/db/fakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.getBook(bookId);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    console.log(book);
    const bookData = book;
    if (!book.author || !book.publicationYear || !book.title) return undefined;
    return this.booksService.createBook(bookData);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() book: Partial<Book>) {
    const bookId = +id;
    return this.booksService.updateBook(book, bookId);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book[] {
    return this.booksService.deleteBook(+id);
  }
}
