class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi, I'm ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    return 'testing'
  }
}

const me = new Student('Sergei Komarov', 26, 'Computer Science')
console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())