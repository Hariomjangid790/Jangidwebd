
let display = document.querySelector(".inputwindow")
let btns = document.querySelectorAll(".keys button")
for (let i = 0; i < (btns.length - 3); i++) {
    btns[i].addEventListener("click", function () {
        display.value += btns[i].innerText
    })
}

 btns[btns.length-3].addEventListener("click", function () {
           try {display.value  =eval(display.value)
            
           } catch (error) {
            display.value="ERROR"
           } 

})
 btns[btns.length-2].addEventListener("click", function () {
             display.value  =""

})

 btns[btns.length-1].addEventListener("click", function () {
             display.value = display.value.slice(0,display.value.length-1)

})