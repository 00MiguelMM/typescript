import type { EstadoMatricula } from "./domain/types/estado-matricula";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

    case "SUSPENDIDA":
      return `Matrícula suspendida: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media ${estado.notaMedia}`;

    default: {
      const comprobacionExhaustiva: never = estado;
      throw new Error("Estado no manejado");
    }
  }
}