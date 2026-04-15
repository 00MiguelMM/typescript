# Modelo de Datos

## Interfaces

He utilizado interfaces para definir la estructura de los objetos del sistema, como Estudiante, Asignatura, MatriculaActiva, MatriculaSuspendida y MatriculaFinalizada.

Gracias a estas interfaces puedo describir qué propiedades tiene cada objeto, facilitando la detección de errores y mejorando la organización del código.

## Type (Unión Discriminada)

He utilizado un type para definir EstadoMatricula como una unión de varios estados posibles: activa, suspendida y finalizada.

Esto permite representar de forma segura los distintos estados de una matrícula y trabajar con ellos de manera controlada.

## Genéricos

He utilizado un tipo genérico en RespuestaAPI<T> para crear una estructura reutilizable que puede adaptarse a distintos tipos de datos. En otras palabras, he hecho una plantilla reutilizable para respuestas de datos, que puede utilizarse en diferentes casos sin necesidad de repetir código.

Esto permite reutilizar código manteniendo el tipado estricto.