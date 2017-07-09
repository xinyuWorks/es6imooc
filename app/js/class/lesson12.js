{
  class Person{
    constructor(name="majian"){
      this.name=name;
      this.age=22;

    };
    get loginName(){
      return 'K爱尔兰'+this.name;
    };
    set loginName(value){
      this.name=value;
    };
    static tell(){
      console.log('hello world');
    };
  

  }
  let one = new Person('Kael');
  console.log(one);
  class Child extends Person{
      constructor(name='child'){
        super("hello  world");
        this.type='size';
      }

  }
  let childone = new Child('God');
  console.log(childone);
  console.log(one.loginName);
  one.loginName='xxxxxxxxxxx';
  console.log(one.loginName);
  Person.tell();

}
