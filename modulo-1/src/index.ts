import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils.ts";
const datos = [1, 2, 3, 4, 100];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Filtrados:", filtrarAtipicos(datos, 10));