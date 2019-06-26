module.exports = {
  publicPath: process.env.BASE_PATH || '/',
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
