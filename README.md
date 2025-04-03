<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# git-up

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/git-up.svg)](https://www.npmjs.com/package/git-up) [![Downloads](https://img.shields.io/npm/dt/git-up.svg)](https://www.npmjs.com/package/git-up) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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











## :memo: Documentation


### `gitUp(input)`
Parses the input url.

#### Params

- **String** `input`: The input url.

#### Return
- **Object** An object containing the following fields:
 - `protocols` (Array): An array with the url protocols (usually it has one element).
 - `port` (String): The domain port.
 - `resource` (String): The url domain (including subdomains).
 - `user` (String): The authentication user (usually for ssh urls).
 - `pathname` (String): The url pathname.
 - `hash` (String): The url hash.
 - `search` (String): The url querystring value.
 - `href` (String): The input url.
 - `protocol` (String): The git url protocol.
 - `token` (String): The oauth token (could appear in the https urls).









## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:














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

 - `@_nomtek/react-native-shimmer-animation`
 - `@aabelmann/ui-layer`
 - `@abhinavoneuipoc/stencil-test`
 - `@adatechnology/react-native-android-getnet-pos`
 - `@adembacaj/react-native-google-pay`
 - `@ahmed_shaban123/react-native-currencyinput`
 - `@ali5049/react-native-buttons`
 - `@amirdiafi/react-native-ios-haptics`
 - `@amiruldev/wajs`
 - `@apardellass/react-native-audio-stream`
 - `@aruntestpayment/react-native-payu-payment`
 - `@aviinash_jha/react-native-test_multiply`
 - `@aysea/react-native-ui-library`
 - `@azalpacir/react-native-dhp-printer`
 - `@brantalikp/rn-resize`
 - `@buganto/client`
 - `@con-test/react-native-concent-common`
 - `@corelmax/react-native-my2c2p-sdk`
 - `@cs6/react-native-test-native-view-library`
 - `@damruravihara/react-native-testing-package`
 - `@drakedeatonuk/rschedule`
 - `@enkeledi/react-native-week-month-date-picker`
 - `@extrieve_technologies/quickcapture_react_native`
 - `@felipesimmi/react-native-datalogic-module`
 - `@geeky-apo/react-native-advanced-clipboard`
 - `@happy-gastro/react-native-printer-module`
 - `@hawkingnetwork/react-native-tab-view`
 - `@hbglobal/react-native-actions-shortcuts`
 - `@hemith/react-native-tnk`
 - `@hieuquang2212/form`
 - `@idas1/ui-component-lib`
 - `@jamo/gatsby-telemetry`
 - `@jfilipe-sparta/react-native-module_2`
 - `@kgit/readability`
 - `@kgit/readbility`
 - `@labiebhn_/react-native-multiplier`
 - `@lehuyaa/my-assets`
 - `@logisticinfotech/react-native-geocoding-reversegeocoding`
 - `@navabi/react-native-ssl-pinning`
 - `@oiti/rn-liveness2d`
 - `@orgbluetooth/react-native-arunpayupayment`
 - `@orgbluetooth/react-native-payupayment`
 - `@parallelnft/web3modal`
 - `@ponchodien/react-native-printer-imin`
 - `@positionex/position-sdk`
 - `@praella/localisationist`
 - `@react-18-pdf/root`
 - `@react-native-ui-design/button`
 - `@saad27/react-native-bottom-tab-tour`
 - `@safely-project/safely-ts`
 - `@sephriot/react-native-persistable-uri`
 - `@sidghimire/react-native-mapbox-navigation`
 - `@sridharetikala/react-native-rn-lib-custom-components`
 - `@status-im/react-native-transparent-video`
 - `@syedt/hellosdk`
 - `@taingo97/react-native-awesome-module`
 - `@taingo97/react-native-bluetooth-xprinter`
 - `@taingo97/react-native-expo-key-rsa-kt`
 - `@taingo97/react-native-expo-rsa`
 - `@taingo97/react-native-generate-key-rsa`
 - `@taingo97/react-native-key-rsa`
 - `@taingo97/react-native-print-xprinter`
 - `@taingo97/react-native-printer-imin`
 - `@taingo97/react-native-rsa`
 - `@taingo97/react-native-rsa-expo`
 - `@taingo97/react-native-sunmi-printer`
 - `@taingo97/react-native-telpo-printer`
 - `@thinxviewx/core-rn`
 - `@tlgeo/react-native-gdal`
 - `@tomw2w/my-nuxt-layer`
 - `@wecraftapps/react-native-use-keyboard`
 - `@yplabs-ltd/react-native-detector`
 - `@zotasys/native`
 - `agent-get-agent`
 - `anakketiga`
 - `anaklanangtea`
 - `anakwadontea`
 - `angularvezba`
 - `archlibrary`
 - `arifbudixz`
 - `astra-ufo-sdk`
 - `awesome-module-kd`
 - `biometric-st`
 - `birken-react-native-community-image-editor`
 - `candlelabssdk`
 - `checkbox-component`
 - `codelofts-git-url-parse`
 - `connex-kakilang`
 - `connex_ram00nez`
 - `demo-test-scrn`
 - `design-system-trial-milyasbpa`
 - `dogandev-simple-toast`
 - `domaincomponent`
 - `erxes-telemetry`
 - `expo-renavigate`
 - `fawaterak-online-payment`
 - `fawatrak-online-payment`
 - `fixed_form_builder`
 - `fluent.adflow.reactnativesdk`
 - `fluent.adflow.reactnativesdk-alpha`
 - `fmsl`
 - `framework_test_library_sixdee`
 - `framework_test_library_sixdee_new`
 - `framework_test_library_sixdee_new_new`
 - `front-end-styleguide-cli`
 - `front-end-styleguide-init`
 - `gamification-integration-new`
 - `gatsby-telemetry`
 - `gaurav-react-native-loop`
 - `gb-notifications`
 - `genz-native-elements`
 - `gerimismalamsenin`
 - `gh-monoproject-cli`
 - `git-url-parse`
 - `git-web`
 - `hong1-utils`
 - `hubgit`
 - `iiif-manifest-editor`
 - `jamuskalim`
 - `jesh-calculation`
 - `jnf-accesscontrol-rnttl`
 - `jordy-frijters-test-lib`
 - `jrennsoh88-react-native-scroll-indicator`
 - `khaled-salem-custom-components`
 - `knex-paginate-transaction`
 - `l2forlerna`
 - `luojia-cli-dev`
 - `mangudinlagirajin`
 - `markdownalint-cli2`
 - `miguelcostero-ng2-toasty`
 - `native-apple-login`
 - `native-date-picker-module`
 - `native-google-login`
 - `native-kakao-login`
 - `native-modal-damage-vehicle`
 - `new-awesome-4321`
 - `npm_one_12_34_1_`
 - `npm_one_1_2_3`
 - `npm_one_2_2`
 - `npm_qwerty`
 - `nuxtpaginations`
 - `ori-bot-react-native`
 - `patepangdeui`
 - `payutesting`
 - `pileuleuyantea`
 - `pnm-yph-react-native-custom-components`
 - `private_npm_module`
 - `project-wajs-dv`
 - `pyreswap-sdk`
 - `raact-native-arunramya151`
 - `reac-native-arun-ramya-test`
 - `react-native-adarsh_react_native_video_player`
 - `react-native-addition`
 - `react-native-android-native-view`
 - `react-native-android-video-player-view`
 - `react-native-android-view`
 - `react-native-animate-text`
 - `react-native-app-bubble`
 - `react-native-app-integrity-checksum`
 - `react-native-arps-authorize-net`
 - `react-native-arun-ramya-test`
 - `react-native-arunjeyam1987`
 - `react-native-arunmeena1987`
 - `react-native-arunramya151`
 - `react-native-auth-service-client`
 - `react-native-aventonfacetec-aventon`
 - `react-native-awesome-android-123`
 - `react-native-awesome-android-123-zeotap`
 - `react-native-awesome-module-dharmesh`
 - `react-native-awesome-module-latest`
 - `react-native-awesome-module-two`
 - `react-native-azure-communication-services`
 - `react-native-badge-control`
 - `react-native-basic-app`
 - `react-native-basic-screen`
 - `react-native-biometric-authenticate`
 - `react-native-bleccs-components`
 - `react-native-bluetooth-device-detect`
 - `react-native-bottom-tab-designs`
 - `react-native-bridge-package`
 - `react-native-bubble-chart`
 - `react-native-build-vesion-getter`
 - `react-native-check-component`
 - `react-native-chenaar`
 - `react-native-components-design`
 - `react-native-conekta-card-tokenizer`
 - `react-native-contact-list`
 - `react-native-cplus`
 - `react-native-create-video-thumbnail`
 - `react-native-ctp-odp`
 - `react-native-custom-image-carousel`
 - `react-native-custom-poccomponent`
 - `react-native-custom-poccomponent-next`
 - `react-native-custome-component-demo`
 - `react-native-datacapture-core`
 - `react-native-dff-components-demo`
 - `react-native-dhp-printer`
 - `react-native-dimensions-layout`
 - `react-native-dsphoto-module`
 - `react-native-dummy-view`
 - `react-native-escape`
 - `react-native-fedlight-dsm`
 - `react-native-flyy`
 - `react-native-geo-locator`
 - `react-native-get-countries`
 - `react-native-ghn-ekyc`
 - `react-native-ideo-rn-notifications`
 - `react-native-innity-2`
 - `react-native-innity-remaster`
 - `react-native-input-library`
 - `react-native-is7`
 - `react-native-jsi-device-info`
 - `react-native-kakao-maps`
 - `react-native-klarify-ios`
 - `react-native-klarify-ui`
 - `react-native-klc`
 - `react-native-lazp-device-info`
 - `react-native-lib-test-rn-1`
 - `react-native-library-testing-422522`
 - `react-native-line-login-android`
 - `react-native-login-demo-test`
 - `react-native-lowlatency`
 - `react-native-loyalty-platforms`
 - `react-native-manh-test`
 - `react-native-manual-ios-sdk`
 - `react-native-modal-progress-bar`
 - `react-native-module-arge`
 - `react-native-module-for-testing`
 - `react-native-moosa-lib-for-test`
 - `react-native-multi-bluetooth-printer`
 - `react-native-multiplier-altroncoso`
 - `react-native-multiplier-component`
 - `react-native-multiplier-demo`
 - `react-native-multiplier2`
 - `react-native-multiply`
 - `react-native-multiply-component`
 - `react-native-multiselector`
 - `react-native-mun-kit`
 - `react-native-my-first-try-arun-ramya`
 - `react-native-native-audio-engine`
 - `react-native-native-ios-test1`
 - `react-native-nativewind`
 - `react-native-nghia-sharering`
 - `react-native-nice-learning`
 - `react-native-nyx-printer`
 - `react-native-offline-notice`
 - `react-native-onramp`
 - `react-native-opus`
 - `react-native-otp-custom-library`
 - `react-native-paynow-generator`
 - `react-native-payu-payment`
 - `react-native-payu-payment-testing`
 - `react-native-plugpag-wrapper`
 - `react-native-progress-arrow`
 - `react-native-pulsator-native`
 - `react-native-rabbitmq-all`
 - `react-native-radio-bic-group-lib`
 - `react-native-reanimated-sortable-list`
 - `react-native-recent-framework-update`
 - `react-native-remote-update`
 - `react-native-responsive-helper`
 - `react-native-responsive-size`
 - `react-native-return-usb-data`
 - `react-native-rn-app`
 - `react-native-rn-common-components-example`
 - `react-native-rn-icons-library`
 - `react-native-rn-lib-custom-components`
 - `react-native-rn-tolkaplayer`
 - `react-native-rn-tolkaplayer-dharmesh`
 - `react-native-rom-components`
 - `react-native-rtn-ips-poslin-test`
 - `react-native-s-airlines`
 - `react-native-sandycomponent`
 - `react-native-savczuk-feature-library`
 - `react-native-sayhello-module`
 - `react-native-screen-idle-timer`
 - `react-native-scroll-tab-to-index`
 - `react-native-shared-gesture`
 - `react-native-sharing-intent`
 - `react-native-sherpa-onnx-offline-tts`
 - `react-native-simple-timeline`
 - `react-native-sp-test-common`
 - `react-native-sunmi-printer-hk`
 - `react-native-superapis-transbank-pos`
 - `react-native-syan-photo-picker`
 - `react-native-teads-sdk-module`
 - `react-native-tejab41097-sample-library`
 - `react-native-teknoctrl-components`
 - `react-native-test-comlibrary`
 - `react-native-test-module-hhh`
 - `react-native-test-multiplier-library`
 - `react-native-test-tooltip`
 - `react-native-test-view`
 - `react-native-ticker-tape`
 - `react-native-tilt-ble`
 - `react-native-tones`
 - `react-native-transtracker-library`
 - `react-native-uart-connection`
 - `react-native-ui-components-library`
 - `react-native-uvc-camera-android`
 - `react-native-version-app`
 - `react-native-volume-phisical`
 - `react-native-withframework-check`
 - `react-native-wtf`
 - `react-native-xprinter-thermal-ble`
 - `react-native-ytximkit`
 - `reactnatively`
 - `reat-native-multiplierkpr`
 - `refinejs-repo`
 - `rn-adyen-dropin`
 - `rn-check-btn`
 - `rn-circular-chart`
 - `rn-counter-demo`
 - `rn-currency-formatter`
 - `rn-session-multiplier-demo`
 - `rn-tm-notify`
 - `rn_unique_device_id`
 - `rnttlock`
 - `scout-chatbot-widget`
 - `sedanbosok`
 - `semantic-release-gitmoji-action`
 - `ship-release`
 - `smart_one_connect`
 - `sungrow_tcu`
 - `tehmusimhujan`
 - `test-haptik-lib`
 - `test-library-123`
 - `test-zeo-collect`
 - `tools_may_24`
 - `vantiq-react`
 - `vision-camera-base64-resized`
 - `vision-camera-plugin-face-detector`
 - `vision-camera-plugin-scan-faces`
 - `wifi_configuration_package`
 - `winx-form-winx`
 - `yangtao-js`
 - `yarn-react-hook-form`
 - `zzzxxxyyy321123`











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
