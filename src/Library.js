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
  if (bookName.genre==="fantasy"){
  libraryName.shelves.fantasy.push(bookName)
  } 
    else if (bookName.genre==='nonFiction'){
  libraryName.shelves.nonFiction.push(bookName)
  }
  else if (bookName.genre==='fiction'){
    libraryName.shelves.fiction.push(bookName)
  }
}

function checkoutBook(libraryName,book) {
  var totalShelves = libraryName.shelves.fiction;
  for (var i=0; i<totalShelves.length; i++){
    if (book === totalShelves[i].title){
      totalShelves.shift();    
      return `You have now checked out ${book} from the ${libraryName.name}`;
    } 
  }
  return `Sorry, there are currently no copies of ${book} available at the ${libraryName.name}`
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};