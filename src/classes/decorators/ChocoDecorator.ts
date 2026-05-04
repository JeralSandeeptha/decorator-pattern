import { CakeDecorator } from "../CakeDecorator.js";
import type { ICake } from "../ICake.js";

export class ChocoDecorator extends CakeDecorator {

    constructor(cake: ICake) {
        super(cake);
    }
    
    public getCost(): number {
        return this.cake.getCost() + 4;
    }

    public getDescription(): string {
        return `${this.cake.getDescription()}, with chocolate`;
    }
};
