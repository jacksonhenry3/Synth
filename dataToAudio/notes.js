try {
	window.AudioContext = window.AudioContext||window.webkitAudioContext;
	context = new AudioContext();
}
catch(e) {
	alert("Sorry, your browser doesn't support the magic of web audio \n try the latest firefox or chrome");
}

dataObj = {
  "description":{
    "title": "Global Land and Ocean Temperature Anomalies, January-December",
    "units": "Degrees Celsius"
  },
  "dataCollection": [
    {
      "year": "1880",
      "value": "-0.15"
    },
    {
      "year": "1881",
      "value": "-0.10"
    },
    {
      "year": "1882",
      "value": "-0.12"
    },
    {
      "year": "1883",
      "value": "-0.17"
    },
    {
      "year": "1884",
      "value": "-0.23"
    },
    {
      "year": "1885",
      "value": "-0.20"
    },
    {
      "year": "1886",
      "value": "-0.18"
    },
    {
      "year": "1887",
      "value": "-0.26"
    },
    {
      "year": "1888",
      "value": "-0.17"
    },
    {
      "year": "1889",
      "value": "-0.09"
    },
    {
      "year": "1890",
      "value": "-0.31"
    },
    {
      "year": "1891",
      "value": "-0.27"
    },
    {
      "year": "1892",
      "value": "-0.30"
    },
    {
      "year": "1893",
      "value": "-0.34"
    },
    {
      "year": "1894",
      "value": "-0.30"
    },
    {
      "year": "1895",
      "value": "-0.25"
    },
    {
      "year": "1896",
      "value": "-0.10"
    },
    {
      "year": "1897",
      "value": "-0.14"
    },
    {
      "year": "1898",
      "value": "-0.27"
    },
    {
      "year": "1899",
      "value": "-0.15"
    },
    {
      "year": "1900",
      "value": "-0.11"
    },
    {
      "year": "1901",
      "value": "-0.17"
    },
    {
      "year": "1902",
      "value": "-0.26"
    },
    {
      "year": "1903",
      "value": "-0.35"
    },
    {
      "year": "1904",
      "value": "-0.41"
    },
    {
      "year": "1905",
      "value": "-0.29"
    },
    {
      "year": "1906",
      "value": "-0.24"
    },
    {
      "year": "1907",
      "value": "-0.38"
    },
    {
      "year": "1908",
      "value": "-0.43"
    },
    {
      "year": "1909",
      "value": "-0.43"
    },
    {
      "year": "1910",
      "value": "-0.41"
    },
    {
      "year": "1911",
      "value": "-0.44"
    },
    {
      "year": "1912",
      "value": "-0.38"
    },
    {
      "year": "1913",
      "value": "-0.35"
    },
    {
      "year": "1914",
      "value": "-0.19"
    },
    {
      "year": "1915",
      "value": "-0.11"
    },
    {
      "year": "1916",
      "value": "-0.31"
    },
    {
      "year": "1917",
      "value": "-0.34"
    },
    {
      "year": "1918",
      "value": "-0.23"
    },
    {
      "year": "1919",
      "value": "-0.25"
    },
    {
      "year": "1920",
      "value": "-0.23"
    },
    {
      "year": "1921",
      "value": "-0.16"
    },
    {
      "year": "1922",
      "value": "-0.25"
    },
    {
      "year": "1923",
      "value": "-0.23"
    },
    {
      "year": "1924",
      "value": "-0.22"
    },
    {
      "year": "1925",
      "value": "-0.15"
    },
    {
      "year": "1926",
      "value": "-0.06"
    },
    {
      "year": "1927",
      "value": "-0.13"
    },
    {
      "year": "1928",
      "value": "-0.13"
    },
    {
      "year": "1929",
      "value": "-0.25"
    },
    {
      "year": "1930",
      "value": "-0.06"
    },
    {
      "year": "1931",
      "value": "-0.03"
    },
    {
      "year": "1932",
      "value": "-0.05"
    },
    {
      "year": "1933",
      "value": "-0.20"
    },
    {
      "year": "1934",
      "value": "-0.05"
    },
    {
      "year": "1935",
      "value": "-0.08"
    },
    {
      "year": "1936",
      "value": "-0.06"
    },
    {
      "year": "1937",
      "value": "0.05"
    },
    {
      "year": "1938",
      "value": "0.08"
    },
    {
      "year": "1939",
      "value": "0.07"
    },
    {
      "year": "1940",
      "value": "0.11"
    },
    {
      "year": "1941",
      "value": "0.16"
    },
    {
      "year": "1942",
      "value": "0.11"
    },
    {
      "year": "1943",
      "value": "0.11"
    },
    {
      "year": "1944",
      "value": "0.22"
    },
    {
      "year": "1945",
      "value": "0.09"
    },
    {
      "year": "1946",
      "value": "-0.04"
    },
    {
      "year": "1947",
      "value": "-0.05"
    },
    {
      "year": "1948",
      "value": "-0.06"
    },
    {
      "year": "1949",
      "value": "-0.07"
    },
    {
      "year": "1950",
      "value": "-0.16"
    },
    {
      "year": "1951",
      "value": "-0.00"
    },
    {
      "year": "1952",
      "value": "0.04"
    },
    {
      "year": "1953",
      "value": "0.12"
    },
    {
      "year": "1954",
      "value": "-0.10"
    },
    {
      "year": "1955",
      "value": "-0.11"
    },
    {
      "year": "1956",
      "value": "-0.18"
    },
    {
      "year": "1957",
      "value": "0.06"
    },
    {
      "year": "1958",
      "value": "0.12"
    },
    {
      "year": "1959",
      "value": "0.07"
    },
    {
      "year": "1960",
      "value": "0.02"
    },
    {
      "year": "1961",
      "value": "0.10"
    },
    {
      "year": "1962",
      "value": "0.13"
    },
    {
      "year": "1963",
      "value": "0.14"
    },
    {
      "year": "1964",
      "value": "-0.12"
    },
    {
      "year": "1965",
      "value": "-0.05"
    },
    {
      "year": "1966",
      "value": "0.00"
    },
    {
      "year": "1967",
      "value": "0.02"
    },
    {
      "year": "1968",
      "value": "0.01"
    },
    {
      "year": "1969",
      "value": "0.11"
    },
    {
      "year": "1970",
      "value": "0.07"
    },
    {
      "year": "1971",
      "value": "-0.03"
    },
    {
      "year": "1972",
      "value": "0.06"
    },
    {
      "year": "1973",
      "value": "0.19"
    },
    {
      "year": "1974",
      "value": "-0.05"
    },
    {
      "year": "1975",
      "value": "0.02"
    },
    {
      "year": "1976",
      "value": "-0.08"
    },
    {
      "year": "1977",
      "value": "0.18"
    },
    {
      "year": "1978",
      "value": "0.10"
    },
    {
      "year": "1979",
      "value": "0.18"
    },
    {
      "year": "1980",
      "value": "0.23"
    },
    {
      "year": "1981",
      "value": "0.27"
    },
    {
      "year": "1982",
      "value": "0.15"
    },
    {
      "year": "1983",
      "value": "0.32"
    },
    {
      "year": "1984",
      "value": "0.13"
    },
    {
      "year": "1985",
      "value": "0.11"
    },
    {
      "year": "1986",
      "value": "0.20"
    },
    {
      "year": "1987",
      "value": "0.33"
    },
    {
      "year": "1988",
      "value": "0.34"
    },
    {
      "year": "1989",
      "value": "0.27"
    },
    {
      "year": "1990",
      "value": "0.40"
    },
    {
      "year": "1991",
      "value": "0.38"
    },
    {
      "year": "1992",
      "value": "0.23"
    },
    {
      "year": "1993",
      "value": "0.26"
    },
    {
      "year": "1994",
      "value": "0.32"
    },
    {
      "year": "1995",
      "value": "0.45"
    },
    {
      "year": "1996",
      "value": "0.32"
    },
    {
      "year": "1997",
      "value": "0.52"
    },
    {
      "year": "1998",
      "value": "0.63"
    },
    {
      "year": "1999",
      "value": "0.45"
    },
    {
      "year": "2000",
      "value": "0.43"
    },
    {
      "year": "2001",
      "value": "0.55"
    },
    {
      "year": "2002",
      "value": "0.61"
    },
    {
      "year": "2003",
      "value": "0.62"
    },
    {
      "year": "2004",
      "value": "0.57"
    },
    {
      "year": "2005",
      "value": "0.65"
    },
    {
      "year": "2006",
      "value": "0.59"
    },
    {
      "year": "2007",
      "value": "0.59"
    },
    {
      "year": "2008",
      "value": "0.51"
    },
    {
      "year": "2009",
      "value": "0.59"
    },
    {
      "year": "2010",
      "value": "0.65"
    },
    {
      "year": "2011",
      "value": "0.53"
    },
    {
      "year": "2012",
      "value": "0.57"
    },
    {
      "year": "2013",
      "value": "0.62"
    }
  ]
}
data = []
for (var i = dataObj.dataCollection.length - 1; i >= 0; i--) {
	data.push(dataObj.dataCollection[i].value)
};

