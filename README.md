# 🎁 Práctica 6 – Recursión y Backtracking

## 📌 Descripción

En esta práctica se implementa una función recursiva para buscar un regalo específico dentro de una lista de regalos. Utilizamos **recursión** para recorrer la lista y determinar si el regalo está presente, y en qué posición. Si no se encuentra, se devuelve un mensaje informando que el regalo no está en la lista.

Esta práctica forma parte del entrenamiento con algoritmos básicos, utilizando el poder de la recursión para dividir problemas en partes más pequeñas y resolverlos eficientemente.

---

## 🎯 Objetivo

Aplicar el concepto de **recursión** para:

- Buscar un objeto en un arreglo.
- Devolver su posición si se encuentra.
- Notificar si no está en la lista.
- Detener la recursión cuando se llegue al caso base.

---

## 🧠 Lógica del algoritmo

1. Se define una función llamada `findGift`.
2. Esta función acepta tres parámetros: la lista de regalos, el nombre del regalo a buscar, y un índice (por defecto 0).
3. Se compara el regalo en la posición actual con el nombre buscado.
4. Si hay coincidencia, se retorna un mensaje indicando la posición.
5. Si el índice alcanza el final de la lista, se indica que no está en la lista.
6. Si no se encuentra, se llama recursivamente a la función aumentando el índice.

---

## 🧪 Ejemplo de uso

```javascript
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Resultado esperado: "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Resultado esperado: "Camión no está en la lista."
