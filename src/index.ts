import { Cake } from "./classes/Cake.js";
import { ChocoDecorator } from "./classes/decorators/ChocoDecorator.js";
import { IcingDecorator } from "./classes/decorators/IcingDecorator.js";
import { StrawberryDecorator } from "./classes/decorators/StrawberryDecorator.js";

const butterCake = new Cake();
console.log(butterCake.getDescription()); // Output: Butter cake
console.log(butterCake.getCost()); // Output: 10

console.log('---------------------');

const icingCake = new IcingDecorator(butterCake);
console.log(icingCake.getDescription()); // Output: Butter cake, with icing
console.log(icingCake.getCost()); // Output: 12

console.log('---------------------');

const strawberryIcingCake = new StrawberryDecorator(new IcingDecorator(butterCake));
console.log(strawberryIcingCake.getDescription()); // Output: Butter cake, with icing, with strawberries
console.log(strawberryIcingCake.getCost()); // Output: 15

console.log('---------------------');

const chocolateStrawberryIcingCake = new ChocoDecorator(new StrawberryDecorator(new IcingDecorator(butterCake)));
console.log(chocolateStrawberryIcingCake.getDescription()); // Output: Butter cake, with icing, with strawberries, with chocolate
console.log(chocolateStrawberryIcingCake.getCost()); // Output: 19