notes = {
	'C0': 2*Math.PI*16.35,
	'C#0': 2*Math.PI*17.32,
	'Db0': 2*Math.PI*17.32,
	'D0': 2*Math.PI*18.35,
	'D#0': 2*Math.PI*19.45,
	'Eb0': 2*Math.PI*19.45,
	'E0': 2*Math.PI*20.60,
	'F0': 2*Math.PI*21.83,
	'F#0': 2*Math.PI*23.12,
	'Gb0': 2*Math.PI*23.12,
	'G0': 2*Math.PI*24.50,
	'G#0': 2*Math.PI*25.96,
	'Ab0': 2*Math.PI*25.96,
	'A0': 2*Math.PI*27.50,
	'A#0': 2*Math.PI*29.14,
	'Bb0': 2*Math.PI*29.14,
	'B0': 2*Math.PI*30.87,
	'C1': 2*Math.PI*32.70,
	'C#1': 2*Math.PI*34.65,
	'Db1': 2*Math.PI*34.65,
	'D1': 2*Math.PI*36.71,
	'D#1': 2*Math.PI*38.89,
	'Eb1': 2*Math.PI*38.89,
	'E1': 2*Math.PI*41.20,
	'F1': 2*Math.PI*43.65,
	'F#1': 2*Math.PI*46.25,
	'Gb1': 2*Math.PI*46.25,
	'G1': 2*Math.PI*49.00,
	'G#1': 2*Math.PI*51.91,
	'Ab1': 2*Math.PI*51.91,
	'A1': 2*Math.PI*55.00,
	'A#1': 2*Math.PI*58.27,
	'Bb1': 2*Math.PI*58.27,
	'B1': 2*Math.PI*61.74,
	'C2': 2*Math.PI*65.41,
	'C#2': 2*Math.PI*69.30,
	'Db2': 2*Math.PI*69.30,
	'D2': 2*Math.PI*73.42,
	'D#2': 2*Math.PI*77.78,
	'Eb2': 2*Math.PI*77.78,
	'E2': 2*Math.PI*82.41,
	'F2': 2*Math.PI*87.31,
	'F#2': 2*Math.PI*92.50,
	'Gb2': 2*Math.PI*92.50,
	'G2': 2*Math.PI*98.00,
	'G#2': 2*Math.PI*103.83,
	'Ab2': 2*Math.PI*103.83,
	'A2': 2*Math.PI*110.00,
	'A#2': 2*Math.PI*116.54,
	'Bb2': 2*Math.PI*116.54,
	'B2': 2*Math.PI*123.47,
	'C3': 2*Math.PI*130.81,
	'C#3': 2*Math.PI*138.59,
	'Db3': 2*Math.PI*138.59,
	'D3': 2*Math.PI*146.83,
	'D#3': 2*Math.PI*155.56,
	'Eb3': 2*Math.PI*155.56,
	'E3': 2*Math.PI*164.81,
	'F3': 2*Math.PI*174.61,
	'F#3': 2*Math.PI*185.00,
	'Gb3': 2*Math.PI*185.00,
	'G3': 2*Math.PI*196.00,
	'G#3': 2*Math.PI*207.65,
	'Ab3': 2*Math.PI*207.65,
	'A3': 2*Math.PI*220.00,
	'A#3': 2*Math.PI*233.08,
	'Bb3': 2*Math.PI*233.08,
	'B3': 2*Math.PI*246.94,
	'C4': 2*Math.PI*261.63,
	'C#4': 2*Math.PI*277.18,
	'Db4': 2*Math.PI*277.18,
	'D4': 2*Math.PI*293.66,
	'D#4': 2*Math.PI*311.13,
	'Eb4': 2*Math.PI*311.13,
	'E4': 2*Math.PI*329.63,
	'F4': 2*Math.PI*349.23,
	'F#4': 2*Math.PI*369.99,
	'Gb4': 2*Math.PI*369.99,
	'G4': 2*Math.PI*392.00,
	'G#4': 2*Math.PI*415.30,
	'Ab4': 2*Math.PI*415.30,
	'A4': 2*Math.PI*440.00,
	'A#4': 2*Math.PI*466.16,
	'Bb4': 2*Math.PI*466.16,
	'B4': 2*Math.PI*493.88,
	'C5': 2*Math.PI*523.25,
	'C#5': 2*Math.PI*554.37,
	'Db5': 2*Math.PI*554.37,
	'D5': 2*Math.PI*587.33,
	'D#5': 2*Math.PI*622.25,
	'Eb5': 2*Math.PI*622.25,
	'E5': 2*Math.PI*659.26,
	'F5': 2*Math.PI*698.46,
	'F#5': 2*Math.PI*739.99,
	'Gb5': 2*Math.PI*739.99,
	'G5': 2*Math.PI*783.99,
	'G#5': 2*Math.PI*830.61,
	'Ab5': 2*Math.PI*830.61,
	'A5': 2*Math.PI*880.00,
	'A#5': 2*Math.PI*932.33,
	'Bb5': 2*Math.PI*932.33,
	'B5': 2*Math.PI*987.77,
	'C6': 2*Math.PI*1046.50,
	'C#6': 2*Math.PI*1108.73,
	'Db6': 2*Math.PI*1108.73,
	'D6': 2*Math.PI*1174.66,
	'D#6': 2*Math.PI*1244.51,
	'Eb6': 2*Math.PI*1244.51,
	'E6': 2*Math.PI*1318.51,
	'F6': 2*Math.PI*1396.91,
	'F#6': 2*Math.PI*1479.98,
	'Gb6': 2*Math.PI*1479.98,
	'G6': 2*Math.PI*1567.98,
	'G#6': 2*Math.PI*1661.22,
	'Ab6': 2*Math.PI*1661.22,
	'A6': 2*Math.PI*1760.00,
	'A#6': 2*Math.PI*1864.66,
	'Bb6': 2*Math.PI*1864.66,
	'B6': 2*Math.PI*1975.53,
	'C7': 2*Math.PI*2093.00,
	'C#7': 2*Math.PI*2217.46,
	'Db7': 2*Math.PI*2217.46,
	'D7': 2*Math.PI*2349.32,
	'D#7': 2*Math.PI*2489.02,
	'Eb7': 2*Math.PI*2489.02,
	'E7': 2*Math.PI*2637.02,
	'F7': 2*Math.PI*2793.83,
	'F#7': 2*Math.PI*2959.96,
	'Gb7': 2*Math.PI*2959.96,
	'G7': 2*Math.PI*3135.96,
	'G#7': 2*Math.PI*3322.44,
	'Ab7': 2*Math.PI*3322.44,
	'A7': 2*Math.PI*3520.00,
	'A#7': 2*Math.PI*3729.31,
	'Bb7': 2*Math.PI*3729.31,
	'B7': 2*Math.PI*3951.07,
	'C8': 2*Math.PI*4186.01
};

