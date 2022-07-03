import home from "./pages/home.js"
import brigadeiro from "./pages/brigadeiro.js"

const root = document.querySelector("#root")
// const teste = document.querySelector("#brigadeiro")

// teste.addEventListener("click", function(e){
//     e.preventDefault();
// })
// const init = () => {
//     window.addEventListener("hashchange", () => console.log(window.location.hash))
// }

const init = () => {
    window.addEventListener("hashchange", () => console.log(window.location.hash))
}


// const init = () => {
//     window.addEventListener("hashchange", () => {
//         switch(window.location.hash){
//             case "#":
//                 root.appendChild(home());
//                 break;
//             case "#brigadeiro":
//                 root.appendChild(brigadeiro())
//                 break;
//             case "#cupcake":
//                 root.appendChild(cupcake())
//                 break; 
//             case "#doces":
//                 root.appendChild(doces())
//                 break;
//         }
//     })
// }

window.addEventListener("load", () =>{
    root.appendChild(home());
})