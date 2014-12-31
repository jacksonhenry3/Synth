window.onload = function(){
var w = window.innerWidth,
	h = window.innerHeight,
	canvas = document.getElementById('myCanvas');
	canvasCtx = canvas.getContext('2d'),
	freqBinNumber = Math.pow(2,11),
	timeBuffer    = new Uint8Array(freqBinNumber),
	freqBuffer    = new Float32Array(freqBinNumber),
	visableBins = Math.floor(freqBinNumber/25),
	frequencyCircles = [];

canvas.width  = w;
canvas.height = h;

for(var i = 0; i < visableBins; i++) {
	c = new frequencyCircle(i,visableBins,volumeScale(freqBuffer[i]))
	frequencyCircles.push(c)
	}


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
	c.volume = Math.max(0,volumeScale(freqBuffer[i]))
	// if (c.volume>15)
	// {
	// 	c.randomKick(10000)
	// }
	// else
	// {
	// 	c.radialKick(-Math.pow(c.position.magnitude(),2.3))
	// }
	c.randomKick(1000)
	c.acceleration = c.acceleration.add(springForce(p,100/(c.volume+1)))
	c.updatePosition()
	c.draw(canvasCtx)

	p = c.origin
	canvasCtx.beginPath();
	canvasCtx.arc(p.x, h/3,c.volume, 0, 2 * Math.PI, false);
	canvasCtx.fillStyle = c.color;
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
	analyser.getByteTimeDomainData(timeBuffer);
	frequencyCircles.forEach(render)
	window.requestAnimationFrame(go)
}




var audio = new Audio();
var audio1 = new Audio();
audio.src = "http://www.bachorgan.com/DanLong/Toccata__Fugue_in_D_Mi.mp3";
audio1.src = 'https://storage-new.newjamendo.com/download/track/1169718/mp32/';
audio.controls = false;
audio1.playbackRate = 1
audio.autoplay = false;
audio1.controls = false;
audio1.autoplay = false;
document.getElementById('song1').appendChild(audio);
document.getElementById('song2').appendChild(audio1);

var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  var source1 = context.createMediaElementSource(audio1);
  source1.connect(analyser);


document.onkeydown = playnote

// assign keys to notes
// shift octaves with the left and right arrows
function playnote()
{
	var c = event.keyCode
		f = 0;

	if (c === 32)
	{
		if (! audio1.paused)
		{
			audio1.pause()
		}
		if (! audio.paused)
		{
			audio.pause()
		}
		
	}
	console.log(c)



}

s1 = document.getElementById('song2')
s2 = document.getElementById('song1')

s1.onclick = function(){if (audio.paused){audio.play()}else {audio.pause()};}
s2.onclick = function(){if (audio1.paused){audio1.play();console.log('a')}else {audio1.pause()};}

m = document.getElementById('mic')

m.onclick = function(){
// set up for audio input
try {
	navigator.getUserMedia = navigator.webkitGetUserMedia
	navigator.webkitGetUserMedia({audio: true, video: false}, connectStream, microphoneError);
}
catch(e) {
	alert("Sorry, your browser doesn't support the magic of getUserMedia \n try the latest firefox or chrome");
}}

go()



}