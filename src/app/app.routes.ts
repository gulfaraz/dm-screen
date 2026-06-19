import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sound-board' },
    {
        path: 'sound-board',
        loadComponent: () =>
            import('./bgm/bgm.component').then((m) => m.BgmComponent),
    },
    {
        path: 'alignment-tracker',
        loadComponent: () =>
            import('./alignment-tracker/alignment-tracker.component').then(
                (m) => m.AlignmentTrackerComponent,
            ),
    },
    {
        path: 'scenes',
        loadComponent: () =>
            import('./scenes/scenes.component').then((m) => m.ScenesComponent),
    },
    {
        path: 'rules',
        loadComponent: () =>
            import('./rules/rules.component').then((m) => m.RulesComponent),
    },
    {
        path: 'privacy',
        loadComponent: () =>
            import('./bulletin/bulletin.component').then(
                (m) => m.BulletinComponent,
            ),
    },
    {
        path: 'terms',
        loadComponent: () =>
            import('./bulletin/bulletin.component').then(
                (m) => m.BulletinComponent,
            ),
    },
    {
        path: 'unknown',
        loadComponent: () =>
            import('./bulletin/bulletin.component').then(
                (m) => m.BulletinComponent,
            ),
    },
    { path: '**', redirectTo: 'unknown' },
];
