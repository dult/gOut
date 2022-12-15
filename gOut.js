/* The Glitch Out effect library
 * Hack your webpage!
 * By DuLt Nuno Pinto
 */

let gOut = {
	active: false,
	fx: 120,
	max: 20,
	duration: [100, 1000],
	interval: [100, 200],
	classes: [],
	target: 'body *',
	classesFill: function() {			
		for ( let c = 0; c < gOut.fx; c++ ) {
			let c2 = c + 1;
			gOut.classes[c] = 'gOut-' + c2;
		}
	},
	start: function() {
		gOut.active = true;
		gOut.classesFill();
		gOut.loop();
	},
	stop: function() {
		gOut.active = false;
	},
	toggle: function() {
		let state = gOut.active;
		if ( state ) {
			gOut.active = false;
		} else {
			gOut.start();
		}
	},
	random: function( from, to ) {
		let ammount = to - from;
		let random = Math.round( Math.random() * ammount + from );
		return random;
	},
	loop: function() {
		if ( gOut.active === true ) {
			let all = document.querySelectorAll(gOut.target);
			let total = all.length;
			let volunteer = gOut.random( 0, total - 1 );
			let pick = all[volunteer];
			let fx = gOut.classes;

			fx = fx.sort(function() {
				return Math.random() - 0.5;
			});
			fx = fx.slice( 0, gOut.random(1, gOut.max) );
			
			let duration = gOut.random( gOut.duration[0], gOut.duration[1]);
			let interval = gOut.random( gOut.interval[0], gOut.interval[1]);
			pick.classList.add( ...fx );
			setTimeout(function() {
				pick.classList.remove( ...fx );
			}, duration );
			
			setTimeout(function() {
				gOut.loop();
			}, interval );
		}
	}
}
