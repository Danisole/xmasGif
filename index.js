const numRandom = document.getElementById("numRandom")
const numRandom1 = document.getElementById("numRandom1")



const personajeRandom = () =>{

    numRandom.innerHTML="";
    numRandom1.innerHTML="";

    //Math random para crear un numero aleatorio

    const numeroRandom = Math.floor(Math.random() * xmasCaracters.length) +1
    console.log(numeroRandom)

    const numCaracRandom = Math.floor(Math.random() * caracteristicas.length) +1

    console.log(numCaracRandom);
    
    //Filter para traer un elemento
    const filterPersonaje = xmasCaracters.filter( (el)=>{
       
        return el.id == numeroRandom

    }) 
    console.log(filterPersonaje);

    //filtrar caracteristica

    const filterCaracteristica = caracteristicas.filter( (el)=>{
       
        return el.id == numCaracRandom

    }) 
    console.log(filterCaracteristica)

    //map para mostrar el elemeto del array generado por el filter
    //creamos el elemento p para mostrar el mensaje 
    //generamos el span para el elemento aleatoreo

    filterPersonaje.map((el)=>{

    const pPersonajes = document.createElement("p")
    pPersonajes.className = "p-personajes";

    pPersonajes.innerHTML=`
    El personaje que eres esta navidad es 
    <span>${el.personaje}</span>
    `
    numRandom.append(pPersonajes)
    })

    //filtrar la caracteristica

    filterCaracteristica.map((element)=>{

        const spanCaracteristica = document.createElement("span")
        spanCaracteristica.className = "span-caract";

        spanCaracteristica.innerHTML=`
        ${element.caracteristica}`
        
        numRandom.append(spanCaracteristica)
    })

    //generamos el boton para que comience la magia

    const btnPersonaje = document.createElement("button")
    
    btnPersonaje.innerText = "Aprieta"
    btnPersonaje.className = "btn-personaje"

    const miPersonaje = btnPersonaje.addEventListener("click", personajeRandom)
    
    numRandom1.append(btnPersonaje)

}
personajeRandom()






    









