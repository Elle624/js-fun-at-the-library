var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name,library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName,value) {
    if (value===true){
      return `Good morning, ${patronName}!`
    }else{
      return `Hello, ${patronName}!`
    }    
  }  

findBook(bookName) {
  var fantasyShelf = this.library.shelves.fantasy
  for (var i=0; i<fantasyShelf.length; i++){
    if (bookName===fantasyShelf[i].title){
      fantasyShelf.shift()
      return `Yes, we have ${bookName}`
    }else {
      return `Sorry, we do not have ${bookName}`
    }
  }
}

calculateLateFee(numOfDate){
  return Math.ceil(numOfDate*0.25)
}



}

module.exports = Librarian;