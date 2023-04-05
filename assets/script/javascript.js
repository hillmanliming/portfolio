// const cursor = document.querySelector(".cursor")
// document.addEventListener("mousemove", e => {
//     cursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px"
//     )
// })

let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", moveCursor)

function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY
    cursor.style.left = `${x}.1px`
    cursor.style.top = `${y}.1px`
}