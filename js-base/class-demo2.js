class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat`);
  }
}

class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  study() {
    console.log(`${this.name} ${this.number} study`);
  }
}

const lyh = new Student('lyh', 19)
lyh.eat()
lyh.study()
console.log(lyh.name);
console.log([] instanceof Object);