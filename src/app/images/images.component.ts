import { WorkService } from './../work.service';
import { Component, OnInit } from '@angular/core';
import { Work } from '../work';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  works: Work[] = [];
  work: Work = new Work();

  constructor(private workService: WorkService,
    public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks(): void{
    this.workService.getImages().subscribe(works => this.works = works);
  }

  add(){
    this.workService.addWork(this.work).subscribe(
      data => {
        console.log(data);
        this.getWorks();

      }
    )
  }


}
