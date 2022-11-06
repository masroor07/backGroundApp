const element = document.querySelector("body")
const btn = document.getElementById("submit")
const col = document.querySelector("#color")

const change = () => { 
    element.style.backgroundColor = col.value
    if(col.value == "black" ){
        element.style.color = "white"
    }else{
        element.style.color = "black"
    }
}
btn.addEventListener("click", change)