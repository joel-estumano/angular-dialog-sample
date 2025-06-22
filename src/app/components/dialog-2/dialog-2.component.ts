import { Component, input } from "@angular/core";

export interface IDataDialog2 {
	url: string;
}

@Component({
	selector: "app-dialog-2",
	templateUrl: "./dialog-2.component.html"
})
export class Dialog2Component {
	data = input<IDataDialog2>();
}
