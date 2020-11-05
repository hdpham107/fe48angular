import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];
  loading: boolean = false;

  // Để sử dụng services được trong component ta phải khai báo services
  // ở trong constructor
  constructor(private movieService: MovieService) {}

  // Tương dương componentDidMount bên React
  ngOnInit(): void {
    this.loading = true;
    this.movieService.getMovieList().subscribe({
      next: (result) => {
        console.log(result);
        this.movieList = result;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
      complete: () => {
        console.log('GET MOVIE LIST DONE');
      },
    });
  }
}
