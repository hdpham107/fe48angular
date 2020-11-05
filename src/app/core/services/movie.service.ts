import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  // Tu angular 5 tro ve truoc, khi tao services can gan vao provider trong AppModule
  // Ke tu angular 6, providedIn: 'root' => services da duoc tu dong
  // gan vao goc cua ung dung => k can phai gan vao provider trong AppModule
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

    return this.http.get<Movie[]>(url);
  }

  getMovieDetail(id: number): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`;

    return this.http.get(url);
  }

  // getMovieListObservable(): Observable<Movie[]> {
  //   return new Observable<Movie[]>((subscriber) => {
  //     setTimeout(() => {
  //       subscriber.next([
  //         {
  //           tenPhim: 'Avenger',
  //           gia: 90000,
  //           hinhAnh: 'assets/images/avenger.jpeg',
  //         },
  //       ]);
  //     }, 1000);

  //     setTimeout(() => {
  //       subscriber.next([
  //         {
  //           tenPhim: 'Onepuch man',
  //           gia: 90000,
  //           hinhAnh: 'assets/images/one-puch-man.jpeg',
  //         },
  //       ]);

  //       // Khi có lỗi kết thúc Observable
  //       // subscriber.error('Wrong!!!!!');

  //       // Kết thúc observable
  //       // subscriber.complete();
  //     }, 3000);

  //     setTimeout(() => {
  //       subscriber.next([
  //         {
  //           tenPhim: 'Iron man',
  //           gia: 80000,
  //           hinhAnh: 'assets/images/iron-man.jpeg',
  //         },
  //       ]);
  //     }, 5000);
  //   })
  //     .pipe(filter((item) => item[0].gia >= 90000))
  //     .pipe(map((item) => [{ ...item[0], gia: item[0].gia * 0.9 }]));
  // }

  // getMovieListPromise(): Promise<Movie[]> {
  //   // Fake API
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           tenPhim: 'Avenger',
  //           gia: 80000,
  //           hinhAnh: 'assets/images/avenger.jpeg',
  //         },
  //         {
  //           tenPhim: 'Onepuch man',
  //           gia: 80000,
  //           hinhAnh: 'assets/images/one-puch-man.jpeg',
  //         },
  //         {
  //           tenPhim: 'Iron man',
  //           gia: 80000,
  //           hinhAnh: 'assets/images/iron-man.jpeg',
  //         },
  //       ]);
  //     }, 2000);
  //   });
  // }
}
