import { Component, input } from "@angular/core";

export interface IDataDialog1 {
	product: string;
	description: string;
	price: string;
	sale: string;
	url: string;
	img: string;
}

@Component({
	selector: "app-dialog-1",
	templateUrl: "./dialog-1.component.html"
})
export class Dialog1Component {
	data = input<IDataDialog1>();
}
