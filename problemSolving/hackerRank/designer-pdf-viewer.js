function designerPdfViewer(h, word) {
  let area = [];
for (let index = 0; index < word.length; index++) {
  let inde = word[index].charCodeAt(0)-97;
  area.push(h[inde]);
}
area.sort();
return area.pop() * word.length;
}
console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7], 'zaba'))
