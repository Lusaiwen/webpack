module.exports = class FileListPlugin {
  apply(compiler) {
    //在这里注册事件，类似于window.onload  $(function(){})
    compiler.hooks.emit.tap('FileListPlugin-done', compilation => {
      var fileList = [];

      for(const key in compilation.assets){
        var content = `【${key}】
文件大小${compilation.assets[key].size() / 1000}KB`;
        fileList.push(content);
      }
      var str = fileList.join('\n\n')
      compilation.assets['fileList.txt'] = {
        source(){
          return str;
        },
        size(){
          return str.length;
        }
      }

    });
  }
};
