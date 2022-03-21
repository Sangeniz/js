const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        } 
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeNameo = data.name;
            namo(pokeNameo);
            console.log(pokeNameo);
            document.getElementById("pokeNameo").innerHTML = pokeNameo;
            if (data.types.length!= "2"){
                console.log("uno");
                let poketipo = data.types[0].type.name;
                poketip(poketipo);
                console.log(poketipo);
                document.getElementById("poketipo").innerHTML = poketipo;
            }
            else {
                console.log("dos");
                let poketipo = data.types[0].type.name + " / " + data.types[1].type.name;
                poketip(poketipo);
                console.log(poketipo);
                document.getElementById("poketipo").innerHTML = poketipo;
            }
            let php = data.stats[0].base_stat;
            pokehp(php);
            console.log(php);
            document.getElementById("hp").innerHTML = php;
            let attackp = data.stats[1].base_stat;
            pokea(attackp);
            console.log(attackp);
            document.getElementById("attack").innerHTML = attackp;
            let defensep = data.stats[2].base_stat;
            poked(defensep);
            console.log(defensep);
            document.getElementById("defense").innerHTML = defensep;

            let psa = data.stats[3].base_stat;
            pespat(psa);
            console.log(psa);
            document.getElementById("sattack").innerHTML = psa;

            let psd = data.stats[4].base_stat;
            poked(psd);
            console.log(psd);
            document.getElementById("sdefense").innerHTML = psd;

            let pokespeed = data.stats[5].base_stat;
            pspeed(pokespeed);
            console.log(pokespeed);
            document.getElementById("speed").innerHTML = pokespeed;

            let movimientos = [];
            let i = data.moves.length ;
            let movp = movimientos;
            for (var j = 0; movimientos.length < i; j++){
                movimientos.push(data.moves[j].move.name);
            }
            /*document.write(JSON.stringify(movp));*/
            document.getElementById("cadena").innerHTML = JSON.stringify(movp);
            document.getElementById("movimient").InnerHTML = "noesquearhoita";
            movimientosp(movp);
            console.log(movp);
            
            /*for(k=0; k < movimientos.length; k++){
                document.write(movimientos[i] + " ");
            }*/
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const namo = (url) => {
    const namep = document.getElementById("pokeNameo");
    namep.src = url;
}
const poketip = (url) => {
    const poketi = document.getElementById("poketipo");
    poketi.src = url;
}
const pokehp = (url) => {
    const pokeh = document.getElementById("hp");
    pokeh.src = url;
}
const pokea = (url) => {
    const pokeat = document.getElementById("attack");
    pokeat.src = url;
}
const poked = (url) => {
    const pokede = document.getElementById("defense");
    pokede.src = url;
}
const pespat = (url) => {
    const pokesa = document.getElementById("sattack");
    pokesa.src = url;
}
const pesdef = (url) => {
    const pokeesd = document.getElementById("sdefense");
    pokeesd.src = url;
}
const pspeed = (url) => {
    const pokesp = document.getElementById("speed");
    pokesp.src = url;
}

const movimientosp = (url) => {
    const movpoke = document.getElementById("movimientos");
    movpoke.src = url;
}