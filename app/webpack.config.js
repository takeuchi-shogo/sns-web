const webpack = require('webpack');
const path = require('path')
//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: './main.js', //エントリーポイント
    resolve: {
        alias: { 
            svelte: path.dirname(require.resolve('svelte/package.json')) //alias の名前:ディレクトリまでの絶対パス
        },
        extensions: ['.mjs', '.js', '.svelte'], //拡張子を省略でき、デフォルトを上書き
        mainFields: ['svelte', 'browser', 'module', 'main'] 
    },
    output: { //出力先
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js', // public/js に出力される
    },
    module: {
        //devtool: "eval-source-map",
        rules: [ //配列[Rule]の指定
            {
                test: /\.svelte$/, //変換するファイルの指定
                use: { //ローダーの指定
                    loader: 'svelte-loader',
                    options: {
                        preprocess: require('svelte-preprocess')({
                            scss: true,
                        }),
                        compilerOptions: {
                            dev: !prod,
                        },
                        emitCss: prod,
                        hotReload: !prod,
                    },
                },
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/, //ローダーの対象から外す
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', //CSS を CommonJS に変換する
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'sass-loader', //Sass をコンパイルする
                        options: {},
                    },
                ],
            },
        ],
    },
    plugins: [ //プラグインの設定
        //new webpack.IgnorePlugin({
        //    resourceRegExp: /^\.\/locale$/,
        //    contextRegExp: /moment$/,
        //}),
        new MiniCssExtractPlugin({ //cssファイルを別ファイルとして出力する
            filename: 'css/bundle.css',
        }),
    ],
}