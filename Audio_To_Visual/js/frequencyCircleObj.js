// transforms a val in domain to the corosponding value in range
function linearScale(domain,range){
	// domain and range are objects with min and max
	scale = function(val){
		var unitScaled = (val-domain.min)/(domain.max-domain.min),
			scaled     = unitScaled*range.max+range.min
		return(scaled)
	}
	return(scale)
}

// creates a scale that takes in analyser frequency volume and scales it to the screen height
var volumeScale = new linearScale({min:analyser.minDecibels*1.01,max:analyser.maxDecibels+10},{min:0,max:20});

function frequencyCircle(bindex,numbins,volume) {
	dt = .005
	var volume = volumeScale(volume),
		w = window.innerWidth,
		h = window.innerHeight;
         
	this.acceleration = zeroVector(2);
	this.position 	  = randomVector(2).scale(5);
	this.velocity     = zeroVector(2);
	this.origin   	  = new vector([bindex*(w-100)/numbins+50,h/2]),
	this.radius       = 2,
	this.color        = "rgba(" + Math.floor(255*(bindex/numbins))+",75,"+Math.floor(255*(1-bindex/numbins))+",.8)";

	this.getAbsolutePosition = function(){return(this.position.add(this.origin))};
	this.randomKick = function(magnitude){this.acceleration = randomVector(2).scale(magnitude)}
	this.radialKick = function(magnitude){this.acceleration = this.position.scale(magnitude).add(randomVector(2).scale(10))}
	this.draw = function(ctx)
		{
			var p = this.getAbsolutePosition();
			ctx.beginPath();
			ctx.arc(p.x, p.y, this.radius, 0, 2 * Math.PI, false);
			ctx.fillStyle = this.color;
			ctx.fill();
		}
	this.updatePosition = function()
		{
			this.velocity = this.velocity.add(this.acceleration.scale(dt))
			this.position = this.position.add(this.velocity.scale(dt))
		}
}