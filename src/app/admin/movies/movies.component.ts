import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/core/services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieList: any = [];
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  pages: number[] = [];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: params => {
        this.currentPage = parseInt(params.page) || 1;

        this.movieService.getMovieListPaging(this.currentPage, this.pageSize).subscribe({
          next: result => {
            this.movieList = result.items;
            this.totalPages = result.totalPages;
            this.pages = Array.from(Array(this.totalPages).keys()).map((_, i) => i + 1);
            console.log(this.pages);

          }
        });
      }
    });


  }

}
