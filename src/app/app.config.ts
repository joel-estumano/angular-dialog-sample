import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { RootDialogModule } from "./modules/root-dialog/root-dialog.module";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		importProvidersFrom([
			RootDialogModule.forRoot() // Configuração global para RootDialogModule (módulo de dialogs)
		])
	]
};
