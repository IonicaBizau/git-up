// Dependencies
var gitUp = require("../lib");

console.log(gitUp("git@github.com:IonicaBizau/node-parse-url.git"));
// => {
//     protocols: []
//   , port: null
//   , resource: "github.com"
//   , user: "git"
//   , pathname: "/IonicaBizau/node-parse-url.git"
//   , hash: ""
//   , search: ""
//   , href: "git@github.com:IonicaBizau/node-parse-url.git"
//   , protocol: "ssh"
// }

console.log(gitUp("https://github.com/IonicaBizau/node-parse-url.git"));
// => {
//     protocols: [ "https" ]
//   , port: null
//   , resource: "github.com"
//   , user: ""
//   , pathname: "/IonicaBizau/node-parse-url.git"
//   , hash: ""
//   , search: ""
//   , href: "https://github.com/IonicaBizau/node-parse-url.git"
//   , protocol: "https"
// }
