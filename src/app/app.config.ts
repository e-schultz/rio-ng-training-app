import { AppConfig } from './app-config';
export { AppConfig } from './app-config';

import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    apiBaseUrl: 'http://localhost:3000'
  })
});

// export const HERO_DI_CONFIG: AppConfig = {
//   apiBaseUrl: 'http://localhost:3000'
// };

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
