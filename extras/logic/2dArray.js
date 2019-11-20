let gfg = [];
var h = 0;
var s = "GeeksforGeeksGeeksforGeeksGeeksforGeeksGeeksforGeeksGeeksforGeeks";

for (var i = 0; i < 6; i++) {
  gfg[i] = [];
}

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    gfg[i][j] = s[h++];
  }
}
console.log(gfg)
