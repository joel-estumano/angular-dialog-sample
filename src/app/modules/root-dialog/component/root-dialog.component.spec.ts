import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RootDialogComponent } from "./root-dialog.component";

describe("RootDialogComponent", () => {
	let component: RootDialogComponent<unknown, unknown>;
	let fixture: ComponentFixture<RootDialogComponent<unknown, unknown>>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RootDialogComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(RootDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
