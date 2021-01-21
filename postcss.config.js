const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');

module.exports = {
    plugins: process.env.NODE_ENV === 'development' ? [
        postcssEasyImport({
            path: ['src/css']
        }),
        postcssPresetEnv(),
    ] : [
        postcssEasyImport({
            path: ['src/css']
        }),
        postcssPresetEnv(),
        cssnano(),
    ],
};