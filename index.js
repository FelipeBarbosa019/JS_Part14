import home from "./pages/home.js"
import brigadeiro from "./pages/brigadeiro.js"
import cupcake from "./pages/cupcake.js"
import doces from "./pages/doces.js"

const root = document.querySelector("#root")
// const teste = document.querySelector("#brigadeiro")

// teste.addEventListener("click", function(e){
//     e.preventDefault();
// })
// const init = () => {
//     window.addEventListener("hashchange", () => console.log(window.location.hash))
// }


// const init = () => {
//     window.addEventListener("hashchange", () => console.log(window.location.hash))
// }
const homebtn = document.querySelector("#home")
const brigadeirobtn = document.querySelector("#brigadeiro")
const cupcakebtn = document.querySelector("#cupcake")
const docesbtn = document.querySelector("#doces")

homebtn.addEventListener("click", function(){
    history.pushState({},"","/")
    init();
})

brigadeirobtn.addEventListener("click", function(){
    history.pushState({},"","/brigadeiro")
    init();
})

cupcakebtn.addEventListener("click", function(){
    history.pushState({},"","/cupcake")
    init();
})

docesbtn.addEventListener("click", function(){
    history.pushState({},"","/doces")
    init();
})

const init = () => {
    console.log(window.location.pathname)
        console.log("teste")
        root.innerHTML = "";
        switch(window.location.pathname){
            case "/":
                root.appendChild(home());
                break;
            case "/brigadeiro":
                console.log("teste")
                root.appendChild(brigadeiro())
                break;
            case "/cupcake":
                root.appendChild(cupcake())
                break; 
            case "/doces":
                root.appendChild(doces())
                break;
        }
}


window.addEventListener("load", () =>{
    history.pushState({},"","/")
    init();
})