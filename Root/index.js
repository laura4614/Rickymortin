let button = document.querySelector(".boton")
let RickyMorti= "https://rickandmortyapi.com/api/character";
let res = await fetch(RickyMorti)
let json = await res.json()

button.onclick = function (){ 
    console.log(res)

}
