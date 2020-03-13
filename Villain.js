/*Step 4
Implement the Villain class in Villain.js. A Villain should have these characteristics:
- A Villain should be a subclass of Person (hint: use "extend", and don't forget to use super() in the constructor)
- A method render() which will output HTML that represents the Villain
- You can render a simple <img> tag if you'd like! Find any old "villain" image on google
- Make sure to show the "health" of the villain too */

class Villain extends Person {
    constructor(name) {
      super(name);
    }
    renderVillain() {
        return ` 
            <h2 id="villainName">${this.name}</h2>
                <span>Health:</span>
                <h3 id="villainHealth">${this.health}</h3>
                <span>Weapon:</span>
                <h4 id="villainWeapon">${this.weapon.name}</h4>
                <img src="https://cdn-img.fimfiction.net/story/r2ly-1532044513-415076-medium" alt="" id="villainimg">
            <button class="btn btn-danger" id="attackHero">Attack Hero!</button>
        `
    }
  }