let pageCount = function (n, p) {
  let pageNeedsToTurnFromStart = 0, pageNeedsToTurnFromEnd = 0, turns = 0;
  pageNeedsToTurnFromStart = parseInt(p / 2)
  if (Number.isInteger(n/2)) {
    if(n !== p) {
      pageNeedsToTurnFromEnd = (n - p) / 2
      if(!Number.isInteger(pageNeedsToTurnFromEnd)) {
        pageNeedsToTurnFromEnd = 0.5 + pageNeedsToTurnFromEnd
      }
    }
  } else {
    pageNeedsToTurnFromEnd = parseInt((n - p) / 2)
  }
  turns = pageNeedsToTurnFromEnd > pageNeedsToTurnFromStart ? pageNeedsToTurnFromStart : pageNeedsToTurnFromEnd;
  return turns;
}

console.log(pageCount(10, 12));
