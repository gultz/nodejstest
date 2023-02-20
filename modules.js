
const names = require('./name');
const sayHi = require('./util');
const data = require('./alternative');
require('./alternative');
console.log(data.items); 

sayHi('susan');
sayHi(names.john)

const os = require('os');

//info about current user 
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds;

console.log(`the system uptime is ${os.uptime()} seocnds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs);

const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','text.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

//절대경로 
const absolute = path.resolve(__dirname,'content','text.txt');
console.log(absolute);

