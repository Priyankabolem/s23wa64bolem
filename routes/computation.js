var express = require('express');
var router = express.Router();
var math = require('mathjs');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("computation working");
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)
const id="S555664";
const lastDigit = id.split("").pop();
console.log(lastDigit);
const x = req.query.x || randomNumber;
let result;
switch(lastDigit){
  case '3': result =`
  Math.atan2() applied to ${x} is ${math.atan2(x,x)}
  Math.atanh() applied to ${x} is ${math.atanh(x)}
  Math.cbrt() applied to ${x} is ${math.cbrt(x)}`;
  break;
  case '4': result =`
  Math.hypot() applied to ${x} is ${math.hypot(x)}
  Math.ceil() applied to ${x} is ${math.ceil(x)}
  Math.clz32() applied to ${x} is ${Math.clz32(x)}`;
  break;
}


  res.render('computation', { result});
});

module.exports = router;

