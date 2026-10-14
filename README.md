# Laboratorio Semana 9 - Sesion 1
## JavaScript: tipos, operadores y estructura de un programa

Este repositorio contiene la resolucion de la guia practica de laboratorio correspondiente a la Semana 9 (Unidad 3), orientada al aprendizaje de los fundamentos de JavaScript en el navegador web, manipulacion del DOM (Document Object Model), manejo de eventos y conversion de tipos de datos.

---

## 1. Analisis de la guia de practica

La guia solicita construir una aplicacion web interactiva conformada por dos partes principales:

1. **Interaccion con datos personales y eventos de teclado:**
   - Un campo de texto para ingresar el nombre de usuario y un boton que ejecuta la funcion `muestra()`, desplegando una alerta con el texto ingresado.
   - Un campo de tipo contrasena (`password`) que, mediante el evento `onkeyup`, invoca a la funcion `pasa()` para transferir en tiempo real lo que el usuario escribe hacia un campo visible (`text`).

2. **Calculadora del area de un triangulo:**
   - Elementos `<input>` para ingresar la base y la altura.
   - Un boton que ejecuta la funcion `calcularArea()`.
   - Conversion de las entradas (que llegan originalmente como texto) a valores numericos decimales mediante `parseFloat()`.
   - Aplicacion de la formula geometrica: `Area = 0.5 * base * altura`.
   - Modificacion dinamica del DOM para mostrar el resultado en la etiqueta `<p id="resultado">` empleando la propiedad `textContent`, complementado con una notificacion mediante `alert()`.

3. **Recomendacion de estilos (Seccion VII de la guia):**
   - La guia recomienda incorporar estilos para una presentacion adecuada, aplicando variables CSS y selectores basados en la documentacion de Mozilla Developer Network (MDN).

---

## 2. Estructura del proyecto

El codigo se encuentra organizado de forma modular y limpia:

```text
14_10/
├── index.html        # Archivo HTML principal de la aplicacion
├── js91.html         # Archivo solicitado con el nombre exacto de la guia
├── css/
│   └── styles.css    # Hoja de estilos con variables CSS y diseno responsivo
├── js/
│   └── app.js        # Logica en JavaScript con funciones comentadas
└── README.md         # Documentacion y guia de instalacion local
```

Tanto `index.html` como `js91.html` poseen la misma funcionalidad para facilitar cualquier criterio de revision o despliegue.

---

## 3. Explicacion tecnica del codigo

### A. Funcion muestra(txtNombre)
Toma el valor del campo donde el usuario escribio su nombre. Si el campo contiene texto, despliega una alerta con el mensaje `"Eres " + nombre`. Tambien incluye una verificacion amigable si el usuario presiona el boton con el campo vacio.

### B. Funcion pasa(txtSecreto, txtNormal)
Se ejecuta cada vez que el usuario suelta una tecla en el campo de clave (`onkeyup`). Obtiene el valor actual del campo oculto y lo asigna directamente a la propiedad `.value` del campo visible, demostrando la lectura y escritura dinamica de propiedades de elementos HTML.

### C. Funcion calcularArea()
Cumple con el flujo conceptual explicado en los fundamentos teoricos de la guia:
- **Lectura:** Obtiene los elementos con `document.getElementById("base")` y `document.getElementById("altura")`.
- **Parseo:** Transforma el texto de los inputs a numeros flotantes con `parseFloat()`.
- **Validacion:** Comprueba que no se hayan ingresado letras o campos vacios (`isNaN`), y que los valores sean mayores a cero.
- **Calculo:** Aplica la expresion matematica `var area = 0.5 * base * altura;`.
- **Actualizacion del DOM:** Modifica el texto del parrafo de salida mediante `document.getElementById("resultado").textContent = "El area del triangulo es: " + area;`.
- **Alerta:** Lanza el aviso emergente `alert("El area es " + area);` tal como lo requiere la consigna.

---

## 4. Como descargar y ejecutar el proyecto en tu computadora local

Para abrir y probar este proyecto en tu maquina no requieres instalar frameworks ni configuraciones complejas; unicamente necesitas un navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave, etc.).

### Metodo 1: Abrir directamente en el navegador (el mas rapido)

1. Descarga la carpeta del proyecto a tu computadora o clona el repositorio.
2. Abre la carpeta del proyecto en el Explorador de Archivos de tu sistema operativo.
3. Haz doble clic sobre el archivo `index.html` o `js91.html`.
4. El archivo se abrira de inmediato en tu navegador predeterminado y podras interactuar con todos los componentes.

### Metodo 2: Usando Visual Studio Code con Live Server (recomendado para desarrollo)

1. Abre Visual Studio Code.
2. Ve al menu **Archivo > Abrir carpeta...** y selecciona la carpeta del proyecto.
3. Si tienes la extension **Live Server** instalada (de Ritwick Dey):
   - Haz clic derecho sobre el archivo `index.html`.
   - Selecciona **Open with Live Server**.
4. Se levantara un servidor local en una direccion como `http://127.0.0.1:5500/index.html` con recarga automatica ante cualquier cambio.

### Metodo 3: Usando la terminal (servidor local rapido)

Si tienes Python instalado:
```bash
# Python 3
python -m http.server 8000
```
Luego abre tu navegador y visita:
`http://localhost:8000`

Si tienes Node.js instalado:
```bash
npx serve .
```

---

## 5. Preguntas frecuentes y soluciones

- **Por que no se visualiza el resultado de la calculadora?**
  Asegurate de escribir solo numeros en los campos de base y altura. Si usas decimales, utiliza el punto (`.`) en lugar de la coma (`,`), por ejemplo: `12.5`.

- **Por que la alerta se dispara dos veces o se bloquea?**
  Algunos navegadores muestran una casilla de verificacion para "No permitir mas cuadros de dialogo". Si la marcas por error, las funciones `alert()` dejaran de mostrarse temporalmente hasta que recargues la pestana. Aun asi, el resultado siempre se mostrara de forma visible dentro de la pagina gracias a la manipulacion del DOM.

- **Cumple con los requisitos de entrega de la guia?**
  Si. Incluye el archivo nombrado `js91.html`, las tres funciones requeridas, el uso de `parseFloat()`, la formula de area, la manipulacion de `textContent` y los estilos CSS sugeridos en las recomendaciones finales.
