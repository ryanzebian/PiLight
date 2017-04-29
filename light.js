var Gpio = require('onoff').Gpio;
var led = new Gpio(14,'out','none',{activeLow: true});
led.writeSync(0);
console.log('initialized gpio 14');

if(process.argv[2] === 'reset'){
	reset();
}
function reset(){
	led.unexport();
	console.log('LED was reset');
	process.exit(0);
}
function turnOn(value, onUntil){
	console.log('turning LED on: ', value);
	led.write(value, function(err){
		if(err){
			console.error(err);
			throw err;
		}
        led.read(function(err,value){
            if(err){
                console.error(err);
                throw err;
            }
    //        console.log('LED value is: ',value);
        });

	});
if(onUntil){
	console.log('on until: ',onUntil,' secs');
	setTimeout(function(){led.unexport();},onUntil*1000);
	}
}

function turnOnSync(value){
	console.log('turning LED Synchronusly on: ',value);
	led.writeSync(value);
}

process.on('SIGINT',function (){
    led.unexport();
});

exports.on = turnOn;
