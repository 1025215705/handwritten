class observer{
  update:any;
  constructor(fn:any){
    this.update = fn;
}
}
class  Subject{
  observerSubject:any[];
 constructor(){
   this.observerSubject = [];
 }

 addObserver(observer:any){
   this.observerSubject.push(observer);
 }

 notify(){
     this.observerSubject.forEach(observer => {
        observer.update();
     });
 }
}
let update = function(){
    console.log("被观察者发出通知")
}

 let observer1 = new observer(update);
 let observer2 = new observer(update);
 let subject1= new Subject();
 subject1.addObserver(observer1);
 subject1.addObserver(observer2);
 subject1.notify();
