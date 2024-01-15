# Verdaccio Registry Switcher

## Overview

This simple script helps you switch between using a local Verdaccio registry and the default npm registry. It detects whether Verdaccio is running and adjusts the npm registry accordingly.

## Usage

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

2. Download the `switch-registry.js` script from this repository. be sure to do a 
```npm install```

3. Open a terminal or command prompt.

4. Navigate to the directory containing the script.

5. Run the following command to execute the script:

    ```bash
    node switch-registry.js
    ```

## Notes

- If Verdaccio is running, the script sets the npm registry to the local Verdaccio URL.
- If Verdaccio is not running, the script sets the npm registry to the default npm registry.

### Optional: Proxy Configuration

If you are behind a proxy, you may need to set proxy configurations. Uncomment the following lines in the script and replace them with your proxy URL:

```javascript
// Optional: Set proxy configurations
// execSync('npm config set proxy http://your.proxy.url:your_proxy_port');
// execSync('npm config set https-proxy http://your.proxy.url:your_proxy_port');
