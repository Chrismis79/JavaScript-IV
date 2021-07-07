//=== GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */
class GameObject {
    constructor(attrs){
        this.createdAt = attrs.createdAt,
        this.name = attrs.name,
        this.dimensions = attrs.dimensions
    }
    destroy(){
        return `${this.name} was removed from the game.`;
      }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
    constructor(charaAttrs){
        super(charaAttrs)
    this.healthPoints = charaAttrs.healthPoints;
}
  takeDamage(){
    return `${this.name} took damage`;
  }
} 
 

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
    constructor(humanAttrs){
      super(humanAttrs);
      this.team = humanAttrs.team,
      this.weapons = humanAttrs.weapons,
      this.language = humanAttrs.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`
      }
    }
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
 

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  //Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  // function Hero(attrs){
  //   Humanoid.call(this, attrs)
  // }
  // Hero.prototype.strike = function(){
  //   villian.healthPoints-1;
  //   console.log(hero.healthPoints)
  //   if(hero.healthPoints === 0){
  //     return console.log('Game Over');
  //   }
  // }
  // Hero.prototype = Object.create(Humanoid.prototype);
  // function Villian(attrs){
  //   Hero.call(this, attrs)
  // }

  // function Villian(attrs){
  //   Humanoid.call(this, attrs)
  // }

  // Villian.prototype.laser = function(){
  //   hero.healthPoints-2;
  //   console.log(villian.healthPoints);
  //   if(villian.healthPoints === 0){
  //     return console.log('Game is Over')
  //   }
  // }
  // Villian.prototype = Object.create(Humanoid.prototype);

//   const hero = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 3,
//       width: 1.5,
//       height: 2,
//     },
//     healthPoints: 6,
//     name: 'Merlin',
//     team: 'Knights of the Round Table',
//     weapons: [
//       'Lightening rod',
//     ],
//     language: 'Common Tongue',
//   });

//   const villian = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 4,
//       width: 2,
//       height: 2.5,
//     },
//     healthPoints: 7,
//     name: 'Dr. Evil',
//     team: 'Evil Gang',
//     weapons: [
//       'Lasers',
//     ],
//     language: 'Common Tongue',
//   });

  
  
  // console.log(hero.weapons);
  // console.log(hero.takeDamage());
  // console.log(Villian.laser());
  // console.log(Hero.strike());
