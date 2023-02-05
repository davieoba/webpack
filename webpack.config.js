const path = require('path')

const config = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'), // absolute path
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
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
