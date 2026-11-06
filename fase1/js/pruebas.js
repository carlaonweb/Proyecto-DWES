// Pruebas de tu proyecto. Se ven al abrir pruebas.html.
//
// Funciones que tienes (están en mini-pruebas.js):
//   prueba(nombre, fn)               define una prueba
//   igual(obtenido, esperado)        números, textos, arrays, Map y Set
//   casiIgual(obtenido, esperado)    decimales (2 por defecto)
//   lanzaError(fn, mensaje)          comprueba que se lanza un error con ese mensaje
//
// Ejemplos (cámbialos por los de tu proyecto):
//
// prueba("buscarPorId devuelve el libro 3", () => {
//   igual(buscarPorId(3)[L_TITULO], "Niebla");
// });
//
// prueba("los géneros salen sin repetir", () => {
//   igual(generos(libros), new Set(["poesía", "novela"]));
// });
//
// prueba("prestar falla si el socio no existe", () => {
//   lanzaError(() => prestar(99, 1), "Socio no encontrado");
// });
//
// Necesitas 10 pruebas o más, 2 de ellas de tu regla personal.

// Borra esta prueba cuando escribas la primera tuya.

prueba("aNumero convierte un importe con decimales", () => {
    igual(aNumero("38,50"), 38.5);
});

prueba("buscarActividad encuentra la actividad con id 3", () => {
    igual(buscarActividad(3)[A_NOMBRE], "Bádminton");
});

prueba("buscarSocio encuentra el socio con id 2", () => {
    igual(buscarSocio(2)[S_NOMBRE], "Lorena Valero");
});

prueba("buscarInscripcion encuentra la inscripción con id 15", () => {
    igual(buscarInscripcion(15)[I_ACTIVIDAD], 13);
});

prueba("aNumero convierte un importe sin decimales", () => {
    igual(aNumero("29"), 29);
});

prueba("filtrarActividad devuelve las actividades de bienestar", () => {
    igual(filtrarActividad("bienestar").length, 3);
});

prueba("filtrarInscripcion devuelve las actividades que no están pagadas", () => {
    igual(filtarInscripcion().length, 6)
});

prueba("actividadesOrdenadas ordena por monitor y después por actividad", () => {
    igual(
        actividadesOrdenadas().map((actividad) => [actividad[A_MONITOR], actividad[A_NOMBRE]]),
        [
            ["", "Movilidad y espalda"],
            ["Álvaro Núñez", "Bádminton"],
            ["Álvaro Núñez", "Tenis de mesa"],
            ["Diego Ramos", "Circuito de fuerza"],
            ["Diego Ramos", "Cross training"],
            ["Diego Ramos", "Entrenamiento funcional"],
            ["Héctor Gil", "Técnica de carrera"],
            ["Lucía Martín", "Pilates máquinas"],
            ["Lucía Martín", "Pilates suelo"],
            ["Marta Díaz", "Escalada indoor"],
            ["Noelia Sanz", "Pádel avanzado"],
            ["Paula León", "Danza urbana"],
            ["Paula León", "Zumba"],
            ["Sergio Peña", "Iniciación al senderismo"],
            ["Sergio Peña", "Orientación deportiva"]
        ]
    );
});

prueba("hayActividadSinMonitor devuelve true si existe alguna actividad sin monitor", () => {
    igual(hayActividadSinMonitor(), true);
});

prueba("monitoresOrdenados devuelve los monitores sin repetir y ordenados", () => {
    igual(monitoresOrdenados(), [
        "Álvaro Núñez",
        "Diego Ramos",
        "Héctor Gil",
        "Lucía Martín",
        "Marta Díaz",
        "Noelia Sanz",
        "Paula León",
        "Sergio Peña"
    ]);
});

console.log(monitoresOrdenados());


