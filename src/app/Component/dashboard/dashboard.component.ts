import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allMovies: any = [];
  userMovieList: any = [];
  isVisible = false;
  constructor(
    private _movieService: MovieService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this._movieService.getAllMovies().subscribe((res: any) => {
      // console.log(res);
      this.allMovies = res.data;
    });
  }

  addToList(name: any, year: any, genre: any) {
    let data: any = {
      name,
      year,
      genre,
    };
    this._movieService.addToMovieList(data).subscribe(
      (res: any) => {
        if (res.isSuccessful) {
          this.notification.success('Movie List', res.message);
        } else {
          this.notification.error('Movie List', res.message);
        }
      },
      (error) => {
        this.notification.error(
          'Movie List',
          error.error.message || error.error.error
        );
      }
    );
  }

  getLoggedInUserMovieList() {
    this.isVisible = true;
    this._movieService.getUserMovieList().subscribe(
      (res: any) => {
        if (res.isSuccessful) {
          this.userMovieList = res.data;
          this.notification.success('Movie List', res.message);
        } else {
          this.notification.error('Movie List', res.message);
        }
      },
      (error) => {
        this.notification.error(
          'Movie List',
          error.error.message || error.error.error
        );
      }
    );
  }

  deleteFromList(id: any) {
    this._movieService.deleteFromUserList(id).subscribe(
      (res: any) => {
        if (res.isSuccessful) {
          this.notification.success('Delete From List', res.message);
          this.getLoggedInUserMovieList();
        } else {
          this.notification.error('Delete From List', res.message);
        }
      },
      (error) => {
        this.notification.error(
          'Delete From List',
          error.error.message || error.error.error
        );
      }
    );
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }
}

// {
//   "isSuccessful": true,
//   "responseCode": "0",
//   "data": null,
//   "message": "Movie Added for Test",
//   "error": null
// }
