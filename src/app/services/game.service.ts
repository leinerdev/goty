import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, of, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interface';
import { FirebaseResponse } from '../pages/goty/goty.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos);
    } else {
      return this.http.get<Game[]>(`${ environment.url }/api/goty`).pipe(
        tap(juegos => this.juegos = juegos)
      );
    }
  }

  votarJuego(id: string): Observable<FirebaseResponse> {
    return this.http.post<FirebaseResponse>(`${ environment.url }/api/goty/${ id }`, {}).pipe(
      catchError((err: HttpErrorResponse) => {
        return of(err.error)
      })
    ) 
  }

}
