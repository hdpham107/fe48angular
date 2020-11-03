import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() onAddMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addMovie(tenPhim: string, gia: number, hinhAnh: string) {
    this.onAddMovie.emit({ tenPhim, gia, hinhAnh });
  }
}
