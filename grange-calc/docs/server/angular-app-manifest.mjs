
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
    'index.csr.html': {size: 459, hash: '4b5640ac3a847e6542a043339f1efba0d5cf9ffcd8d4cd0dd1d37928b1a02ad0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 972, hash: 'e96d426aa9a30f272fa70cb18360eaf3839d702633c413d08a9a4e1301d522f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 716, hash: '68c1fb98cfda7eaa0b7c22b1bd5414c78f55ba96f62613c540244bd788d6b32e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
