

const playButton = document.getElementById("myBtn");

playButton.addEventListener("click", function(){
//prompts:
    let getHero = prompt("Please enter your Hero's name", "Harry Potter");
    let getVillain = prompt("Please enter your Villain's name", "Voldemort");

//use "new" to get Classes
    const heroPlayer = new Hero(getHero);
    const villainPlayer = new Villain(getVillain);

//Decided to make the weapons the user choice for added pizzazz
    let getHeroWeapon = prompt(`${heroPlayer.name}, choose your weapon!`, "Friendship");
    let getVillainWeapon = prompt(`${villainPlayer.name}, choose your weapon!`, "Tons of Evil Shiz");

    heroPlayer.equipWeapon(new Weapon(getHeroWeapon));
    villainPlayer.equipWeapon(new Weapon(getVillainWeapon));

/* Old code where I chose the weapons
//Create and equip a weapon for each player…again you'll use the equipWeapon() method and pass a new Weapon into it! Don't forget to read the links from earlier!
heroPlayer.equipWeapon(new Weapon("Super-Strength"));
villainPlayer.equipWeapon(new Weapon("Rocket Launcher")); */

//Get container to render html to and render Hero to it
    const heroContainer = document.getElementById("hero");
    heroContainer.innerHTML = heroPlayer.renderHero();

//Get container to render html to and render Villain to it
    const villainContainer = document.getElementById("villain");
    villainContainer.innerHTML = villainPlayer.renderVillain();

//Start by creating an event listener for each button, the event will be a click and an anonymous function. Starting with the hero button, the anonymous function from the onClick will need to:
//Use the players attack() method to pass in whose being attacked
//Should update the health of the player who was attacked
//Check “if” the game has been won yet. If the game has been won it should end.
    let heroPlayerHealth = document.getElementById('heroHealth');
    let villainPlayerHealth = document.getElementById('villainHealth');

    const attackVillainButton = document.getElementById("attackVillain");

    attackVillainButton.addEventListener("click", function(){
        heroPlayer.attack(villainPlayer);
        if (villainPlayer.health <= 0) {
            alert("Victory! Hero has won!");
        }
        villainPlayerHealth.innerHTML = villainPlayer.health
    });

    const attackHeroButton = document.getElementById("attackHero");

    attackHeroButton.addEventListener("click", function(){
        villainPlayer.attack(heroPlayer);
        if (heroPlayer.health <= 0) {
            alert("GAME OVER. Whomp whomp, the villian won.");
        }
        heroPlayerHealth.innerHTML = heroPlayer.health
    });
    //- When the Hero's health goes below 1, show "Game over"
    // When the Villain's health goes below 1, show "Victory!"
        
});
