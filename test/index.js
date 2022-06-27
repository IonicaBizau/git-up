// Dependencies
const gitUp = require("../lib")
    , tester = require("tester")
    ;

const INPUT = [
    // Secure Shell Transport Protocol (SSH)
    [
        "ssh://user@host.xz:42/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: "42"
          , resource: "host.xz:42"
          , user: "user"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "git+ssh://git@host.xz/path/name.git"
      , {
            protocols: ["git", "ssh"]
          , protocol: "ssh"
          , password: ""
          , port: ""
          , resource: "host.xz"
          , user: "git"
          , pathname: "/path/name.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
      "https:/\github.com/IonicaBizau/node-parse-url.git"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "github.com"
          , user: ""
          , pathname: "/IonicaBizau/node-parse-url.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
          , href: "https://github.com/IonicaBizau/node-parse-url.git"
        }
    ]
  , [
        "ssh://user@host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
    // TODO
  , [
        "ssh://host.xz:4000/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: "4000"
          , resource: "host.xz:4000"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "git@domain.xxx.com:42foo/bar.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "domain.xxx.com"
          , user: "git"
          , pathname: "/42foo/bar.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://user@host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://user@host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "user"
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://user@host.xz/~/path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "user"
          , pathname: "/~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "ssh://host.xz/~/path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "git@host.xz:path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "git"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "git@host.xz:~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "git"
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "git@host.xz:path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , user: "git"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
  , [
        "rsync://host.xz/path/to/repo.git/"
      , {
            protocols: ["rsync"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]

    // Git Transport Protocol
  , [
        "git://host.xz/path/to/repo.git/"
      , {
            protocols: ["git"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "git"
          , password: ""
        }
    ]
  , [
        "git://host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["git"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "git"
          , password: ""
        }
    ]

    // HTTP/S Transport Protocol
  , [
        "http://host.xz/path/to/repo.git/"
      , {
            protocols: ["http"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "http"
          , password: ""
        }
    ]
  , [
        "https://host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
        }
    ]
  , [
        "https://token:x-oauth-basic@host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "host.xz"
          , user: "token"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , token: "token"
          , protocol: "https"
          , password: "x-oauth-basic"
        }
    ]
  , [
        "https://x-token-auth:token@host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "host.xz"
          , user: "x-token-auth"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , token: "token"
          , protocol: "https"
          , password: "token"
        }
    ]
  , [
        "https://user@bitbucket.org/user/repo"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "bitbucket.org"
          , user: "user"
          , pathname: "/user/repo"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
        }
    ]
  , [
        "https://user@organization.git.cloudforge.com/name.git"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "organization.git.cloudforge.com"
          , user: "user"
          , pathname: "/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
        }
    ]
  , [
        "https://token:x-oauth-basic@github.com/owner/name.git"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "github.com"
          , user: "token"
          , pathname: "/owner/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: "x-oauth-basic"
          , token: "token"
        }
    ]
  , [
        "https://x-token-auth:token@bitbucket.org/owner/name.git"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "bitbucket.org"
          , user: "x-token-auth"
          , pathname: "/owner/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: "token"
          , token: "token"
        }
    ]

    // Local (Filesystem) Transport Protocol
  , [
        "/path/to/repo.git/"
      , {
            protocols: ["file"]
          , port: ""
          , resource: ""
          , user: ""
          , pathname: ""
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
        }
    ]
  , [
        "path/to/repo.git/"
      , {
            protocols: ["file"]
          , port: ""
          , resource: ""
          , user: ""
          , pathname: ""
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
        }
    ]
  , [
        "~/path/to/repo.git"
      , {
            protocols: ["file"]
          , port: ""
          , resource: ""
          , user: ""
          , pathname: ""
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
        }
    ]
  , [
        "file:///path/to/repo.git/"
      , {
            protocols: ["file"]
          , port: ""
          , resource: ""
          , user: ""
          , pathname: "/path/to/repo.git/"
          , href: "file:///path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
        }
    ]
  , [
        "file://~/path/to/repo.git/"
      , {
            protocols: ["file"]
          , port: ""
          , resource: "~"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , href: "file://~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
        }
    ]
  , [
        "git@host.xz:path/name.git"
      , {
            protocols: ["ssh"]
          , protocol: "ssh"
          , password: ""
          , port: ""
          , resource: "host.xz"
          , user: "git"
          , pathname: "/path/name.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
        }
    ]
];

tester.describe("git-up", test => {
    INPUT.forEach(function (c) {
        test.should("support " + c[0], () => {
            c[1].href = c[1].href || c[0].replace(/\/$/, "");
            c[1].password = c[1].password || ""
            c[1].protocol = c[1].protocol || c[1].protocols[0];
            c[1].token = c[1].token || "";
            const res = gitUp(c[0])
            c[1].query = res.query
            test.expect(res).toEqual(c[1]);
        });
    });
});
