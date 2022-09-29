"use strict";
class libraryDepartment extends Department {
    constructor(id, books) {
        super(id, "Library");
        this.books = books;
    }
    static getInstance() {
        if (libraryDepartment.instance) {
            return this.instance;
        }
        this.instance = new libraryDepartment("D3", []);
        return this.instance;
    }
    describe() {
        console.log("Library Department - ID: " + this.id);
    }
    addBook(book) {
        this.books.push(book);
    }
    printBooks() {
        console.log(this.books);
    }
}
const library = libraryDepartment.getInstance();
const library2 = libraryDepartment.getInstance();
console.log(library, library2);
//# sourceMappingURL=singletons-private.js.map