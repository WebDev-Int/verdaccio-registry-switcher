const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const VERDACCIO_URL = 'http://localhost:4873/';
const DEFAULT_NPM_URL = 'https://registry.npmjs.org/';

function isVerdaccioRunning() {
  try {
    execSync('lsof -i :4873 | grep LISTEN');
    return true;
  } catch (error) {
    return false;
  }
}

function getNpmRegistry() {
  const npmrcPath = path.resolve(process.env.HOME || process.env.USERPROFILE, '.npmrc');
  if (fs.existsSync(npmrcPath)) {
    const npmrcContent = fs.readFileSync(npmrcPath, 'utf-8');
    const registryMatch = npmrcContent.match(/^registry\s*=\s*(.+)$/m);
    if (registryMatch) {
      return registryMatch[1].trim();
    }
  }
  return null;
}

function switchNpmRegistry() {
  const verdaccioRunning = isVerdaccioRunning();

  if (verdaccioRunning) {
    console.log('Verdaccio is running. Switching to Verdaccio registry.');
    execSync(`npm config set registry ${VERDACCIO_URL}`);
  } else {
    console.log('Verdaccio is not running. Switching to default npm registry.');
    execSync(`npm config set registry ${DEFAULT_NPM_URL}`);
  }

  // Optional: Set proxy configurations
  // execSync('npm config set proxy http://your.proxy.url:your_proxy_port');
  // execSync('npm config set https-proxy http://your.proxy.url:your_proxy_port');

  const currentRegistry = getNpmRegistry();
  console.log('npm registry is set to:', currentRegistry ? currentRegistry : 'Not configured');
}

switchNpmRegistry();
