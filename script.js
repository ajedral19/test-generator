var c1 = document.querySelector("#color1")
var c2 = document.querySelector("#color2")
var board = document.querySelector(".block")
var css_val = document.querySelector(".val")

function color_val(){
    board.style.background = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
    var css = board.style.background
    css_val.textContent = css
}

window.addEventListener("load", color_val)
c1.addEventListener("input", color_val)
c2.addEventListener("input", color_val)


// window.addEventListener("load", () =>{
//     board.style.background = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
//     css_val.textContent = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
// })

// c1.addEventListener("input", ()=>{
//     board.style.background = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
//     css_val.textContent = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
// })

// c2.addEventListener("input", ()=>{
//     board.style.background = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
//     css_val.textContent = `linear-gradient(135deg, ${c1.value}, ${c2.value})`
// })

