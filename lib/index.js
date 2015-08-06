// Dependencies
var ParseUrl = require("parse-url")
  , IsSsh = require("is-ssh")
  ;

/**
 * GitUp
 *
 * @name GitUp
 * @function
 * @param {String} input The input url.
 * @return {Object} An object containing the following fields:
 *
 *  - `protocols` (Array): An array with the url protocols (usually it has one element).
 *  - `port` (null|Number): The domain port.
 *  - `resource` (String): The url domain (including subdomains).
 *  - `user` (String): The authentication user (usually for ssh urls).
 *  - `pathname` (String): The url pathname.
 *  - `hash` (String): The url hash.
 *  - `search` (String): The url querystring value.
 *  - `protocol` (String): The git url protocol.
 */
function GitUp(input) {
    var output = parseUrl(input);

    splits = output.user.split(":");
    if (splits.length === 2 && splits[1] === "x-oauth-basic") {
        output.token = splits[0];
    }

    if (IsSsh(output.protocols) || IsSsh(input)) {
        output.protocol = "ssh";
    } else if (output.protocols.length) {
        output.protocol = output.protocols[0];
    } else {
        output.protocol = "file";
    }

    return output;
}

module.exports = GitUp;
