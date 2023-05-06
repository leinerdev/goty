import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Game } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  items$!: Observable<Game[]>;
  results: any[] = [];

  constructor() {
    const aCollection = collection(this.firestore, 'goty');
    this.items$ = collectionData(aCollection) as Observable<Game[]>;
  }

  ngOnInit(): void {
    this.items$
      .pipe(
        map((res) => res.map(({ name, votos }) => ({ name, value: votos })))
      )
      .subscribe((res) => {
        this.results = res
      });
  }
}
