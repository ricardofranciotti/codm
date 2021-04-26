const arma = require('./class/Arma');
const armadata = require('./class/arma-data')
const armaitem = require('./class/item-arma')
const itemdata = require('./class/arma-item-data')


var Arma = new arma("Type 25","ASSALTO");
var ArmaData = new armadata(Arma,50,50,50,50,50,50);
var ItemArma = new armaitem("Bocal Estranho","BOCA")
var ItemData = new itemdata(ArmaData,53,55,44,36,39,60)




console.log(Arma)
console.log(ArmaData)
console.log(ItemArma)
console.log("a");
console.log(ItemData)


