var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());       
app.use(express.urlencoded()); 

var Gpio = require('onoff').Gpio; 
var led = new Gpio(17, 'out');     

var button = new Gpio(27, 'in', 'rising', {debounceTimeout: 10});
var estado = 0;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
 
});

app.get('/saludo', function (req, res) {
    res.send('Solicitud de saludo recibida');
});

app.post('/respuesta', function (req, res) {
    res.send("Nombre ingresado: "+req.body.nombre);
    console.log("Información enviada");
    //se ejecuta en la RB
    estado = !estado;
    if(estado) { led.writeSync(1); }
    else {led.writeSync(0); }
});

app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });