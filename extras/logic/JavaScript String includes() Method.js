var str = "Hello world, welcome to the universe.";
let asset = {};
let columnLength = 0;
asset.column1 = "column1";
asset.column2 = "column2";
asset.column3 = "column3";
asset.column4 = "column4";
asset.column5 = "column5";
asset.column6 = "column6";
asset.column7 = "column7";

console.log(asset);

if ("column1" in asset) {
  columnLength++;
}
if ("column2" in asset) {
  columnLength++;
}
if ("column3" in asset) {
  columnLength++;
}
if ("column4" in asset) {
  columnLength++;
}
if ("column5" in asset) {
  columnLength++;
}
if ("column6" in asset) {
  columnLength++;
}
if ("column7" in asset) {
  columnLength++;
}
if ("column8" in asset) {
  columnLength++;
}
if ("column9" in asset) {
  columnLength++;
}
if ("column10" in asset) {
  columnLength++;
}
console.log(columnLength);
