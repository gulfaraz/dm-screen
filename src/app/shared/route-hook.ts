import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export function routeHook(url: string, callback: () => void): void {
    const router = inject(Router);
    const destroyRef = inject(DestroyRef);

    router.events
        .pipe(
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd,
            ),
            filter(({ urlAfterRedirects }) => urlAfterRedirects === url),
            takeUntilDestroyed(destroyRef),
        )
        .subscribe(callback);
}
