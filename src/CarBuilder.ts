import {Engine, PetrolEngine, DieselEngine} from "./modules/index"
import {Car} from "./Car"

export type CarColors = "red" | "green" | "blue";
export type CarWheels = 3 | 4 | 6;

export class CarBuilder{
    private engineModule:Engine;
    private colorModule:CarColors;
    private wheelsModule:CarWheels;

    public addPetrolEngine():CarBuilder{
        this.engineModule = new PetrolEngine();
        return this;
    }

    public addDieselEngine():CarBuilder{
        this.engineModule = new DieselEngine();
        return this;
    }

    public addColor(CarColors):CarBuilder{
        this.colorModule=CarColors;
        return this;
    }
    
    public addWheels(CarWheels):CarBuilder{
        this.wheelsModule = CarWheels;
        return this;
    }

    public build():Car{
        return new Car(this.engineModule,this.colorModule, this.wheelsModule);

    }



}