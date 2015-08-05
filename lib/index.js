var SshUrl = require("ssh-url")
  , IsSsh = require("is-ssh")
  ;

function GitUp(input) {
    var output = {};

    if (input.indexOf("rsync://") === 0) {
        output.protocol = "rsync";
        input = input.substring(8);
    }

    if (IsSsh(input)) {
        output.protocol = "ssh";
        return SshUrl.parse(input);
    }

}

module.exports = GitUp;
