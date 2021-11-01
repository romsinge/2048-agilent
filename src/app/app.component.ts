import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './ngrx/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  score$: Observable<number>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.score$ = this._store.select('score');
  }
}
