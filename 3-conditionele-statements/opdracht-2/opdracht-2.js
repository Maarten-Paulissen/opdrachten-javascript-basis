/*1) Schrijf een functie genaamd maximum.
2) De functie accepteert drie parameters, a, b en c.
3) De functie geeft het grootste getal van de drie terug.
4) Test de functie met de getallen 10, 20 en 15.*/

function maximum(a, b, c) {
    if (a > b) {
        return a
    }
    else if (b > a) {
        return b
    }
    else if (a > c) {
        return a
    }
    else if (a < c) {
        return c
    }
    else if (b > c) {
        return b
    }
    else (b < c)
    return c
}

console.log(function.maximum(1, 2, 3))