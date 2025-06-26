import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RootDialogService } from "./modules/root-dialog/service/root-dialog.service";
import { Dialog1Component } from "./components/dialog-1/dialog-1.component";
import { Dialog2Component } from "./components/dialog-2/dialog-2.component";
import { Dialog3Component } from "./components/dialog-3/dialog-3.component";
import { of } from "rxjs";
import { IDialogComponentOutletData } from "./modules/root-dialog/interfaces/dialog-component-outlet-data";

describe("AppComponent", () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	let rootDialogServiceSpy: jasmine.SpyObj<RootDialogService<unknown, unknown>>;

	beforeEach(async () => {
		rootDialogServiceSpy = jasmine.createSpyObj("RootDialogService", ["launch", "remove", "observable"], {
			dialogsLength: 1
		});

		rootDialogServiceSpy.observable.and.returnValue(of([] as IDialogComponentOutletData<unknown, unknown>[]));

		await TestBed.configureTestingModule({
			imports: [AppComponent],
			providers: [{ provide: RootDialogService, useValue: rootDialogServiceSpy }]
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("deve ser criado", () => {
		expect(component).toBeTruthy();
	});

	it("deve chamar launchDialog com Dialog1Component", () => {
		component.launchDialog(0);
		expect(rootDialogServiceSpy.launch).toHaveBeenCalledWith(jasmine.objectContaining({ component: Dialog1Component }));
	});

	it("deve chamar launchDialog com Dialog2Component", () => {
		component.launchDialog(1);
		expect(rootDialogServiceSpy.launch).toHaveBeenCalledWith(jasmine.objectContaining({ component: Dialog2Component }));
	});

	it("deve chamar launchDialog com Dialog3Component e configurar callback", () => {
		component.launchDialog(2);

		const args = rootDialogServiceSpy.launch.calls.mostRecent().args[0];
		expect(args.component).toBe(Dialog3Component);

		// Simula resultado de callback
		const resultadoMock = { name: "Joel", email: "joel@dev.com" };
		args.inputs.data.callback?.(resultadoMock);

		expect(component.data()).toEqual(resultadoMock);
		expect(rootDialogServiceSpy.remove).toHaveBeenCalledWith(0);
	});
});
