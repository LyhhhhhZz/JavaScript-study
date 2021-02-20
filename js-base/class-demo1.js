class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }

  sayHi () {
    console.log(
      `姓名 ${this.name} , 学号 ${this.number} sayhi`
    )
  }
}

const lyh = new Student('lyh', 19)
console.log(lyh.name)
console.log(lyh.number)
lyh.sayHi()