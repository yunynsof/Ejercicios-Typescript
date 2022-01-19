import {ItemAbs} from "./itemAbs";
import {Item} from "./item";

export class AgedBrie extends ItemAbs{
    name: string;
    sellIn: number;
    quality: number;

    constructor(items: Item) {
		super();
        this.name = items.name;
        this.sellIn = items.sellIn;
        this.quality = items.quality;
    }
	
	 result(): Item {
		
		if (this.quality < 50) {
			if (this.sellIn < 0) {
				this.quality = this.quality + 2;
				if (this.quality > 50) {
					this.quality = 50;
				}
			} else {
				this.quality = this.quality + 1;
			}
		}
		this.sellIn = this.sellIn - 1;
		const items: Item = new Item(this.name, this.sellIn, this.quality);
		return items;
	}
} 