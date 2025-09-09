
export default {
  basePath: '/StardewValleyGrangeCalc',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
