function bf(a, b) {
  console.log(this.first + a + b);
}

a = {"first": 5};

a = bf.bind(a);

a(1, 2);
