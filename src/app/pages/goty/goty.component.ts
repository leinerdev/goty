import { Component, OnInit, } from '@angular/core';
import { Game } from 'src/app/interfaces/interface';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2'

export interface FirebaseResponse {
  ok: boolean,
  mensaje: string
}

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getNominados().subscribe({
      next: (juegos) => this.juegos = juegos
    })
  }

  votarJuego(juego: Game) {
    this.gameService.votarJuego(juego.id).subscribe({
      next: (response) => {
        if (response.ok) {
          Swal.fire({
            title: 'Gracias',
            text: response.mensaje,
            icon: 'success'
          })
        } else {
          Swal.fire({
            title: 'Oops',
            text: response.mensaje,
            icon: 'error'
          })
        }
      }
    })
  }

}
