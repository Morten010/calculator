const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


//Homepage
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    const result = num1 + num2;

    res.send(`${num1} + ${num2} = ${result}`)
})

//BMI page
app.get('/bmicalculator', function(req, res){
    //get html boilerplate of the bmi page
    res.sendFile(__dirname + "/bmicalculator.html")
});
app.post('/bmicalculator', function(req, res){
    const weight = Number(req.body.weight)
    const height = Number(req.body.height)
    const result = weight / height / height * 10000
    res.send(`Your BMI is ${result.toFixed(1)} <br><br><strong>BMI Categories:</strong><br> Underweight = <18.5 <br> Normal weight = 18.5–24.9<br> Overweight = 25–29.9<br> Obesity = BMI of 30 or greater` )
})


//start server
app.listen(3000, function() {
    console.log("the server is started on port 3000");
});