import isPrime from "./isPrime";


export default class NumberTimer {
  constructor(duration = 500){
    this.duration = duration;
    this.num = 1;
    this.timer = null;
    this.onNumnerCreated = null;
  }


  start(){  
    if(this.timer){
      return;
    }
    this.timer = setInterval(() => {
      this.onNumnerCreated && this.onNumnerCreated(this.num, isPrime(this.num));
      this.num ++;
    }, this.duration)
  }

  stop(){
    clearInterval(this.timer);
    this.timer = null;
  }

}