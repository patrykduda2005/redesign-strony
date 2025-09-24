const nav_promise = fetch("./nav.html").then((f) => {return f.text()})
const nav_elem = document.getElementById("nav")
nav_promise.then((v) => nav_elem.innerHTML = v)
window.matchMedia()
