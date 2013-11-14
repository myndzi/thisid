var fs = require('fs'),
	uuid = require('uuid-v4');

var thisID, uuidFile = __dirname + '/uuid';
	
try { thisID = fs.readFileSync(uuidFile); }
catch (e) { }

if (!uuid.isUUID(thisID)) {
	thisID = uuid();
	require('fs').writeFile(uuidFile, thisID);
}

module.exports = thisID.toString();
