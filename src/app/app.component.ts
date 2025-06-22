import { Component, inject, signal } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { RootDialogService } from "./modules/root-dialog/service/root-dialog.service";
import { Dialog1Component, IDataDialog1 } from "./components/dialog-1/dialog-1.component";
import { Dialog2Component, IDataDialog2 } from "./components/dialog-2/dialog-2.component";
import { Dialog3Component, IDataDialog3 } from "./components/dialog-3/dialog-3.component";
import { RootDialogModule } from "./modules/root-dialog/root-dialog.module";
import { JsonPipe } from "@angular/common";

type DialogComponents = Dialog1Component | Dialog2Component | Dialog3Component;
type DialogData = IDataDialog1 | IDataDialog2 | IDataDialog3;

@Component({
	selector: "app-root",
	imports: [ButtonComponent, RootDialogModule, JsonPipe],
	templateUrl: "./app.component.html"
})
export class AppComponent {
	title = "angular-dialog-sample";

	data = signal({
		name: "",
		email: ""
	});

	buttons = [
		{ id: 1, name: "Dialog 1" },
		{ id: 2, name: "Dialog 2" },
		{ id: 3, name: "Dialog 3" }
	];

	private rootDialogService = inject(RootDialogService<DialogComponents, DialogData>);

	launchDialog($index: number) {
		switch ($index + 1) {
			case 1:
				this.rootDialogService.launch({
					component: Dialog1Component,
					inputs: {
						data: {
							product: "Luxury Men's Watch",
							description:
								"OLEVS Luxury Men's Watches Waterproof Luminous Quartz Wristwatch Leather Date Sports Top Brand Male Watch for Men Relogio.",
							price: "R$1.521, 2293% desc.",
							sale: "R$ 106,59",
							url: "#",
							img: "sale.webp"
						}
					}
				});
				break;
			case 2:
				this.rootDialogService.launch({
					component: Dialog2Component,
					inputs: {
						data: {
							url: "beauty-drink.mp4"
						}
					}
				});
				break;
			case 3:
				this.rootDialogService.launch({
					component: Dialog3Component,
					inputs: {
						data: {
							title: "Register",
							callback: (result) => {
								console.log("Diálogo fechado!", result);
								this.data.set(result);
								this.rootDialogService.remove(this.rootDialogService.dialogsLength - 1);
							}
						}
					},
					hideCloseButton: true
				});
				break;
		}
	}
}
