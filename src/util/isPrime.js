
/**
 *
 * 判断一个数是否为质数
 * @export
 * @param {*} num
 * @returns
 */
export default function isPrime(num){
  if(num < 2) return false;
  for(var i = 2; i < num; i ++) {
    //发现，2到n-1之间，有一个数能整除n
    if(num % i == 0) {
      return false;
    }
  }
  return true;
}