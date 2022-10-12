/* const pokemon = document.getElementById('pokemon');
const conatainer_right = document.querySelector('.container_right');

const btn = document.getElementById('btn').addEventListener('click', () => { */

    /*    function getNombre(username){
           const api=`https://pokeapi.co/api/v2/pokemon/${username}`
           fetch(api)
           .then(response=>response.json())
           .then(datos=>console.log(datos))
       }
       
       getNombre('pikachu') */

/*     async function buscarPokemon() {

        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');

        if (respuesta.status == 404) {
            document.conatainer_right.textContent = 'No encontrado';

        } else {
            function getNombre(username) {
                const api = `https://pokeapi.co/api/v2/pokemon/${username}`
                fetch(api)
                    .then(response => response.json())
                    .then(datos => console.log(datos))
            }

            getNombre(pokemon.value);
        }

    }
}) */

const infoPokemon = document.querySelector('.container_right')

document.getElementById('btn').addEventListener('click', ()=>{

    const pokemon = document.getElementById('pokemon').value;

    if (pokemon == ''){
        alert('No ha ingresado el nombre de ningun Pokemon');

    }else{
        
        async function getNombre(pokemon){
            const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const response = await fetch(api);
            const info = await response.json();
            console.log(response);
            console.log(info);

            

          //  UN FOR PARA RECORRER UN ARRAY 
     
            let habilidades=document.createElement('div');
            habilidades.className='info';
            habilidades.className = 'habilidades';
             

            for(i=0;i<info.abilities.length;i++){
                 habilidades.innerHTML +=`<p>${info.abilities[i].ability.name} </p>` 
                
            } 

            let x = document.createElement('div')
            x.innerHTML = `<div><img src = ${info.sprites.front_default}></div>
           <div class="info_pokemon">
            <div class="info">
            <h3> Datos </h3>
            <p><b>Nombre:</b> ${info.name} <br>
            <b>ID:</b> ${info.id} <br>
            <b>Tipo:</b> ${info.types[0].type.name} <br>
            <b>Altura:</b> ${info.height} /
            <b>Peso:</b> ${info.weight} <br>
            </p></div>
            <div class="info">
            <h3> Estadisticas </h3>
            <p><b>Hp:</b> ${info.stats[0].base_stat} <br>
            <b>Ataque:</b> ${info.stats[1].base_stat} <br>
            <b>Defensa:</b> ${info.stats[2].base_stat} <br>
            <b>Velocidad:</b> ${info.stats[5].base_stat} <br></p></div>
            </div>`
            
            
                //MUESTRA LOS DATOS DEL ARRAY RECORRIDO
                infoPokemon.append(x)
                
                infoPokemon.append(habilidades);

            
        }

        getNombre(`${pokemon}`);
    }
})





