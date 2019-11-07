// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * 3.1415;
    }

    get area() {
        return (this.radius ** 2) * 3.1415;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference / 2) / 3.1415;
    }
}