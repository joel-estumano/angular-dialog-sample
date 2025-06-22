import { ModuleWithProviders, NgModule } from "@angular/core";
import { NgClass, NgComponentOutlet } from "@angular/common";
import { RootDialogComponent } from "./component/root-dialog.component";
import { RootDialogService } from "./service/root-dialog.service";
import { ButtonComponent } from "../../components/button/button.component";

@NgModule({
	declarations: [RootDialogComponent],
	imports: [NgClass, NgComponentOutlet, ButtonComponent],
	exports: [RootDialogComponent]
})
export class RootDialogModule {
	static forRoot(): ModuleWithProviders<RootDialogModule> {
		return {
			ngModule: RootDialogModule,
			providers: [RootDialogService]
		};
	}
}
