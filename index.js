// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(NewCatNames) {
    cats.push(NewCatNames);
}

function destructivelyPrependCat(NewCatNames) {
    cats.unshift(NewCatNames);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   let copyOfCats = [...cats];
   copyOfCats.push(name);
   return copyOfCats;
}

function prependCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.pop(name);
    return copyOfCats;
}

function removeFirstCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.shift(name);
    return copyOfCats;
}