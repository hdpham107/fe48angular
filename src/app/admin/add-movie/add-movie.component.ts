import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { MovieService } from "src/app/core/services/movie.service";
import dayjs from 'dayjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  previewImg: string = null;

  constructor(private movieService: MovieService) {
    this.form = new FormGroup(
      {
        tenPhim: new FormControl(''),
        biDanh: new FormControl(''),
        trailer: new FormControl(''),
        hinhAnh: new FormControl(''),
        moTa: new FormControl(''),
        ngayKhoiChieu: new FormControl(''),
      }
    )
  }

  ngOnInit(): void {
  }

  handleChangeImage(event) {
    console.log(event.target.files);
    const file = event.target.files[0];
    if (!file) {
      this.previewImg = null;
      return
    }

    // react là setValue, angular là patchValue
    this.form.patchValue({ hinhAnh: file })
    const fileReader = new FileReader();

    // đọc file và chuyển thành dạng string base64
    // => có thể đưa vào src của tag img để hiển thị
    fileReader.readAsDataURL(file);

    fileReader.onload = (event) => {
      this.previewImg = event.target.result as string;
    }


  }

  handleAddMovie() {
    console.log(this.form.value);
    const values = {
      ...this.form.value,
      ngayKhoiChieu: dayjs(this.form.value.ngayKhoiChieu).format('DD/MM/YYYY')
    }
    this.movieService.addMovie(values).subscribe();
  }
}
