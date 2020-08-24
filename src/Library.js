function createLibrary(newName) {
  return {
    name : newName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
}

function addBook(libraryName,bookName) {
  libraryName.shelves[bookName.genre].push(bookName)
}

function checkoutBook(libraryName,book) {
  var totalShelf=libraryName.shelves

  for (var eachShelf in totalShelf){
    for (var i=0; i<totalShelf[eachShelf].length; i++) {    
      if (book === totalShelf[eachShelf][i].title) {
        totalShelf[eachShelf].splice(i,1);    
        return `You have now checked out ${book} from the ${libraryName.name}`;
      }
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${libraryName.name}`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};