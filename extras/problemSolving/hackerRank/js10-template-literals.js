function sides(literals, ...expressions) {
    let p = expressions[1], a = expressions[0];
    let s1 = 0, s2 = 0;
    let underroot = Math.sqrt(p * p - 16 * a);
    s1 = (p - underroot) / 4;
    s2 = (p + underroot) / 4;
    return s1 > s2 ? [s2, s1] : [s1, s2];
}

function side(literals, ...expressions) {
    let p = 48, a = 140;
    let s1 = 0, s2 = 0;
    let underroot = parseFloat(Math.sqrt(p * p - 16 * a));
    s1 = (p - underroot) / 4;
    s2 = (p + underroot) / 4;
    return s1 > s2 ? [s2, s1] : [s1, s2];
}

console.log(side())