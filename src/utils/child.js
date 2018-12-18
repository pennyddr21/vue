import Parent from './parent'
class Child extends Parent {
  constructor (x, y, z) {
    super(x, y)
    this.childName = z
  }

  say () {
    console.log(this.name + '.22..' + this.age)
  }

  sayHello () {
    console.log('sayHi:' + this.childName)
    this.say() // 调用子类重名方法 this调用不到父类方法.可以调用父类属性
    super.say() // 调用父类重名方法 super调用不到父类属性.可以调用父类方法
  }
}

export default Child
