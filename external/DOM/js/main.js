const body = document.body

/* // body.append("Hello  World")
const div = document.createElement("div")
// div.innerText = "Hello world!"
// div.textContent = "<strong>Hello again!</strong>"
// const div = document.querySelector("div")
const strong = document.createElement("strong")
strong.innerText = "Hello World 2"
// div.innerHTML = "<strong>Hello again!</strong>"
div.append(strong)
body.append(div)
console.log(div.textContent)
console.log(div.innerText) */

const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// spanBye.remove()
// div.append(spanBye)

console.log(spanHi.id)

// console.log(spanHi.setAttribute("title", "asdas"))
console.log(spanHi.id = "hey")
console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)

spanHi.dataset.newName = "This is a new name"
// spanHi.classList.add("class3")
console.log(spanHi.classList)
// spanHi.classList.remove("class3")
// console.log(spanHi.classList)
spanHi.classList.toggle("class3", true)
console.log(spanHi.classList)

spanHi.style.backgroundColor = "#f00"