function Person (name, age, school, league) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.league = league;
    this.updateAge = function () {
        return ++this.age;
    };
}
let person1 = new Person ("Jimm", 19, "St.Marys", "D League");
let person2 = new Person ("Carl", 17, "Jump Start", "D League");
let person3 = new Person ("Peter", 18, "St.Marys", "D League");
let person4 = new Person ("Carl", 16, "A Stars", "B League");

