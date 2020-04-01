import {Engine} from "./Engine";

export class DieselEngine extends Engine {
    private today: Date = new Date(Date.now());

    public ignite():void{
        const month = this.today.getMonth();
        if (month==1 || month <2){
            throw new Error ("Can't start engine in winter");
        }
    }
}