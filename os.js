const os = require('os');
const userIno = {
    name : os.userInfo(),
    upTime : os.uptime(),
    release : os.release(),
    memory :os.totalmem(),
    freeMem : os.freemem()
}

console.log(userIno)