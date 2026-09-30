WEB DE RAI ♡ — VERSIÓN CON VIAJES

Esta versión mantiene la web original y añade una sección completa de viajes.

ESTRUCTURA:
- index.html
- style.css
- script.js
- viajes/roma/
- viajes/paris/
- viajes/proximo-destino/

COMO AÑADIR FOTOS A ROMA:
1. Mete tus fotos dentro de viajes/roma/.
2. En index.html busca los cuatro botones "Foto 01", "Foto 02", etc.
3. Sustituye cada botón placeholder por este formato:

<button class="travel-photo" type="button" onclick="openTravelPhoto(this)">
  <img src="viajes/roma/roma-01.jpg" alt="Roma 01">
</button>

Puedes repetirlo para todas las fotos que quieras.

PARÍS:
Haz lo mismo dentro de viajes/paris/ y usa rutas como:
viajes/paris/paris-01.jpg

NUEVOS VIAJES:
Duplica uno de los bloques <article class="travel-card"> de la sección "Nuestros viajes" y cambia:
- nombre del destino
- país
- descripción
- carpeta de fotos

Las fotos se abren en grande al pulsarlas y se pueden cerrar con la X o con Escape.
