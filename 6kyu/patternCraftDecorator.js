// 6 kyu PatternCraft - Decorator
//
// The Decorator Design Pattern can be used, for example, in the StarCraft game to manage upgrades.
//
// The pattern consists in "incrementing" your base class with extra functionality.
//
// A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".
// Your Task
//
// Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.
//
// You have 3 classes:
//
//     Marine: has a damage and an armor properties
//     MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine
//
// Answer:
class Marine {
  #_damage;
  #_armor;
  constructor(_damage, _armor) {
    this.#_damage = _damage;
    this.#_armor = _armor;
  }

  get damage() {
    return this.#_damage;
  }
  set damage(value) {
    this.#_damage = value;
  }

  get armor() {
    return this.#_armor;
  }
  set armor(value) {
    this.#_armor = value;
  }
}

class MarineWeaponUpgrade {
  constructor(marine) {
    return new Marine(marine.damage + 1, marine.armor);
  }
}

class MarineArmorUpgrade {
  constructor(marine) {
    return new Marine(marine.damage, marine.armor + 1);
  }
}
