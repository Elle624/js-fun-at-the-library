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
  var fictionShelf = libraryName.shelves.fiction;
  var fantasyShelf = libraryName.shelves.fantasy;
  var nonFictionShelf = libraryName.shelves.nonFiction;

  for (var i=0; i<fictionShelf.length; i++){
    if (book === fictionShelf[i].title){
      fictionShelf.splice(i,1);    
      return `You have now checked out ${book} from the ${libraryName.name}`;
    }
  } 
  for (var i=0; i<fantasyShelf.length; i++){ 
    if (book === fantasyShelf[i].title){
      fantasyShelf.splice(i,1);    
      return `You have now checked out ${book} from the ${libraryName.name}`;
    }
  }
  for (var i=0; i<nonFictionShelf.length; i++){ 
   if (book === nonFictionShelf[i].title){
      nonFictionShelf.splice(i,1);    
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