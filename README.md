# BigCommerce App SDK

The BigCommerce (BC) JS SDK is a simple javascript library used to manage apps in the control panel. BC's JS SDK includes functionality to prevent users from being logged out of the control panel while using an app. Additionally, BC's JS SDK includes out of the box support for handling logout requests.

## App Installation (Development)

1. Copy the SDK locally
    - `git clone git@github.com:bigcommerce/app-sdk-js.git`
2. Install necessary packages
    - `cd app-sdk-js`
    - `npm install`
3. Create an NPM link
    - `npm link`
3. Link your app's package to the SDK, e.g.
    - `cd ../sample-app-nodejs` [sample-app-nodejs](https://github.com/bigcommerce/sample-app-nodejs)
    - `npm link app-sdk-js`

## Usage

```js
import 'bigcommerce-app-sdk-js';

window.bcAsyncInit = function() {
  Bigcommerce.init({
    onLogout: callback
  });
}
```
