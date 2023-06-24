let button = document.querySelector(".button")
let RickyMorti= "https://rickandmortyapi.com/api/character";
let RickyFunction= async()=>{
    let res = await fetch(RickyMorti)
    let json = await res.json()
    console.log(json)
}

button.addEventListener("click", ()=>{
  
    RickyFunction()
})


