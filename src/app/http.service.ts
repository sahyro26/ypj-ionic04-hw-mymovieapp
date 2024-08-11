import { Injectable , Injector} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface Movie {
  Title: string;
  Year: string;
  imdbID:string;
  Type: string;
  Poster: string;
}
export interface MovieDetails {
  Title:      string;
  Year:       string;
  Rated:      string;
  Released:   string;
  Runtime:    string;
  Genre:      string;
  Director:   string;
  Writer:     string;
  Actors:     string;
  Plot:       string;
  Language:   string;
  Country:    string;
  Awards:     string;
  Poster:     string;
  Metascore:  string;
  imdbRating: string;
  imdbVotes:  string;
  imdbID:     string;
  Type:       string;
  DVD:        string;
  BoxOffice:  string;
  Production: string;
  Website:    string;
  Response:   string;
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "https://www.omdbapi.com/"
  apiKey = "87d10179"


  constructor(private httpClient: HttpClient) { }

  search(search:string) {
    // return this.httpClient.get(`${this.baseUrl}?s=${search}&apikey=${this.apiKey}`)
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}?s=${search}&apikey=${this.apiKey}`))
  }

  getDetails(id: string) {
    // return this.httpClient.get(`${this.baseUrl}?i=${id}&apikey=${this.apiKey}`)
    return lastValueFrom(this.httpClient.get(`${this.baseUrl}?i=${id}&apikey=${this.apiKey}`))
  }
}
