const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'vue-style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {
              data: `
                @import "@/scss/_app.scss";
              `,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    }
  },
}
