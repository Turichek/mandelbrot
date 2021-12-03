export const complex = (x, y) => {
    return {
        x,
        y,
    }
}

export const abs = (number) => {
    return Math.hypot(number.x, number.y);
};

export const add = (a, b) => {
    a.x += b.x;
    a.y += b.y;
};

export const square = (number) => {
    const x = number.x;
    const y = number.y;
    number.x = Math.pow(x, 2) - Math.pow(y, 2);
    number.y = 2 * x * y;
};