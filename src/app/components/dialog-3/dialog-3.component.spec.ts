import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Dialog3Component } from "./dialog-3.component";

describe("Dialog3Component", () => {
	let component: Dialog3Component;
	let fixture: ComponentFixture<Dialog3Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Dialog3Component]
		}).compileComponents();

		fixture = TestBed.createComponent(Dialog3Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("deve ser criado", () => {
		expect(component).toBeTruthy();
	});

	it("deve ter o formulário inválido inicialmente", () => {
		expect(component.form.valid).toBeFalse();
	});

	it("deve validar os campos obrigatórios", () => {
		component.form.setValue({ name: "", email: "" });
		expect(component.form.get("name")?.hasError("required")).toBeTrue();
		expect(component.form.get("email")?.hasError("required")).toBeTrue();
	});

	it("deve validar o formato do e-mail", () => {
		component.form.setValue({ name: "João", email: "email-invalido" });
		expect(component.form.get("email")?.hasError("email")).toBeTrue();
	});

	it("deve definir isSubmmit como true ao submeter", () => {
		component.submmit();
		expect(component.isSubmmit()).toBeTrue();
	});

	it("deve chamar o callback com os dados do formulário quando válido", async () => {
		const callbackMock = jasmine.createSpy("callback");

		fixture.componentRef.setInput("data", { title: "Teste", callback: callbackMock });
		fixture.detectChanges();

		component.form.setValue({ name: "Maria", email: "maria@teste.com" });
		component.submmit();

		expect(callbackMock).toHaveBeenCalledWith({ name: "Maria", email: "maria@teste.com" });
	});

	it("não deve chamar o callback se o formulário for inválido", async () => {
		const callbackMock = jasmine.createSpy("callback");

		fixture.componentRef.setInput("data", { title: "Teste", callback: callbackMock });
		fixture.detectChanges();

		component.form.setValue({ name: "", email: "" });
		component.submmit();

		expect(callbackMock).not.toHaveBeenCalled();
	});
});
