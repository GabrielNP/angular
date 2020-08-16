import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photos/photo/photo.service';
import { Photo } from '../../photos/photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos =>
        this.photos = photos,
        err => console.log(err.message)
      );
  }

}