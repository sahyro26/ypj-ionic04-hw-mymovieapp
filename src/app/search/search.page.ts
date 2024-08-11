import { Component, OnInit } from '@angular/core';
import { HttpService, Movie } from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  movieName: string = ""
  movies: Movie[] = []

  constructor( private httpService: HttpService) { }

  ngOnInit() { }

  async searchMovie() {
    const response = await this.httpService.search(this.movieName) as { Search: Movie[] }
    this.movies = response.Search
  }

}
