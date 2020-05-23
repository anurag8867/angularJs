function getLetter(s) {
    let letter = s[0], a = { 'a': 'a', 'e': 'e', 'i': 'i', o: 'o', 'u': 'u' }, b = { b: 'b', c: 'c', d: 'd', f: 'f', g: 'g' },
        jump = "", c = { h: 'h', j: 'j', k: 'k', l: 'l', m: 'm' }, d = { n: 'n', p: 'p', q: 'q', r: 'r', s: 's', t: 't', v: 'v', w: 'w', x: 'x', y: 'y', z: 'z' };
    switch (letter) {
        case a[letter]: return 'A';
        case b[letter]: return 'B';
        case c[letter]: return 'C';
        case d[letter]: return 'D';
    }
    return letter;
}

console.log(getLetter("adg"));