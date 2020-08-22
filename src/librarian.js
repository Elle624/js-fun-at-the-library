var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name,library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName,value) {
    if (!value){
      return `Hello, ${patronName}!`
    }else{
      return `Good morning, ${patronName}!`
    }    
  }  

  findBook(bookName) {
    var fantasyShelf = this.library.shelves.fantasy
    var fictionShelf = this.library.shelves.fiction
    var nonFictionShelf = this.library.shelves.nonFiction

    for (var i=0; i<fantasyShelf.length; i++){
      if (bookName===fantasyShelf[i].title){
        fantasyShelf.shift()
        return `Yes, we have ${bookName}`
      }
    }
    for (var i=0; i<fictionShelf.length; i++){
      if (bookName===fictionShelf[i].title){
        fictionShelf.shift()
        return `Yes, we have ${bookName}`
      }
    }
    for (var i=0; i<nonFictionShelf.length; i++){
      if (bookName===nonFictionShelf[i].title){
        nonFictionShelf.shift()
        return `Yes, we have ${bookName}`
      }
    }
    return `Sorry, we do not have ${bookName}`
  }

  calculateLateFee(numOfDate){
    return Math.ceil(numOfDate*0.25)
  }



}

module.exports = Librarian;