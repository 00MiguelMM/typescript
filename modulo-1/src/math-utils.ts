export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const suma = datos.reduce((acc, n) => acc + n, 0);
  return suma / datos.length;
}