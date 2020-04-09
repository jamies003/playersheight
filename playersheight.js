function Person (name, age, school, league) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.league = league;
    this.updateAge = function () {
        return ++this.age;
    };
}
