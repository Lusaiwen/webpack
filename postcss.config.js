module.exports = {
    map: false, //关闭source-map
    plugins: {
        "postcss-preset-env": {
            stage: 0,
            preserve: false
        },
        "postcss-apply": {},
        "postcss-color-function": {}
    }
}