/*Step 5
Implement the Weapon class in Weapon.js. A Weapon should have these characteristics:
- A property called "name", which is a string passed in through the constructor
- A property called "damage", which is a random number between 10 and 20 */
//The value for “damage” will calculate a random number. 

//Found the damage calculator with a Google Search

class Weapon {
    constructor(name){
        this.name = name;
        this.damage = Math.floor(Math.random() * (20 - 10 + 1) + 10)
        }
    }

