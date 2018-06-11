
export default (api) => {
  const { config } = api.service;

  api.register('modifyHTML', ({ memo }) => {
    if (config.modifyHtml) {
      return `hello\r\n${memo}`;
    } else {
      return memo;
    }
  });

  api.register('modifyConfigPlugins', ({ memo }) => {
    memo.push(() => ({
      name: 'modifyHtml',
      onChange() {},
    }));
    return memo;
  });
}
