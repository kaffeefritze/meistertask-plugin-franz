'use strict';
//module.exports = Franz => Franz;
module.exports = Franz => class Meistertask extends Franz { overrideUserAgent() { return "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136"; } };
// module.exports = Franz => class Discord extends Franz {

// };
