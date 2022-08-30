<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# git-up

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/git-up.svg)](https://www.npmjs.com/package/git-up) [![Downloads](https://img.shields.io/npm/dt/git-up.svg)](https://www.npmjs.com/package/git-up) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> A low level git url parser.

















## :cloud: Installation

```sh
# Using npm
npm install --save git-up

# Using yarn
yarn add git-up
```













## :clipboard: Example



```js
// Dependencies
var gitUp = require("git-up");

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
```











## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:





## :memo: Documentation


### `gitUp(input)`
Parses the input url.

#### Params

- **String** `input`: The input url.

#### Return
- **Object** An object containing the following fields:
 - `protocols` (Array): An array with the url protocols (usually it has one element).
 - `port` (null|Number): The domain port.
 - `resource` (String): The url domain (including subdomains).
 - `user` (String): The authentication user (usually for ssh urls).
 - `pathname` (String): The url pathname.
 - `hash` (String): The url hash.
 - `search` (String): The url querystring value.
 - `href` (String): The input url.
 - `protocol` (String): The git url protocol.
 - `token` (String): The oauth token (could appear in the https urls).














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `git-url-parse`
 - `gatsby-telemetry`
 - `@jamo/gatsby-telemetry`
 - `@enkeledi/react-native-week-month-date-picker`
 - `erxes-telemetry`
 - `@hemith/react-native-tnk`
 - `miguelcostero-ng2-toasty`
 - `native-kakao-login`
 - `react-native-my-first-try-arun-ramya`
 - `react-native-kakao-maps`
 - `react-native-is7`
 - `react-native-ytximkit`
 - `react-native-payu-payment-testing`
 - `npm_one_1_2_3`
 - `react-native-biometric-authenticate`
 - `react-native-arunmeena1987`
 - `react-native-contact-list`
 - `rn-adyen-dropin`
 - `@positionex/position-sdk`
 - `@corelmax/react-native-my2c2p-sdk`
 - `@felipesimmi/react-native-datalogic-module`
 - `@hawkingnetwork/react-native-tab-view`
 - `drowl-base-theme-iconset`
 - `native-apple-login`
 - `react-native-cplus`
 - `npm_qwerty`
 - `react-native-arunjeyam1987`
 - `react-native-bubble-chart`
 - `react-native-flyy`
 - `@react-18-pdf/root`
 - `@apardellass/react-native-audio-stream`
 - `@geeky-apo/react-native-advanced-clipboard`
 - `candlelabssdk`
 - `@saad27/react-native-bottom-tab-tour`
 - `codelofts-git-url-parse`
 - `gb-notifications`
 - `react-native-dsphoto-module`
 - `react-native-responsive-size`
 - `react-native-sayhello-module`
 - `npm_one_12_34_1_`
 - `npm_one_2_2`
 - `payutesting`
 - `@con-test/react-native-concent-common`
 - `react-native-shekhar-bridge-test`
 - `react-feedback-sdk`
 - `@oiti/documentoscopy-react-native`
 - `birken-react-native-community-image-editor`
 - `git-web`
 - `luojia-cli-dev`
 - `reac-native-arun-ramya-test`
 - `react-native-plugpag-wrapper`
 - `react-native-pulsator-native`
 - `react-native-arun-ramya-test`
 - `react-native-arunramya151`
 - `react-native-transtracker-library`
 - `ship-release`
 - `@jfilipe-sparta/react-native-module_2`
 - `cogoportutils`
 - `@buganto/client`
 - `angularvezba`
 - `astra-ufo-sdk`
 - `react-native-syan-photo-picker`
 - `@wecraftapps/react-native-use-keyboard`
 - `l2forlerna`
 - `native-google-login`
 - `react-native-modal-progress-bar`
 - `react-native-test-module-hhh`
 - `raact-native-arunramya151`
 - `react-native-jsi-device-info`
 - `react-native-badge-control`
 - `front-end-styleguide-cli`
 - `front-end-styleguide-init`
 - `hubgit`
 - `rn-tm-notify`
 - `native-date-picker-module`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
