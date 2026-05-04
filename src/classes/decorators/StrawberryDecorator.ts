import { CakeDecorator } from "../CakeDecorator.js";
import type { ICake } from "../ICake.js";

export class StrawberryDecorator extends CakeDecorator {

    constructor(cake: ICake) {
        super(cake);
    }

    public getCost(): number {
        return this.cake.getCost() + 3;
    }
    public getDescription(): string {
        return `${this.cake.getDescription()}, with strawberries`;
    }
};
