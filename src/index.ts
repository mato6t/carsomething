import {CarBuilder} from "./CarBuilder"
import { Car } from "./Car"

let car = new CarBuilder();
car.addPetrolEngine();
car.addColor("blue");
car.addWheels(4);
let my_car:Car=car.build();
my_car.start();

