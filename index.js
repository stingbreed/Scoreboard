let count = 0
let countG = 0
document.getElementById("home").textContent = count
document.getElementById("guest").textContent = countG

plusHome = document.getElementById("home")
plusGuest = document.getElementById("guest")



function add1() {
   let result = count += 1
   plusHome.textContent = result
}
function add2() {
    let result = count += 2
   plusHome.textContent = result
}
function add3() {
    let result = count += 3
   plusHome.textContent = result
}

function add1g() {
   let result = countG += 1
   plusGuest.textContent = result
}
function add2g() {
    let result = countG += 2
   plusGuest.textContent = result
}
function add3g() {
    let result = countG += 3
   plusGuest.textContent = result
}