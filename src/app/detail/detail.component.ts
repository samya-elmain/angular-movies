import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovService } from '../mov.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  movieSelected: any;

  constructor(
    private route: ActivatedRoute,
    private movService: MovService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movService.getProduct(id)
      .subscribe(response => this.movieSelected = response);
    }

}
