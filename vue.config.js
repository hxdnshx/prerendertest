module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/114514',
        '/1919810'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      customRendererConfig: {
        executablePath: './node_modules/puppeteer/.local-chromium/chrome.exe'
      }
    }
  }
}
