// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj + '';
  } else if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return 'undefined';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var strArr = [];
    _.each(obj, (item)=>{
      if (typeof item !== 'function' && item !== undefined) {
        strArr.push(stringifyJSON(item));
      }
      
    });
    return '[' + strArr.join(',') + ']';
  } else {
    var strArr = [];
    _.each(obj, (item, i)=>{
      if (typeof item !== 'function' && item !== undefined) {
        strArr.push(stringifyJSON(i) + ':' + stringifyJSON(item));

      }
    });
    return '{' + strArr.join(',') + '}';
  }
  
};
