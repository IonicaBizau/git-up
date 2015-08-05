// Dependencies
var GitUp = require("../lib");

// Secure Shell Transport Protocol (SSH)
console.log(GitUp("ssh://user@host.xz:port/path/to/repo.git/"));
// => {
//    protocol: "ssh"
//  , user: "user"
//  , host: "host.xz"
//  , port: "port"
//  , path: "path/to/repo"
// }

console.log(GitUp("git+ssh://git@host.com/path/name.git"));
console.log(GitUp("ssh://user@host.xz/path/to/repo.git/"));
console.log(GitUp("ssh://host.xz:port/path/to/repo.git/"));
console.log(GitUp("ssh://host.xz/path/to/repo.git/"));
console.log(GitUp("ssh://user@host.xz/path/to/repo.git/"));
console.log(GitUp("ssh://host.xz/path/to/repo.git/"));
console.log(GitUp("ssh://user@host.xz/~user/path/to/repo.git/"));
console.log(GitUp("ssh://host.xz/~user/path/to/repo.git/"));
console.log(GitUp("ssh://user@host.xz/~/path/to/repo.git"));
console.log(GitUp("ssh://host.xz/~/path/to/repo.git"));

console.log(GitUp("user@host.xz:/path/to/repo.git/"));
console.log(GitUp("user@host.xz:~user/path/to/repo.git/"));
console.log(GitUp("user@host.xz:path/to/repo.git"));

console.log(GitUp("rsync://host.xz/path/to/repo.git/"));

// Git Transport Protocol
console.log(GitUp("git://host.xz/path/to/repo.git/"));
console.log(GitUp("git://host.xz/~user/path/to/repo.git/"));

// HTTP/S Transport Protocol
console.log(GitUp("http://host.xz/path/to/repo.git/"));
console.log(GitUp("https://host.xz/path/to/repo.git/"));
console.log(GitUp("https://token:x-oauth-basic@host.xz/path/to/repo.git/"));
console.log(GitUp("https://user@bitbucket.org/user/repo"));
console.log(GitUp("https://user@organization.git.cloudforge.com/name.git"));

// Local (Filesystem) Transport Protocol
console.log(GitUp("/path/to/repo.git/"));
console.log(GitUp("path/to/repo.git/"));
console.log(GitUp("~/path/to/repo.git"));
console.log(GitUp("file:///path/to/repo.git/"));
console.log(GitUp("file://~/path/to/repo.git/"));
