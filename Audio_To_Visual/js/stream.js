window.onload = function(){
	var freqBinNumber = Math.pow(2,6),
freqBuffer    = new Float32Array(freqBinNumber);
	// set up for audio playback
try {
	window.AudioContext = window.AudioContext||window.webkitAudioContext;
	context = new AudioContext();
}

catch(e) {
	alert("Sorry, your browser doesn't support the magic of web audio \n try the latest firefox or chrome");
}

// set up for audio input
try {
	navigator.getUserMedia = navigator.webkitGetUserMedia
	navigator.webkitGetUserMedia({audio: true, video: false}, connectStream, microphoneError);
}
catch(e) {
	alert("Sorry, your browser doesn't support the magic of getUserMedia \n try the latest firefox or chrome");
}



analyser      = context.createAnalyser();

analyser.fftSize = freqBinNumber;
analyser.smoothingTimeConstant = 0;


hFreqScale = d3.scale.linear()
		.range([0,300])
		.domain([analyser.minDecibels,analyser.maxDecibels])


function connectStream(stream)
{
	var source = context.createMediaStreamSource(stream);
	source.connect(analyser);
	go();
}

function microphoneError(e) {
	alert('MicrophoneError error!', e);
};



data = []

for(var i = 0; i < freqBinNumber/6; i++) {
	c = new stream(i,freqBinNumber/6,hFreqScale(freqBuffer[i]))
	data.push(c)
  }


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
		.attr("stroke-width", 10)
		.attr("d",function(d){return(lineFunction(d.path))})
		.attr("fill","none")
		.attr("stroke-linecap","round")
		.attr("stroke",function(d){return(d.color)});

function go()
{


	analyser.getFloatFrequencyData(freqBuffer);
	
	for (var i = Math.floor(freqBinNumber/6) - 1; i >= 0; i--) {
		d = data[i]
		p = d.path
		l = p.length
		d.volume = hFreqScale(freqBuffer[i])
		v = randomVector(2)
		

		if (p[l-1].subtract(d.pin).magnitude() > d.volume)
		{
			p[l-1] = p[l-1].subtract(d.pin).norm().scale(d.volume-1).add(d.pin)
			// p[l-1] = d.pin
			// d.dpath = d.dpath.scale(-1)
		}

		// if (p[l-1].subtract(d.pin).magnitude() > 500)
		// {
		// 	p[l-1] = p[l-1].subtract(d.pin).norm().scale(40).add(d.pin)
		// 	d.dpath = d.dpath.scale(-1)
		// }

		d.dpath = d.dpath.add(v).norm().scale(d.volume/50)
		p.push(p[l-1].add(d.dpath))
		
		if (l >100)
		{
			p.shift()
		}

	};

	svg.selectAll("path")
		.attr("d",function(d){return(lineFunction(d.path))})

	window.requestAnimationFrame(go)
}


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
	this.pin = new vector([bin*width/numbins+50,height/2])
	this.path = [this.pin,this.pin]
	this.dpath = zeroVector(2)
	this.variance = width*height
	this.color = "rgba("+Math.floor(255*(1-bin/numbins))+",75,"+Math.floor(255*(bin/numbins))+",.8)"
}