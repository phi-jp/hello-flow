/* @flow */

class Vector2 {
	x: number;
	y: number;

	set(x:number, y:number) {
		this.x = x;
		this.y = y;
	}

	log() {
		console.log(this.x + ',' + this.y);
	}
}

var v = new Vector2(1, 2);
v.set(0, 100);
v.log();