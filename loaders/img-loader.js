

function loader(buffer) {
  console.log(buffer);
  var result = bufferToBase64(buffer);
  return `module.exports=\`${result}\``
}
loader.raw = true;

module.exports = loader;


function bufferToBase64(buffer){
  return 'data:image/png;base64,' + buffer.toString('base64');
}
