// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let box =[];
function recursia(startElement) {
    let getChildren = startElement;
    for (const child of getChildren) {
        if (child === child.document.getElementsByClassName('name')) {
            box.push(child)
        }
      return box;
    }
}
let result = recursia(document.body.children);
console.log(result)