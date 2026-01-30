import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sound-board',
    },
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
        path: 'rules',
        loadComponent: () =>
            import('./rules/rules.component').then((m) => m.RulesComponent),
    },
    {
        path: 'privacy',
        loadComponent: () =>
            import('./legal/legal.component').then((m) => m.LegalComponent),
    },
    {
        path: 'terms',
        loadComponent: () =>
            import('./legal/legal.component').then((m) => m.LegalComponent),
    },
];
