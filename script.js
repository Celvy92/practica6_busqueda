const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final y no se encontró
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: Si encontramos el regalo
    if (gifts[index].toLowerCase() === giftName.toLowerCase()) {
        return `${giftName} está en la posición ${index + 1}.`;
    }

    // Llamada recursiva
    return findGift(gifts, giftName, index + 1);
}

function buscar() {
    const input = document.getElementById("giftInput").value.trim();
    const resultado = document.getElementById("resultado");

    if (input === "") {
        resultado.textContent = "Por favor escribe un nombre de regalo.";
        return;
    }

    const mensaje = findGift(gifts, input);
    resultado.textContent = mensaje;
}
