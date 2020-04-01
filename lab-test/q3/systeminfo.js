const os = require('os');

module.exports = function systemInfo() {
    let osArch = os.arch();
    let hostname = os.hostname();
    let osName = os.type();

    let username = os.userInfo().username;
    let homedir = os.userInfo().homedir;
    console.log(`Operating System Info: ${osArch}, Hostname: ${hostname}, OS Name: ${osName}, User Info: ${username}, ${homedir}`);
};




