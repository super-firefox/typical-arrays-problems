
exports.min = function min (array) {
  if(array === undefined ||array.length === 0){
    return 0;
  }
 
  let min = 0;
  array.map(item => {
    if(item < min){
      min = item;
    }
  })
  
  return min;
}

exports.max = function max (array) {
  if(array === undefined ||array.length === 0){
    return 0;
  }

  let max = 0;
  array.map(item => {
    if(item > max){
      max = item;
    }
  })
  
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined ||array.length === 0){
    return 0;
  }

  return +(array.reduce((sum, item) => sum += item,0) / array.length).toFixed(2);
}
