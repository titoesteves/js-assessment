exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    arr.forEach(function(element, index, arr){
      if(element === item){
        arr.splice(index, 2);
      }
    });   
    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    return arr.slice(0, arr.length - 1);
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var result = [];
    arr1.forEach(function(value, index){
      result.push(value);
    });
    arr2.forEach(function(value){
      result.push(value)
    });
    return result;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(value){
      if(value === item){
        count++
      }
    });
    return count
  },

  duplicates : function(arr) {
    // console.log(arr)
    var result = []
    var obj = {}
    arr.forEach(function(item){
      if(obj[item] !== undefined){
        obj[item] = obj[item] + 1;
      }else {
        obj[item] = 1
      }
    });
    for(var prop in obj){
      if(obj[prop] > 1){
        result.push(parseInt(prop))
      }
    }
    return result.sort()
  },

  square : function(arr) {
    arr.forEach(function(item, index, arr){
      arr[index] = item * item
    });
    return arr;
  },

  findAllOccurrences : function(arr, target) {
     var result = [];
     arr.forEach(function(value,index){
      if(value === target){
        result.push(index)
      }
     });
     return result
  }
};
