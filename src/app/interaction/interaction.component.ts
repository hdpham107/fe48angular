import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild(MovieListComponent)
  movieListComponent: MovieListComponent;
  constructor() {}

  ngOnInit(): void {}
  handleAddMovie(movie: any) {
    this.movieListComponent.movieList.push(movie);
  }
}
