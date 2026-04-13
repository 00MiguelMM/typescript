export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const suma = datos.reduce((acc, n) => acc + n, 0);
  return suma / datos.length;
}

export function calcularMediana(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const ordenados = [...datos].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  } else {
    return ordenados[mitad];
  }
}