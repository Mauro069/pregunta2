const Preguntas = [
  {
    pregunta: "¿De qué país forma parte Hawaii?",
    opciones: ["Estados Unidos", "Mexico", "Canada", "China"],
    opcionCorrecta: "Estados Unidos",
  },
  {
    pregunta: "¿Cuántos estados tiene integrados Estados Unidos?",
    opciones: ["23", "50", "49", "52"],
    opcionCorrecta: "50",
  },
  {
    pregunta: "¿Cuál es el océano más grande del mundo?",
    opciones: [
      "Oceano Indico",
      "Oceano Pacifico",
      "Oceano Atlantico",
      "Oceano Artico",
    ],
    opcionCorrecta: "Oceano Pacifico",
  },
  {
    pregunta: "¿En qué año fue el descubrimiento de América?",
    opciones: ["1492", "1942", "1493", "1490"],
    opcionCorrecta: "1492",
  },
  {
    pregunta: "¿Cuál es el idioma más hablado del mundo?",
    opciones: ["Español", "Ingles", "Portugues", "Chino Mandarin"],
    opcionCorrecta: "Chino Mandarin",
  },
];

export const PreguntasData = Preguntas.sort(() => Math.random() - 0.5);
