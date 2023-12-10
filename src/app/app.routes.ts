import { Routes } from '@angular/router';
import { UnitsListComponent } from './workers/units-list/units-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UnitsComponent } from './units/units.component';

export const routes: Routes = [{
    path: '',
    component: UnitsComponent,
    children: [{
        path: '',
        component: UnitsListComponent
    }, {
        path: ':unitId',
        loadChildren: () => import('./workers/workers.routes').then(mod => mod.WORKER_ROUTES),
    }]
}, {
    path: '**',
    component: NotFoundComponent
}];
