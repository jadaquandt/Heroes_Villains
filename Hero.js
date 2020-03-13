/*Step 3
Implement the Hero class in Hero.js. A Hero should have these characteristics:
- A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() in the constructor)
- A method render() which will output HTML that represents the Hero
- You can render a simple <img> tag if you'd like! Find any old "hero" image on google
- Make sure to show the "health" of the hero too */
class Hero extends Person {
    constructor(name) {
      super(name);
    }
    renderHero() {
        return ` 
            <h2 id="heroName">${this.name}</h2>
            <span>Health:</span>
                <h3 id="heroHealth">${this.health}</h3>
                <span>Weapon:</span>
                <h4 id="heroWeapon">${this.weapon.name}</h4>
                <img src="https://miro.medium.com/fit/c/256/256/1*sKos1oKmLWXzkS0wX3uCBQ.png" alt="" id="heroimg">
        <button class="btn btn-danger" id="attackVillain">Attack Villain!</button>
    `
    }
  }
