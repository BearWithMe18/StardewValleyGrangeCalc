
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/StardewValleyGrangeCalc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/StardewValleyGrangeCalc"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 459, hash: '096e74addc2c91375207e3e4bd40734f0f4964373fc85d3b7be52579ba1a45da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 972, hash: '52271a26c762c74940be34cffe0128088cfcb6134304dc23d51f86f66979c550', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21593, hash: '8b566067a837040dbee4f82593fa8523848b09b7b7d6e7faa5666f844cc47122', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
