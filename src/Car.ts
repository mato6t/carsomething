import {Engine} from "./modules/Engine";
import * as colors from "colors/safe";
export type CarColors = "red" | "green" | "blue";
export type CarWheels = 3 | 4 | 6;

export class Car{

    constructor(
        private engineModule: Engine,
        private colorModule: CarColors,
        private wheelsModule: CarWheels
    ){

    }

    public start(): void{
        try {
            this.engineModule.ignite();
            console.log("Successfully ignited the engine.");
        } catch {
            console.log("Can't start an engine.");
            return;
        }
        switch(this.colorModule){
            case "red":
                console.log(colors.red("this car blue"));
                break;
            case "blue":
                console.log(colors.blue("this car blue"));
                break;
            case "green":
                console.log(colors.green("this car green"));
                break;
        }
    }
}