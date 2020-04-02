import {CarBuilder} from "./CarBuilder"
import { Car } from "./Car"
import {Engine, PetrolEngine, DieselEngine} from "./modules/index"

let car = new CarBuilder();
car.addWheels(4);
car.addColor("green");
car.addPetrolEngine();


let my_car:Car=car.build();
my_car.start();

let car2:Car = new Car(new DieselEngine(), "red",   4);
car2.start();