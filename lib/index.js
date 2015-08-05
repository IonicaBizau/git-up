// Dependencies
var SshUrl = require("ssh-url")
  , IsSsh = require("is-ssh")
  , Protocols = require("protocols")
  ;

function parseUrl(url) {
    var output = {
            protocols: Protocols(url)
          , port: null
          , resource: ""
          , user: ""
          , pathname: ""
          , token: ""
        }
      , protocolIndex = url.indexOf("://")
      , resourceIndex = -1
      , splits = null
      , parts = null
      ;

    if (protocolIndex !== -1) {
        url = url.substring(protocolIndex + 3);
    }

    parts = url.split(/\~|\//g);
    output.resource = parts.shift();

    splits = output.resource.split("@");
    if (splits.length === 2) {
        output.user = splits[0];
        output.resource = splits[1];
    }
    splits = output.resource.split(":");

    if (splits.length === 2 && splits[1]) {
        output.resource = splits[0];
        output.port = isNaN(splits[1]) ? splits[1] : parseInt(splits[1]);
    }

    splits = output.user.split(":");
    if (splits.length === 2 && splits[1] === "x-oauth-basic") {
        output.token = splits[0];
    }

    parts = parts.filter(Boolean);
    output.pathname = "/" + parts.join("/");
    return output;
}

function GitUp(input) {
    var output = parseUrl(input);

    if (IsSsh(output.protocols) || IsSsh(input)) {
        output.protocol = "ssh";
    } else if (output.protocols.indexOf("git") !== -1) {
        output.protocol = "git";
    } else if (output.protocols.indexOf("http") !== -1 || output.protocols.indexOf("https") !== -1) {
        output.protocol = output.protocols[0];
    } else {
        output.protocol = "file";
    }

    return output;
}

module.exports = GitUp;
