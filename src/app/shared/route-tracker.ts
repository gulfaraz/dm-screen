import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

export function injectCurrentRoute(initial = '/') {
    const router = inject(Router);

    return toSignal(
        router.events.pipe(
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd,
            ),
            map(
                () =>
                    '/' +
                    router.routerState.snapshot.root.firstChild?.routeConfig
                        ?.path,
            ),
        ),
        { initialValue: initial },
    );
}
