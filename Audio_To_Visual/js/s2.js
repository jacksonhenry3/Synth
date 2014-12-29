window.onload = function(){

data = []
for (var i = Math.pow(2,5)- 1; i >= 0; i--) {
	c = new stream(i,Math.pow(2,5),Math.random())
	data.push(c)
};

var w      = window.innerWidth,
	h      = window.innerHeight;
	canvas = d3.select("#canvas"), 
	svg    = canvas.append("svg:svg");

svg.attr("width", w)
   .attr("height", h)
   .attr('id','space')
   .style("background-color", '#EEE')

svg.selectAll("path")
		.data(data)
		.enter()
		.append("path")
		.attr("stroke-width", 2)
		.attr("d",function(d){return(lineFunction(d.path))})
		.attr("fill","none")
		.attr("stroke-linecap","round")
		.attr("stroke",function(d){return(d.color)});


function go()
{
	for (var i = data.length - 1; i >= 0; i--) {
		d = data[i]
		p = d.path
		l = p.length
		v = randomVector(2).scale(1)
		d.dpath = d.dpath.add(v)
		if (p[l-1].subtract(d.pin).magnitude()>100)
		{
			d.dpath = d.dpath.scale(-1)
		}
		p.push(p[l-1].add(d.dpath))
		if (l >50)
		{
			p.shift()
		}

	};

	svg.selectAll("path")
		// .transition()
		.attr("d",function(d){return(lineFunction(d.path))})

	window.requestAnimationFrame(go)
}

go()


}
var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; })
                          .interpolate("basis");



function stream (bin,numbins,volume) {
	// volume between 0 and 1
	//parameters should be
	/* allowed variance from starting position
	*/
	this.volume = volume
	this.radius = (window.innerWidth-100)/numbins
	width = window.innerWidth-100
	height = window.innerHeight
	this.pin = new vector([bin*width/numbins+0,height/2+this.radius/2])
	this.path = [this.pin,this.pin]
	this.dpath = zeroVector(2)
	this.variance = width*height
	this.color = "rgba("+Math.floor(255*(1-bin/numbins))+",75,"+Math.floor(255*(bin/numbins))+",.8)"
}