import { Component, OnInit } from '@angular/core';
import { MovService } from '../mov.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies: any[]=[];
  filteredMovies: any[]=[];
  searchTerm!: string ;
  constructor(private movService : MovService){}
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() : void{
    this.movService.getAll()
    .subscribe(response =>{this.movies = response.results;
      this.filteredMovies = response.results;});
  }
  onSearchInput() {
    this.filteredMovies = this.movies.filter(m => m.original_title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
