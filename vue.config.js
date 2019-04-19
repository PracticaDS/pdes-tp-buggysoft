module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pdes-tp-buggysoft/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_app.scss";
        `,
      },
    },
  },
};
