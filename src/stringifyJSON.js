// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return;
  } else if (Array.isArray(obj)) {
    for (var i = 0, len = obj.length; i < len; i++) {
      result.push(stringifyJSON(obj[i]));
    }

    return '[' + result.join(',') + ']';
  } else if (typeof obj === 'object') {
    if (!obj) {
      return "null";
    } else {
      for (var key in obj) {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
          // do nothing
        } else {
          result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }

      return '{' + result.join(',') + '}';
    }
  } else {
    if (typeof obj === 'string') {
      obj = '\"' + obj + '\"';
    }

    return obj.toString();
  }
};
