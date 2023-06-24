let button = document.querySelector(".boton")
let RickyMorti= "https://rickandmortyapi.com/api/character";
let RickyFunction= async()=>{
let res = await fetch(RickyMorti)
let json = await res.json()
console.log(json)
}

document.addEventListener("click", ()=>{
  
    RickyFunction()
})

console.log("Hola")
