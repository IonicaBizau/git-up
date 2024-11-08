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
          , resource: "host.xz"
          , host: "host.xz:42"
          , user: "user"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
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
          , host: "host.xz"
          , user: "git"
          , pathname: "/path/name.git"
          , hash: ""
          , search: ""
          , parse_failed: false
        }
    ]
  , [
      "https:/\github.com/IonicaBizau/node-parse-url.git"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "github.com"
          , host: "github.com"
          , user: ""
          , pathname: "/IonicaBizau/node-parse-url.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
          , href: "https://github.com/IonicaBizau/node-parse-url.git"
          , parse_failed: false
        }
    ]
  , [
        "ssh://user@host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
    // TODO
  , [
        "ssh://host.xz:4000/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: "4000"
          , resource: "host.xz"
          , host: "host.xz:4000"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git@domain.xxx.com:42foo/bar.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "domain.xxx.com"
          , host: "domain.xxx.com"
          , user: "git"
          , pathname: "/42foo/bar.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://user@host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://user@host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "user"
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://user@host.xz/~/path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "user"
          , pathname: "/~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "ssh://host.xz/~/path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git@host.xz:path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "git"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git@host.xz:~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "git"
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git@host.xz:path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "git"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "rsync://host.xz/path/to/repo.git/"
      , {
            protocols: ["rsync"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]

    // Git Transport Protocol
  , [
        "git://host.xz/path/to/repo.git/"
      , {
            protocols: ["git"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "git"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git://host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["git"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/~user/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "git"
          , password: ""
          , parse_failed: false
        }
    ]

    // HTTP/S Transport Protocol
  , [
        "http://host.xz/path/to/repo.git/"
      , {
            protocols: ["http"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "http"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "https://host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "https://token:x-oauth-basic@host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "token"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , token: "token"
          , protocol: "https"
          , password: "x-oauth-basic"
          , parse_failed: false
        }
    ]
  , [
        "https://x-token-auth:token@host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "x-token-auth"
          , pathname: "/path/to/repo.git/"
          , hash: ""
          , search: ""
          , token: "token"
          , protocol: "https"
          , password: "token"
          , parse_failed: false
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
          , host: "bitbucket.org"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
          , parse_failed: false
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
          , host: "organization.git.cloudforge.com"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: ""
          , parse_failed: false
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
          , host: "github.com"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: "x-oauth-basic"
          , token: "token"
          , parse_failed: false
        }
    ]
  , [
        "https://x-token-auth:token@bitbucket.org/owner/name.git"
      , {
            protocols: ["https"]
          , port: ""
          , resource: "bitbucket.org"
          , host: "bitbucket.org"
          , user: "x-token-auth"
          , pathname: "/owner/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , password: "token"
          , token: "token"
          , parse_failed: false
        }
    ]

    // Local (Filesystem) Transport Protocol
  , [
        "/path/to/repo.git/"
      , {
            parse_failed: true
        }
    ]
  , [
        "path/to/repo.git/"
      , {
            parse_failed: true
        }
    ]
  , [
        "~/path/to/repo.git"
      , {
            parse_failed: true
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
          , host: ""
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
          , parse_failed: false
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
          , host: "~"
          , hash: ""
          , search: ""
          , protocol: "file"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git@host.xz:path/name.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "git"
          , pathname: "/path/name.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
  , [
        "git@host.xz:path%20to/repo%20name.git"
      , {
            protocols: ["ssh"]
          , port: ""
          , resource: "host.xz"
          , host: "host.xz"
          , user: "git"
          , pathname: "/path%20to/repo%20name.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
          , password: ""
          , parse_failed: false
        }
    ]
];

tester.describe("git-up", test => {
    INPUT.forEach(function (c) {
        if (c[1].parse_failed) {
            test.should(`throw if url is invalid: ${c[0]}`, () => {
                test.expect(() => {
                    gitUp(c[0])
                }).toThrow(/url parsing failed/i)
            })
        } else {
            test.should("support " + c[0], () => {
                c[1].href = c[1].href || c[0].replace(/\/$/, "");
                c[1].password = c[1].password || ""
                c[1].protocol = c[1].protocol || c[1].protocols[0];
                c[1].token = c[1].token || "";
                const res = gitUp(c[0])
                c[1].query = res.query
                test.expect(res).toEqual(c[1]);
            });
        }
    });
});
