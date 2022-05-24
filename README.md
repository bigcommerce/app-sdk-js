# BigCommerce App SDK

## Overview

The BigCommerce (BC) JS SDK is a simple javascript library used to manage apps in the control panel. BC's JS SDK includes functionality to prevent users from being logged out of the control panel while using an app. Additionally, BC's JS SDK includes out of the box support for handling logout requests.

## App Installation (Development)

1. Copy the SDK locally
    - `git clone git@github.com:bigcommerce/app-sdk-js.git`
2. Install necessary packages
    - `cd app-sdk-js`
    - `npm install`
3. Create an NPM link
    - `npm link`
4. Link your app's package to the SDK, e.g.
    - `cd ../sample-app-nodejs` [sample-app-nodejs](https://github.com/bigcommerce/sample-app-nodejs)
    - `npm link app-sdk-js`

## Usage

In its most basic form, the BigCommerce SDK is used to keep apps in sync with the control panel. This prevents users of an application from being logged out. To consume the SDK, it should be loaded at the top of an application; ideally, as part of the main index. This enables the SDK to properly communicate with the control panel by covering the entire application. 

In your application's main index (or app) file, import the library:
```js
import 'bigcommerce-app-sdk-js';
```

Next, initialize the SDK. This should be done in the first part of the application that has access to the window object. In React-based applications, including NextJS, this can be done inside of `useEffect` or `componentDidMount` (for class components). 
```js
window.bcAsyncInit = function() {
  Bigcommerce.init({
    onLogout: callback
  });
}
```

Finally, to add an additional layer of security, an `onLogout` callback can be passed. This callback will be hit if the user logs out of the control panel, including logging out from a separate tab. For example, the [NextJS sample app](https://github.com/bigcommerce/sample-app-nodejs/blob/main/scripts/bcSdk.js) calls an [internal API](https://github.com/bigcommerce/sample-app-nodejs/blob/main/pages/api/logout.ts) which removes the user from the active session.
