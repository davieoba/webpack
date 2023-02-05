const path = require('path')

const config = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'), // absolute path
      filename: 'main.js',
    },
    devServer: {
      static: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
    },
    // We will ask webpack to generate a so-called source map for the bundle, which makes it possible to map errors that occur during the execution of the bundle to the corresponding part in the original source code
    devtool: 'source-map',
    module: {
      // transpiles the code from jsx into js
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            // will allow babel to transpile my code and make use of the latest features that are compatible with es5 standard.
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        /**
         *   The job of the css loader is to load the CSS files and the job of the style loader is to generate and inject a style element that contains all of the styles of the application.
         * 
         With this configuration, the CSS definitions are included in the main.js file of the application.

         If needed, the application's CSS can also be generated into its own separate file by using the mini-css-extract-plugin.
         */
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }
}

// note: it is possible to do this config function has an object instead of a function in most cases but, in this case we would be adding some things to the code

// The entry property of the configuration object specifies the file that will serve as the entry point for bundling the application

// The output property defines the location where the bundled code will be stored. The target directory must be defined as an absolute path, which is easy to create with the path.resolve method. We also use __dirname which is a global variable in Node that stores the path to the current directory.
module.exports = config

// difference between absolute path and relative paths

// relative paths
// traces the path from the current directory through its parent or its subdirectories and files.

// absolute paths
// An absolute path name represents the complete name of a directory or file from the /(root) directory downward.
