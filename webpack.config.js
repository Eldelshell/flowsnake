const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const NPM_INFO = require('./package.json');

/**
 * Minimize the code.
 */
const uglifyJSPlugin = new UglifyJSPlugin();

/**
 * Generate a ZIP file with the content of dist/ on releases/
 */
const zipPlugin = new ZipPlugin({
    path: './',
    filename: `${NPM_INFO.name}-${NPM_INFO.version}.zip`
});

/**
 * Deletes dist/ every time webpack is run. When using watch, this doesn't run again, so we're safe.
 */
const cleanPlugin = new CleanWebpackPlugin(['dist/*'])

const plugins = [
    cleanPlugin,
    uglifyJSPlugin
];

const externals = {
    mathjs: 'mathjs',
    decimaljs: 'decimal.js',
    lodash : {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_"
    }
};

module.exports = {
    entry: './lib/index.js',
    output: {
        filename: `${NPM_INFO.name}-${NPM_INFO.version}.min.js`,
        path: path.resolve(__dirname, 'dist'),
        library: 'flowsnake',
        libraryTarget: 'umd'
    },
    externals: externals,
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    }
};
