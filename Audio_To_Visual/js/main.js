window.onload = function(){
var w = window.innerWidth,
	h = window.innerHeight,
	canvas = document.getElementById('myCanvas');
	canvasCtx = canvas.getContext('2d'),
	freqBinNumber = Math.pow(2,7),
	freqBuffer    = new Float32Array(freqBinNumber),
	visableBins = Math.floor(freqBinNumber),
	frequencyCircles = [];

canvas.width  = w;
canvas.height = h;

for(var i = 0; i < visableBins; i++) {
	c = new frequencyCircle(i,visableBins,volumeScale(freqBuffer[i]))
	frequencyCircles.push(c)
	}

// set up for audio input
// try {
// 	navigator.getUserMedia = navigator.webkitGetUserMedia
// 	navigator.webkitGetUserMedia({audio: true, video: false}, connectStream, microphoneError);
// }
// catch(e) {
// 	alert("Sorry, your browser doesn't support the magic of getUserMedia \n try the latest firefox or chrome");
// }

function connectStream(stream)
{
	var source = context.createMediaStreamSource(stream);
	source.connect(analyser);
}

function microphoneError(e) {
	alert('MicrophoneError error!', e);
};


function render(c,i,array)
{
	p = c.position
	c.volume = volumeScale(freqBuffer[i])
	if (p.magnitude()<c.volume)
	{
		c.randomKick(10000)
	}
	else
	{
		c.radialKick(-Math.pow(c.position.magnitude(),2.3))
	}
	c.updatePosition()
	// c.draw(canvasCtx)

	p = c.origin
	canvasCtx.beginPath();
	canvasCtx.arc(p.x, p.y+Math.max(0,c.volume)*10, Math.max(0,c.volume), 0, 2 * Math.PI, false);
	canvasCtx.fillStyle = "rgba(0,0,0,.1)";
	canvasCtx.fill();
}

function springForce(r,k)
{ 
	m = 1
	a = r.scale(-k/m)
	return(a)
}

function repulsion(r,k)
{ 
	m = 1

	rsq = Math.pow(r.magnitude(),2)
	a = r.scale(k*m/rsq)
	return(a)
}

function go(){
	canvas.height = h;
	analyser.getFloatFrequencyData(freqBuffer);
	frequencyCircles.forEach(render)
	window.requestAnimationFrame(go)
}




var audio = new Audio();
var audio1 = new Audio();
audio.src = "http://www.bachorgan.com/DanLong/Toccata__Fugue_in_D_Mi.mp3";
audio1.src = 'http://webaudioapi.com/samples/visualizer/chrono.mp3';
audio.controls = true;
audio.playbackRate = 1
audio.autoplay = false;
audio1.controls = true;
audio1.autoplay = false;
document.getElementById('bob').appendChild(audio);
document.getElementById('bob').appendChild(audio1);

var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  var source1 = context.createMediaElementSource(audio1);
  source1.connect(analyser);











go()



}