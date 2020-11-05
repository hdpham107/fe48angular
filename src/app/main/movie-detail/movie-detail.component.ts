import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.loading = true;
        this.movieService.getMovieDetail(params.id).subscribe({
          next: (result) => {
            this.movieDetail = result;
            this.loading = false;
            console.log(this.movieDetail);
          },
          error: (error) => {
            console.log(error);
            this.loading = false;
          },
        });
      },
    });
  }
}
