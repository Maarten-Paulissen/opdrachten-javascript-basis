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