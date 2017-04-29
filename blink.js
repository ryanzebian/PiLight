var Gpio = require('onoff').Gpio;
led = new Gpio(14,'out');
(function blink(count){
    if(count <=0){
        return led.unexport();
    }
    led.read(function(err,value){
        if(err){
            throw err;
        }
        led.write(value ^ 1, function (err){
            if(err)
                throw err;
        });
    });

    setTimeout(function(){
        blink(count-1);}, 200);
    
}(25));
