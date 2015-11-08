exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return {
  		then: function(cb){
  			return (cb)(value);
  		}
  	};
  },

  manipulateRemoteData : function(url) {
  	return {
  		then: function(cb){
  			return (cb)(url);
  			console.log(result)
  			return result;
  		}
  	};
  }
};
