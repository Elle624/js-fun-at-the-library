function shelfBook(name,shelf) {
  if (shelf.length <3){
    shelf.unshift(name)
  }
}

function unshelfBook(name,shelf) {
  //shelf.splice(1,1)
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
  for (var i=0; i<shelf.length; i++){
    if (shelf[i].title===name){
      return true
    }
  }
  return false
}
// function searchShelf(shelf,name) {
//   var titles =""
//   for (var i=0; i<shelf.length; i++){
//     titles += shelf[i].title+ ","
//   }
//     return titles.includes(name)
// }

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};