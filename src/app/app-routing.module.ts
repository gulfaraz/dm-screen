import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DMScreenComponent } from './dm-screen.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: DMScreenComponent,
                    children: [
                        {
                            path: '',
                            pathMatch: 'full',
                            redirectTo: 'bgm',
                        },
                        {
                            path: 'bgm',
                            loadChildren: () =>
                                import('./bgm/bgm.module').then(
                                    (m) => m.BgmModule,
                                ),
                        },
                        {
                            path: 'alignment-tracker',
                            loadChildren: () =>
                                import(
                                    './alignment-tracker/alignment-tracker.module'
                                ).then((m) => m.AlignmentTrackerModule),
                        },
                        {
                            path: 'rules',
                            loadChildren: () =>
                                import('./rules/rules.module').then(
                                    (m) => m.RulesModule,
                                ),
                        },
                        {
                            path: 'privacy',
                            loadChildren: () =>
                                import('./legal/legal.module').then(
                                    (m) => m.LegalModule,
                                ),
                        },
                        {
                            path: 'terms',
                            loadChildren: () =>
                                import('./legal/legal.module').then(
                                    (m) => m.LegalModule,
                                ),
                        },
                    ],
                },
            ],
            { useHash: true },
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
