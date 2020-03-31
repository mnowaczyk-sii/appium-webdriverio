# Boilerplate project for WebdriverIO and Appium

## Local environment configuration
1. Install Node.js and Java
1. Install Android Studio and SDK packages required for emulating Android Device
1. Clone repo and install dependencies by executing `npm install` command
1. Optionally install Appium Desktop client

## Setup
1. Configure emulated device by Android Studio AVD Manager and launch device
1. Open repo folder on your machine
1. Check if your machine configuration is set up correctly by running `npm run
   check-android` command in terminal
1. Launch appium server by `npm run appium`
1. Execute tests by `npm run test` command - you should be able to see running
   tests in device emulator

## Troubleshooting
1. Tests might crash when trying to connect to chromedriver - try to apply
   strategies listed on page bellow
   https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
   it it won't help just copy chromedriver binary to
   /node-modules/appium-chromedriver/chromedriver path
1. It might happen that default appium port (4723) is blocked, feel free to
   specify different port by providing `-p` flag when launching appium command
   and when launching tests