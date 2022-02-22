// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let resultTask1 =[];
function recursia(start){
    let children =  start.children
    for (const child of children) {
        for (const childElement of child.classList) {
            resultTask1.push(childElement)
        }
        recursia(child)
    }
}
recursia(document.body)
console.log(resultTask1)