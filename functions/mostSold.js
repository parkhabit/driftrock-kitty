const mostSold = sales => {
  //map over and make a duplicate
  var items = [];
  sales.map(sale => {
    items.push(sale.item);
  });
  //give key value pair with number of times occurring
  let itemAndTally = {};
  for (var i = 0; i < items.length; i++) {
    if (!itemAndTally[items[i]]) {
      itemAndTally[items[i]] = 1;
    } else {
      itemAndTally[items[i]]++;
    }
  }
  //find item which occurs the most amount of times
  let topSeller = Object.keys(itemAndTally).reduce(function(a, b) {
    return itemAndTally[a] > itemAndTally[b] ? a : b;
  });
  console.log(topSeller);
  return topSeller;
};

module.exports = mostSold;
