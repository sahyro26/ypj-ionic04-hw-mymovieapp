import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService, MovieDetails } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: string | null = ''
  movieDetail: any
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadData()
  }

  async loadData() {
    const response = await this.httpService.getDetails(this.id!!)
    console.log(response)
    this.movieDetail = response
  }

}
