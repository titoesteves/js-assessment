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
  	var dfd = $.Deferred();

  	    $.ajax(url).then(function(resp) {
  	      var people = $.map(resp.people, function(person) {
  	        return person.name;
  	      });
  	      dfd.resolve(people.sort());
  	    });

  	    return dfd.promise();
  }
};
