function shelfBook(name,shelf) {
  if (shelf.length <3){
    shelf.unshift(name)
  }
}

function unshelfBook(name,shelf) {
  for (var i= 0; i<shelf.length ; i++){
    if (shelf[i].title===name) {
      shelf.splice(i,1);
    } 
  }
}

function listTitles(newShelf) {
  var list = []
  for (var i=0; i<newShelf.length; i++){
    list.push(newShelf[i].title)
  }
  return list.join(", ")
}

function searchShelf(shelf,name) { 
  return shelf.includes(shelf.find(function(item){ return item.title===(name)})); 
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};