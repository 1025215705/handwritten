class User {
    name:any;
    auth:any;
    constructor(name:any, auth:any){
       this.name = name;
       this.auth= auth;
    }
}
   class  userFactory{
    static   createUserFactory(name:any){
        if(name=='admin')  {
            return new User(name,1);
        }
        if (name=='user'){
            return new User(name,2);
        }
      }
   }

  let user1 = userFactory.createUserFactory("admin");
  let user2 = userFactory.createUserFactory("user");
   
  console.log(user1);
  console.log(user2);
