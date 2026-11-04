// Hito 1 · Datos

// Actividades: id, nombre, monitor, tipo, plazas, cuota
const A_ID = 0, A_NOMBRE = 1, A_MONITOR = 2,
      A_TIPO = 3, A_PLAZAS = 4, A_CUOTA = 5;

const actividades = [
    [1, "Escalada indoor", "Marta Díaz", "aventura", 10, "38,50"],
    [2, "Pilates suelo", "Lucía Martín", "bienestar", 14, "29"],
    [3, "Bádminton", "Álvaro Núñez", "raqueta", 12, "24,50"],
    [4, "Entrenamiento funcional", "Diego Ramos", "fuerza", 16, "32"],
    [5, "Pilates máquinas", "Lucía Martín", "bienestar", 8, "42"],
    [6, "Iniciación al senderismo", "Sergio Peña", "aventura", 15, "18"],
    [7, "Pádel avanzado", "Noelia Sanz", "raqueta", 8, "35"],
    [8, "Circuito de fuerza", "Diego Ramos", "fuerza", 12, "30"],
    [9, "Movilidad y espalda", "", "bienestar", 10, "22"],
    [10, "Tenis de mesa", "Álvaro Núñez", "raqueta", 10, "20"],
    [11, "Orientación deportiva", "Sergio Peña", "aventura", 12, "19,50"],
    [12, "Cross training", "Diego Ramos", "fuerza", 10, "36"],
    [13, "Zumba", "Paula León", "baile", 20, "25"],
    [14, "Danza urbana", "Paula León", "baile", 16, "27,50"],
    [15, "Técnica de carrera", "Héctor Gil", "resistencia", 14, "21"]
];

// Socios: id, nombre, teléfono
const S_ID = 0, S_NOMBRE = 1, S_TELEFONO = 2;
const socios = [
    [1, "Eric Ruiz", "658345261"],
    [2, "Lorena Valero", ""],
    [3, "Andrea Sánchez", "643748593"],
    [4, "Pedro Martín", "602329485"],
    [5, "Bruno Costa", ""],
    [6, "Irene Castillo", "623481957"],
    [7, "Daniel Serrano", "634729185"],
    [8, "Ainhoa Martín", "611583942"]
];

// Inscripciones: id, id del socio, id de la actividad, día, pagada
const I_ID = 0, I_SOCIO = 1, I_ACTIVIDAD = 2, I_DIA = 3, I_PAGADA = 4;
const inscripciones = [
    [1, 1, 1, 2, true],
    [2, 1, 2, 3, true],
    [3, 1, 1, 5, false],
    [4, 2, 2, 6, true],
    [5, 2, 3, 8, false],
    [6, 2, 9, 30, true],
    [7, 3, 3, 10, true],
    [8, 3, 4, 12, true],
    [9, 4, 11, 32, false],
    [10, 4, 1, 14, true],
    [11, 4, 5, 16, true],
    [12, 5, 2, 18, false],
    [13, 5, 6, 20, true],
    [14, 6, 3, 22, true],
    [15, 6, 13, 34, true],
    [16, 7, 7, 25, false],
    [17, 7, 8, 28, true],
    [18, 7, 14, 36, false]
];
