let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {

    count += 1
    countEl.innerText = count
}

function save() {

    let contagem = count + " - "

    saveEl.textContent += contagem

    console.log(count)

}






