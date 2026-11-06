// Hito 2 · Consultas
//
// Al menos 6 funciones:
//   - filtrar por un criterio
//   - buscar por id
//   - ordenar por dos criterios
//   - comprobar una condición (some o every)
//   - totalizar con reduce
//   - obtener una lista sin repetidos
// Ninguna modifica las listas originales.
// Para leer un dato de una fila, usa tus constantes: libro[L_TITULO], no libro[1].
//
// Hito 3 · Map, Set y funciones avanzadas (también aquí)
//   - un índice Map id → fila que usen tus búsquedas
//   - una agrupación por categoría en un Map
//   - un Set de valores únicos
//   - un closure (por ejemplo, un generador de id)
//   - una función propia que reciba otra función como parámetro
//
// Cada función lleva su comentario JSDoc, por ejemplo:
//
// /**
//  * Devuelve los libros de un género.
//  * @param {Array[]} libros  Lista de libros (cada libro es una fila)
//  * @param {string} genero   Género buscado
//  * @returns {Array[]} Libros de ese género
//  */
// function librosDeGenero(libros, genero) {
//   return libros.filter((libro) => libro[L_GENERO] === genero);
// }

/**
 * Convierte un importe de texto en un número.
 * @param {string} texto Importe que queremos convertir
 * @returns {number} Importe convertido en número
 */
function aNumero(texto) {
    const limpio = String(texto).trim().replace(",", ".");
    const numero = Number(limpio);

    if (limpio === "" || Number.isNaN(numero)) {
        throw new Error("Importe no válido");
    }

    return numero;
}

/**
 * Busca una actividad por su identificador.
 * @param {number} id Identificador de la actividad
 * @returns {Array|undefined} Actividad encontrada o undefined
 */
function buscarActividad(id) {
    return actividades.find((actividad) => actividad[A_ID] === id);
}

/**
 * Busca una actividad por su identificador.
 * @param {number} id Identificador del socio
 * @returns {Array|undefined} Actividad encontrada o undefined
 */
function buscarSocio(id) {
    return socios.find((socio) => socio[S_ID] === id);
}

/**
 * Busca una actividad por su identificador.
 * @param {number} id Identificador de la inscripcion
 * @returns {Array|undefined} Actividad encontrada o undefined
 */
function buscarInscripcion(id) {
    return inscripciones.find((inscripcion) => inscripcion[I_ID] === id);
}

/**
 * Filtra las actividades que contienen el tipo buscado
 * @param {string} tipo Tipo de actividad(fuerza, baile, aventura...)
 * @returns  {Array|undefined} Array con las actividades que cumplen con el tipo buscado
 */
function filtrarActividad(tipo) {
    let filtradas = actividades.filter((actividad) => actividad[A_TIPO] === tipo);
    return filtradas;
}

/**
 * Devuelve las inscripciones que estan sin pagar
 * @returns  {Array|undefined} Array con las inscripciones que aun no se han pagado
 */
function filtarInscripcion() {
    let filtradas = inscripciones.filter((inscripcion) => inscripcion[I_PAGADA] === false);
    return filtradas;
}

/**
 * Ordena alfabéticamente el array primero por monitor y luego por el nombre
 * @returns {Array|undefined} Array ordenado 
 */
function actividadesOrdenadas() {
    return [...actividades].sort(
        (a, b) => a[A_MONITOR].localeCompare(b[A_MONITOR]) || a[A_NOMBRE].localeCompare(b[A_NOMBRE])
    );
}

/**
 * Comprueba si hay alguna actividad sin monitor asignado.
 * @returns {boolean} true si existe alguna actividad sin monitor, false si no
 */
function hayActividadSinMonitor() {
    return actividades.some((actividad) => actividad[A_MONITOR] === "");
}

/**
 * Devuelve una lista de monitores sin repetir, sin vacíos y ordenados.
 * @returns {Array} Lista de monitores
 */
function monitoresOrdenados() {
    let monitores = actividades.map((actividad) => actividad[A_MONITOR]);
    let sinVacios = monitores.filter((monitor) => monitor !== "");
    let sinRepetidos = sinVacios.filter((monitor, i) => sinVacios.indexOf(monitor) === i);

    return sinRepetidos.sort((a, b) => a.localeCompare(b));
}
