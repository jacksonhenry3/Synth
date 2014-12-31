// transforms a val in domain to the corosponding value in range
function linearScale(domain,range){
	// domain and range are objects with min and max
	//10-100
	// 0-1
	// y = 90*x**2+10
	scale = function(val){
		var unitScaled = (val-domain.min)/(domain.max-domain.min),
			unitScaled =  Math.max(0,unitScaled),
			unitScaled = Math.pow(unitScaled,4)
			scaled     = unitScaled*range.max+range.min
		return(Math.max(0,scaled))
	}
	return(scale)
}

// creates a scale that takes in analyser frequency volume and scales it to the screen height
var volumeScale = new linearScale({min:analyser.minDecibels*1.01,max:analyser.maxDecibels+10},{min:0,max:window.innerHeight/2});

function drawPath(r,i,array)
{
	
}

function frequencyCircle(bindex,numbins,volume) {
	dt = .01
	var volume = volumeScale(volume),
		w = window.innerWidth,
		h = window.innerHeight;
         
	this.acceleration = zeroVector(2);
	this.position 	  = randomVector(2).scale(5);
	this.posHist      = []
	this.velocity     = zeroVector(2);
	this.origin   	  = new vector([bindex*(w-100)/numbins+50,h/2]),
	this.radius       = 2,
	this.color        = "rgba(" + Math.floor(255*(bindex/numbins))+",75,"+Math.floor(255*(1-bindex/numbins))+",.3)";

	this.getAbsolutePosition = function(){return(this.position.add(this.origin))};
	this.randomKick = function(magnitude){this.acceleration = randomVector(2).scale(magnitude)}
	this.radialKick = function(magnitude){this.acceleration = this.position.scale(magnitude).add(randomVector(2).scale(10))}
	this.draw = function(ctx)
		{
			var p = this.getAbsolutePosition();
			ctx.beginPath();

			// ctx.beginPath();
			// to draw a circle at positionm
			// ctx.arc(p.x, p.y, this.radius, 0, 2 * Math.PI, false);
			// ctx.fillStyle = this.color;
			// ctx.fill();
			// to draw a path consisting of last 100 positions
			// ctx.moveTo(p.x, p.y);
			// for (var i = this.posHist.length - 1; i >= 0; i--) {
			// 	r = this.posHist[i]
			// 	ctx.lineTo(r.x, r.y);
			// };
			// ctx.strokeStyle = this.color
			// ctx.lineWidth = 4;
			// ctx.lineCap = 'round';
			// ctx.stroke();

		}
	this.updatePosition = function()
		{
			this.posHist.push(this.getAbsolutePosition())
			if (this.posHist.length>50)
			{
				this.posHist.shift()
			}
			this.velocity = this.velocity.add(this.acceleration.scale(dt))
			this.position = this.position.add(this.velocity.scale(dt))
			if (this.velocity.magnitude()>500)
			{
				this.velocity = this.velocity.norm().scale(450)
			}
		}
}