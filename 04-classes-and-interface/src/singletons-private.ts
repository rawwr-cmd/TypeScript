//exactly have only one object based on a class
class libraryDepartment extends Department {
  private static instance: libraryDepartment;

  private constructor(id: string, private books: string[]) {
    super(id, "Library");
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

  addBook(book: string) {
    this.books.push(book);
  }

  printBooks() {
    console.log(this.books);
  }
}

const library = libraryDepartment.getInstance();
const library2 = libraryDepartment.getInstance();

console.log(library, library2);
