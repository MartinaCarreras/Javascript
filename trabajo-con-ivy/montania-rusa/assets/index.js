//Un padre llega a un parque de atracciones y sus hijos desean subirse a una montaña rusa 
//Para ello, hablan con el guía y éste les responde: 

let pesoSuma = 0;
let i = 1;
let nenes = parseInt(prompt(`Bienvenidos! Cuantos niños son?`));
if (nenes>10) {
    alert(`Sólo aceptamos 10 niños por familia`)
}else {
    while(pesoSuma<=1000 && i<=nenes) {
        for(i = 1; i<=nenes; i++) {
            let nombre = prompt(`Cómo se llama el ${i}º niño?`)
            let edad = prompt(`Cuántos años tiene ${nombre}?`)
            if(edad<=8) {
                alert(`Perdón ${nombre}, sos muy joven para esta atracción, siguiente`)
            }else {
                let altura = prompt(`Cuánto mide ${nombre} en centímetros?`)
                if (altura>=180) {
                    alert(`Perdón, sos muy alto para esta atracción, ${nombre}, a ver el siguiente`);
                }else if (altura<=140) {
                    alert(`Perdón, sos muy bajo para esta atracción, ${nombre}, a ver el siguiente`);
                }else {
                    let peso = prompt(`Cuánto pesa ${nombre}?`);
                    if (peso>=150){
                        alert(`Perdón ${nombre}, sos muy pesado para esta atracción, a ver el siguiente`);
                    }else if (peso<=35){
                        alert(`Perdón ${nombre}, no sos lo suficientemente pesado para esta atracción, a ver el siguiente`);
                    }else {
                        pesoSuma = pesoSuma + peso;
                        alert(`Perfecto! adelante, ${nombre}.`);
                    }
                }
            }
        }
    }
    if (pesoSuma>1000 && i<=nenes) {
        alert(`Hemos llegado al límite de peso, ya no puede pasar nadie`);
        alert(`Los demás:`);
    }
    alert(`Que tengan un lindo paseo`);
}
