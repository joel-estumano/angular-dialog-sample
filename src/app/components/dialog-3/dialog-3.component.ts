import { ButtonComponent } from "../button/button.component";
import { Component, inject, input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

export interface IDataDialog3 {
	title: string;
	callback?: (result?: string) => void;
}

@Component({
	selector: "app-dialog-3",
	templateUrl: "./dialog-3.component.html",
	imports: [FormsModule, ReactiveFormsModule, ButtonComponent]
})
export class Dialog3Component {
	data = input<IDataDialog3>();

	private fb = inject(FormBuilder);
	protected form!: FormGroup;

	constructor() {
		this.form = this.fb.group({
			name: new FormControl(),
			email: new FormControl()
		});
	}

	submmit() {
		if (this.data()?.callback) {
			this.data()?.callback?.(this.form.value);
		}
	}
}
