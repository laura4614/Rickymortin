let button = document.querySelector(".button")
let RickyMorti= "https://rickandmortyapi.com/api/character";
let list = document.querySelector(".list");

let getCharacters =async()=>{
    let res = await fetch(RickyMorti)
    let json = await res.json()
    return json;

}

const createCards=(characters)=>{ 
    let html =""
    for (let i=0; i<characters.results.length; i++) {
    html = `<div class='card'><img/ src=${characters.results[i].image}><h3>${characters.results[i].name}</h3><p>${characters.results[i].status}</p></div>`
    printCards(html)
}

    return html
}

 (async()=>{
    const characters = await getCharacters()
    console.log(createCards(characters))
    //list.appendChild(displayCards(characters));
    //console.log(html);
 })()

 const printCards=(card)=>{
    console.log(card);
    let listElement=document.createElement('li');
    listElement.innerHTML=card;
    list.append(listElement);

 }
