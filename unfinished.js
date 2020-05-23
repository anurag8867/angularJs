let a = {
    a: 'a',
    b: 'b',
    c: {
        a: this.a.bind(a).a
    }
};

console.log(a)