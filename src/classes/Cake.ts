import type { ICake } from "./ICake.js";

export class Cake implements ICake {
    getCost(): number {
        return 10;
    }
    getDescription(): string {
        return "Butter cake";
    }
};
