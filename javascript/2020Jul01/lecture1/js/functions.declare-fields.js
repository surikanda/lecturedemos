class Person {
    constructor(firstName, lastName, favoriteColors) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColors = favoriteColors;
        this.speak = function(someThingToBeSaid) {
            return this.firstName + " says '" + someThingToBeSaid + "'.";
        }

        this.speakOutLoud = function(someThingToBeSaid) {
           console.log(this.speak(someThingToBeSaid));
        }
        // this method requires 2 arguments, and 1 optional argument with a default value of 10
        this.speakRepeatedly = function(someThingToBeSaid, numberOfTimeToSay=10) {
            for(let i=0; i<numberOfTimeToSay; i++) {
                this.speakOutLoud(someThingToBeSaid)
            }
        }

        this.defaultSpeakRepeatedly = function(someThingToBeSaid, numberOfTimeToSay) {
            this.speakRepeatedly(someThingToBeSaid, numberOfTimeToSay);
        }
    }
}



let leon = new Person("leon", "hunter", []);
leon.speakRepeatedly("Hello world!", 15);