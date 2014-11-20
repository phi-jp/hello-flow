/* @flow */

function Vector2(){"use strict";}
	          
	          

	Vector2.prototype.set=function(x       , y)        {"use strict";
		this.x = x;
		this.y = y;
	};

	Vector2.prototype.log=function() {"use strict";
		console.log(this.x + ',' + this.y);
	};


var v = new Vector2(1, 2);
v.set(0, 100);
v.log();