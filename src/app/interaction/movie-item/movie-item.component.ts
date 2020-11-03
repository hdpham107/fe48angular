import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  // Phải khai báo Input mới nhận được dữ liệu từ
  // component cha truyền xuống
  @Input() movie: any;

  // EventEmitter: tự định nghĩa ra một custom event
  // Output: đẩy event từ con lên cha
  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getMovieDetail() {
    // Truyền chi tiết ra ngoài movie-list component.
    // emit: kích hoạt event
    this.onSelect.emit(this.movie);
  }
}
