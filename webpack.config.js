const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    // メインとなるJavaScriptファイル（エントリーポイント）
    //entry: './src/index.tsx',
    entry: [
        './src/js/index.js',
        './src/react/index.tsx',
        './src/ts/index.ts',
    ],
    // ファイルの出力設定
    output: {
        // 出力ファイルのディレクトリ名
        path: path.join(__dirname, 'dist'),
        // 出力ファイル名
        filename: '[name].js',
    },
    module: {
        rules: [
            //TypeScriptファイルの読み込みとコンパイル
            {
                test: /\.(ts|tsx)$/,
                use: [{
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env', '@babel/react'] },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
            },

            // Sassファイルの読み込みとコンパイル
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },

            {
                // 対象となるファイルの拡張子
                test: /\.(gif|png|jpg|svg)$/,
                // 画像をBase64として取り込む
                type: "asset/inline",
            },
        ],
    },
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        port: 1110,
    },
    // React TypeScript環境必須設定
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    target: ["web", "es5"],
    // キャッシュ有効
    cache: false,
};