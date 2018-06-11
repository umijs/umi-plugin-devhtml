const got = require('got');
const { writeFileSync } = require('fs');
const { join } = require('path');

module.exports = function (api) {
  if (process.env.NODE_ENV !== 'development') return;

  const PORT = parseInt(process.env.PORT, 10) || 8000;
  const HOST = process.env.HOST || '127.0.0.1';
  const PROTOCOL = process.env.HTTPS ? 'https' : 'http';
  const url = `${PROTOCOL}://${HOST}:${PORT}/`;
  const { paths } = api.service;
  const { debug } = api.utils;
  const htmlPath = join(paths.absTmpDirPath, 'index.html');

  function saveDevHtml() {
    debug('Save html start');
    got(url).then(res => {
      debug(`Save html success, write to ${htmlPath}`);
      writeFileSync(htmlPath, res.body, 'utf-8');
    }).catch(e => {
      debug(`Save html failed: ${e}`);
    });
  }

  if (config.exportStatic) {
    throw new Error(`umi-plugin-devHtml don't support MPA(multiple page application)`);
  }

  api.register('onStart', () => {
    saveDevHtml();
  });

  api.register('onUserConfigChange', () => {
    debug('Config changed, try to save new html');
    saveDevHtml();
  });
};
