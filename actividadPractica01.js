// Definir las variables iniciales
let distanciaEntreMarcoYMadre = 350; // Inicialmente a 350 km
let dia = 1;

// Bucle principal que simula los días de viaje
while (distanciaEntreMarcoYMadre > 0) {
  // const tiempoRecorridoPorMarco = distanciaEntreMarcoYMadre;
  // Simular el clima para Marco (probabilidad de lluvia fuerte, lluvia normal o buen clima)
  const clima = Math.random();
  let mensajeClimaMarco = 'hecho un buen dia';
  let mensajePerdidaAmedio = '';
  let velocidadReduccion = 0; // Variable para reducir la velocidad en caso de lluvia

  if (clima < 0.1) {
    velocidadReduccion = 0.25; // Reducción del 25% en caso de lluvia fuerte
    mensajeClimaMarco = 'llovido muchísimo!';
  } else if (clima < 0.4) {
    velocidadReduccion = 0.25; // Reducción del 25% en caso de lluvia normal
    mensajeClimaMarco = 'llovido un poco';
  }

  // Simular el comportamiento del mono Amedio
  const probabilidadEscape = 0.15;
  const probabilidadCansancio = 0.25;

  if (Math.random() < probabilidadEscape) {
    // Amedio se escapa, Marco corre y pierde dos horas de recorrido
    distanciaEntreMarcoYMadre -= (10 - 2);
    mensajePerdidaAmedio = '¡He perdido tiempo buscando a Amedio!'
  } else if (Math.random() < probabilidadCansancio) {
    // Amedio se cansa, Marco lleva al mono en brazos y reduce la velocidad en un 10%
    distanciaEntreMarcoYMadre -= 8 * (1 - 0.1);
  } else {
    // Marco avanza normalmente
    distanciaEntreMarcoYMadre -= 8 * (1 - velocidadReduccion);
  }

  let mensajeClimaMadre = ' hecho un buen día';
  // Simular el clima para la madre (probabilidad de lluvia muy fuerte, lluvia normal o buen clima) P 1.1
  const climaMadre = Math.random();
  let velocidadReduccionMadre = 0; // Variable para reducir la velocidad en caso de lluvia

  if (climaMadre < 0.1) {
    velocidadReduccionMadre = 0.5; // Reducción del 50% en caso de lluvia muy fuerte
     mensajeClimaMadre = ' llovido un poco';
  } else if (climaMadre < 0.4) {
    velocidadReduccionMadre = 0.25; // Reducción del 25% en caso de lluvia normal
     mensajeClimaMadre = ' llovido muchísimo!';
  }

  // Madre avanza normalmente
  distanciaEntreMarcoYMadre += 6 * (1 - velocidadReduccionMadre);

  // Comprobar si al final del día la distancia es menor a 50 km y hay probabilidad de
  // encontrar a alguien que ha visto a su madre P 1.1.1
  if (distanciaEntreMarcoYMadre < 50 && Math.random() < 0.5) {
    distanciaEntreMarcoYMadre -= 25; // Marco corre 25 km adicionales
  }

  // Imprimir el estado del viaje al final del día
  console.log(`DIA ${dia}`);
  console.log(`Ha ${mensajeClimaMarco}`)
  mensajePerdidaAmedio ? console.log(mensajePerdidaAmedio) : mensajePerdidaAmedio = '';

  console.log(`A mamá le ha${mensajeClimaMadre}`)
  console.log(`Al final del día ${dia} la distancia entre Marco y su Madre es de ${distanciaEntreMarcoYMadre.toFixed(2)} Km`);
  console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
  dia++;
}

// Marco encuentra a su madre
console.log("Al final del día", dia - 1, "Marco encuentra a su madre!!!");
