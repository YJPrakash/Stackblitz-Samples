var webpack = require('webpack');

module.exports = {
    entry: {
        main: './index.js',
        vendor: ['jquery','@stackblitz/sdk']
    },
    output: {
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    // test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                    // name: (module)=>{
                    //     retrun "jquery";
                    // },
                    name: 'vendor',
                    // chunks: 'all',
                    chunks(chunk) {
                        // exclude `my-excluded-chunk`
                        console.log("chunk.name", chunk.name);
                        return chunk.name !== 'webpack' && chunk.name !== '@stackblitz/sdk';
                    }                
                }
            }
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
        // ,
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     output:{
        //         filename: '[name].js'
        //     },
        //     minChunks: Infinity
        // })
    ]
};
