// Write your JS here

var hero = {
    name: 'Link',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type: 'Master sword',
        damage: 2
    }
}




function rest(a){return hero.health = a;} rest(10)
//function rest(a){if (hero.health !== 10) {return hero.health = a;}} rest(10)

hero.inventory.type = 'dagger'
hero.inventory.damage = '2'
function pickUpItem() {hero.inventory.weapon.push('dagger')}


function equipWeapon() {}
for (var i = 0; i <= (hero.weapon.length- 1); i++)
{hero.inventory.weapon.push('dagger',2)}