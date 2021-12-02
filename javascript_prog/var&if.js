String.prototype.interpole = function () {
    var c=0, txt=this;
    while (txt.search(/{var}/g) > 0){
        txt = txt.replace(/{var}/, arguments[c]);
        c++;
    }
    return txt;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var age = getRandomInt(35);
var pg13 = "You can see the pg-13 movie";
var ratedR = "You can see rated r movies";
var ratedG = "You can see a rated G movie";
console.log("Your current age is {var}".interpole(age));

if (age>= 13 && age <= 17)
  console.log(pg13);
if (age > 17)
  console.log(ratedR);
if (age <= 12)
  console.log(ratedG);