class SingletonLogin{
    name:any;
    password:any;
  static instance:any;
    constructor(name:any, password:any){
        this.name = name;
        this.password= name;
    }
    static getInstance(name:any, password:any){
        if(!this.instance){
            this.instance = new SingletonLogin(name, password);
        }
        return this.instance;
    }
}

 let s1 =  SingletonLogin.getInstance("张三","123456");
 let s2 =  SingletonLogin.getInstance("李四","123456");

 console.log(s1);
 console.log(s2);
 console.log(s1===s2);