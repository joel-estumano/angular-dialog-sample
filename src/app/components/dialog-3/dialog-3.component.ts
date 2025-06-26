import { NgClass } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { Component, inject, input, signal } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

export interface IDataDialog3 {
	title: string;
	callback?: (result?: string) => void;
}

@Component({
	selector: "app-dialog-3",
	templateUrl: "./dialog-3.component.html",
	imports: [FormsModule, ReactiveFormsModule, ButtonComponent, NgClass]
})
export class Dialog3Component {
	data = input<IDataDialog3>();

	private fb = inject(FormBuilder);
	form!: FormGroup;

	isSubmmit = signal(false);

	constructor() {
		this.form = this.fb.group({
			name: new FormControl("", [Validators.required]),
			email: new FormControl("", [Validators.required, Validators.email])
		});
	}

	submmit() {
		this.isSubmmit.set(true);
		if (this.form.valid) {
			if (this.data()?.callback) {
				this.data()?.callback?.(this.form.value);
			}
		}
	}
}
