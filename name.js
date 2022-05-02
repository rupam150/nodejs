const names = require('./printnameargs');
const say = require('./printname')

// console.log(names);
// say(names.John);
// say(names.Rupam)
setInterval(()=>say(names.John),10)
setInterval(()=>say(names.Rupam),20)