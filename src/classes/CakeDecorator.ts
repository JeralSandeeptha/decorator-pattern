import type { ICake } from "./ICake.js";

export abstract class CakeDecorator implements ICake {

    protected cake: ICake;

    constructor(cake: ICake) {
        this.cake = cake;
    }

    abstract getDescription(): string

    abstract getCost(): number;
};