var noteArray = []//Object.keys(notes).map(function(k){return notes[k]});

for (var i = Object.keys(notes).length - 1; i >= 0; i--) {
	// console.log(["G" , "D" , "B"].indexOf(Object.keys(notes)[i].slice(0,-1)))
	if (["A","B","C#","D","E","F#","G#"].indexOf(Object.keys(notes)[i].slice(0,-1)) != -1)
	{
		if (Object.keys(notes)[i].slice(-1)<5)
		{
			noteArray.push(notes[Object.keys(notes)[i]])
		}
	}
};


g = context.createGain()
g.gain.value = .5;


var voice = function(frequency)
{
	this.frequency                 = frequency
	this.oscilator                 = context.createOscillator()
	this.oscilator.type            = 'sin'
	this.oscilator.frequency.value = this.frequency
	this.oscilator.connect(g)
	this.start = function(){this.oscilator.start()}
	this.stop = function(){this.oscilator.stop()}
}

g.connect(context.destination)


function scale(v)
{
	j = (parseFloat(v)+1)/2
	l = noteArray.length
	note = noteArray[Math.floor(j*l)]
	return(note)
}

window.i = 0
a = new voice(0)
b = new voice(0)
c = new voice(0)
a.start()
b.start()
c.start()
function nextNote () {
	 
	value = data[window.i]
	if (typeof(value) == "string")
	{
		freq = scale(value)
		a.oscilator.frequency.value = freq
		b.oscilator.frequency.value = freq*2
		c.oscilator.frequency.value = freq/2
		window.i+=1
	}
	else 
	{
		a.stop()
		b.stop()
		c.stop()
	}

}

window.setInterval(nextNote,100)