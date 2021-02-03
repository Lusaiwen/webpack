import NumberTimer from '../util/number'
import appendNumber from './appendNumber'


var n = new NumberTimer();
n.onNumnerCreated = (n, isPrime) => {
  appendNumber(n, isPrime);
}


n.start();

var isStart = true;
window.onclick = function (){
  if(isStart){
    isStart = false;
    n.stop();
  }else {
    isStart = true;
    n.start();
  }
}