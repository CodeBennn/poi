module.exports = (options, req) => ({
    // https://doc.webpack-china.org/concepts/entry-points/
    entry: {
        'index': './src/index.js',
    },
    dist: 'public',
    // https://github.com/jantimon/html-webpack-plugin
    html: [{
        chunk: 'index',
        filename: 'index.html',
        template: './src/index.html'
    }],
    filename: {
        js: 'assets/[name].js',
        css: 'assets/[name].css',
        // fonts: 'assets/fonts/[name].[ext]',
    },
    staticFolder: "static",
    // Other options
    sourceMap: true,
    presets: [
    
    ],
});
