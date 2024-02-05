// Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    allDetails() {
        return `
            Name: ${this.name}
            Age: ${this.age}
            Gender: ${this.gender}
            Email: ${this.email}
       `;
    }
}

let person = new Person("Giri", 30, "Male", "giri@gmail.com");
console.log(person.allDetails());


// ------------------------------------------------------------------------------
// write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const fareWithoutBookingFee = (this.baseFare + (this.costPerMinute * timeInMinutes) + (this.costPerMile * distanceInMiles));
        const totalFare = fareWithoutBookingFee + this.bookingFee;
        return totalFare;
    }
}


var uberX = new UberPriceCalculator(2.5, 0.35, 1.75, 1.5);
var distance = 10;
var time = 20;
var totalPrice = uberX.calculatePrice(distance, time);
console.log("Total Uber price:", totalPrice.toFixed(2));

