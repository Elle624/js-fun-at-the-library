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
      var totalShelf=this.library.shelves
      for (var eachShelf in totalShelf){
        for (var i=0; i<totalShelf[eachShelf].length; i++) {
          if (bookName===totalShelf[eachShelf][i].title){
            totalShelf[eachShelf].shift()
            return `Yes, we have ${bookName}`
          }
        }
      }
      return `Sorry, we do not have ${bookName}`
    }

  calculateLateFee(numOfDate){
    return Math.ceil(numOfDate*0.25)
  }



}

module.exports = Librarian;