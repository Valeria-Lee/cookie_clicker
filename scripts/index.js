const cookie = document.getElementById('cookie')
const counter = document.getElementById('counter')
let count = 0

cookie.onclick = () => {
    count++
    counter.innerText = 'You got ' + count + ' clicks'
}