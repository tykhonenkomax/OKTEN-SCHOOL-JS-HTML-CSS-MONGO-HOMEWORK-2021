// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let result = [];
function recursia(startElement){
    let startElementChildren = startElement.children;
    for (const fatherIteration of startElementChildren) {
        for (const sonIteretion of fatherIteration.classList) {
            result.push(sonIteretion)
        }
        recursia(fatherIteration)
    }
}
recursia(document.body)
console.log(result)

