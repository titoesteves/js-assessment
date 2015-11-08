exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr)
  },

  speak : function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction : function(str) {
    return function(str2){
      return str + ", " + str2 ;
    }
  },

  makeClosures : function(arr, fn) {
    var result = [];
    var makeFn = function(val){
      return function(){
        return fn(val);
      };
    };
    arr.forEach(function(item, index){
      result.push(makeFn(item));
    });
    return result;
  },

  partial : function(fn, str1, str2) {
    return function(str){
      return fn.call(null, str1, str2, str)
    };
  },

  useArguments : function() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
      sum += arguments[i]
    }
    return sum
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
     fn.apply(null, args)
  },

  partialUsingArguments : function(fn) {
    var prevArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function(){
      var args = Array.prototype.slice.call(arguments);
      return fn.apply(null, prevArgs.concat(args))
    };
  },

  curryIt : function(fn) {
    function applyArguments(fn, arguments) {
          return fn.apply(null, arguments);
        }

        function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
          return function (currentArgument) {
            accumulatedArguments.push(currentArgument);

            var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

            if (allArgumentsProvided) {
              return applyArguments(fn, accumulatedArguments);
            } else {
              return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
            }
          };
        }

        return getArgumentAccumulator([], fn.length);
  }
};
