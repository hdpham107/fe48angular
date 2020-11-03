import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @ViewChildren(MovieItemComponent)
    movieItemComponents: QueryList<MovieItemComponent>

  movieList: any[] = [
    {
      maPhim: 1,
      tenPhim: 'Avenger',
      gia: 80000,
      hinhAnh: 'assets/images/avenger.jpeg',
    },
    {
      maPhim: 2,
      tenPhim: 'Iron man',
      gia: 80000,
      hinhAnh: 'assets/images/iron-man.jpeg',
    },
    {
      maPhim: 3,
      tenPhim: 'One puch man',
      gia: 80000,
      hinhAnh: 'assets/images/one-puch-man.jpeg',
    },
  ];

  movieDetail: any = null;

  constructor() {}

  ngOnInit(): void {}

  getMovieDetail(movie: any) {
    this.movieDetail = movie;

    // Demo ViewChildren
    this.movieItemComponents.forEach((item: MovieItemComponent) => {
      console.log(item.movie)
    })
  }
}
