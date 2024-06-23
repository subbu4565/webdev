const library = {
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
        
       
    ]
};

// Example of accessing the books
const newBook = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

library.books.push(newBook);


console.log(library.books);
delete library.books;
console.log(library.books);


