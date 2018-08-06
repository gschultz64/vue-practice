const app = new Vue({
  el: "#app",
  data: { 
    name: "bobby",
    age: 25,
    // can also create objects within data 
    bobby: {
      first: "Bobby",
      last: "Boone",
      age: 25
    },
    john: {
      first: "John",
      last: "Smith",
      age: 35
    }
  },
  computed: {
    bobbyFullName() {
      return `${this.bobby.first} ${this.bobby.last}`
    },
    johnFullName() {
      return `${this.john.first} ${this.john.last}`
    },
    johnAgeInOneYear() {
      return this.john.age + 1;
    }
  },
  filters: {
    FullName(value) {
      return `${value.first} ${value.last}`;
    }
  },
  template: `
    <div>
      <h2>Name: {{johnFullName}}</h2>
      <h2>Name: {{john | fullName}}</h2>
      <h3>Age: {{johnAgeInOneYear}}</h3>
      <h2>Name: {{bobby.FullName}}</h2>
      <h2>Name: {{bobby | fullName}}</h2>
      <h3>Age: {{bobby.age}}</h3>
    </div>
  `
})