const target = process.env.CI ? "chrome.app" : "chrome.docker";

module.exports = {
    configurations: {
        laptop: {
            target,
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
        },
    },
}

// "loki": {
//     "configurations": {
//       "chrome.laptop": {
//         "target": "chrome.app",
//         "width": 1366,
//         "height": 768
//       },
//       "chrome.iphone7": {
//         "target": "chrome.app",
//         "preset": "iPhone 7"
//       }
//     }
//   }