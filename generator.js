/**

	@author -> @kazimanilaydin | ka20x 

*/

var generator = {

	/* 

		(**random incremental) basic incremental integer generator
		> example results 
			
			getInc() ->  1462600943463235985
			getInc() ->  1462600944990934021
			getInc() ->  1462600945673219436

	*/

	getInc: function(){
		return Date.now() + Math.floor(Math.random() * 100000).toString();
	},

	/* 
    	
    	random string generator 
    	> example results 
			
			getString(4) -> fKej
    		getString(8) -> hTyESdxC
    		getString(16) -> alsFtOPcVbMqvSwZ

    */

    getString: function(t){

		var list = "qwertyopasdfghjklizxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

		var len = list.length;

		var str = "";

		for (var i=0; i<t; i++) {
			var r = Math.floor(Math.random() * len);

			str += list[r];
		};

		return str;
    },

    /* 
    	
    	random integer generator 
    	> example results 
			
			getInt(4) -> 2173
    		getInt(8) -> 13532739
    		getInt(16) -> 4572870312563432

    */

    getInt: function(t){

		var list = "0123456789";

		var len = list.length;

		var num = "";

		for (var i=0; i<t; i++) {
			var r = Math.floor(Math.random() * len);

			num += list[r];
		};

		return num;
    },

    /* 
    	
    	random hash generator 
    	> example results 
			
			getInt

			getHash(4) -> fY6@
    		getHash(8) -> ?sO4Upd4
    		getHash(16) -> f5_bxW.2lTuZpq4C

    */

    getHash:function(t){

    	var list = "qwertyopasdfghjklizxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    	var padding = "_?&$.!@";

    	var strings = list + padding;

		var len = strings.length;

		var hash = "";

		for (var i=0; i<t; i++) {
			var r = Math.floor(Math.random() * len);

			hash += strings[r];
		};

		return hash;
    }
};

module.exports = generator;