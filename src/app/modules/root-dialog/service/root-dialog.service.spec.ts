import { TestBed } from "@angular/core/testing";

import { RootDialogService } from "./root-dialog.service";

describe("RootDialogService", () => {
	let service: RootDialogService<unknown, unknown>;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RootDialogService<unknown, unknown>);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
