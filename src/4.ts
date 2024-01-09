class Key {
  private signature = Math.random();
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  tenants: Person[] = [];
  constructor(protected key: Key) {}
  comeIn(person: Person) {
    if (this.door) {
      console.log("Welcome to the House");
      this.tenants.push(person);
    }
  }
  showTenants() {
    console.log(this.tenants);
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key === key) {
      console.log("The door is open");
      this.door = true;
    } else {
      console.log("The door is not open");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
house.showTenants();
