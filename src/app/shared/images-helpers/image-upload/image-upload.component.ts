class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';
import { API_ENDPOINT } from 'src/app/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Output() imageUploaded = new EventEmitter();
  @Output() imageError = new EventEmitter();
  @Output() imageLoadedToContainer = new EventEmitter();

  selectedFile: ImageSnippet;
  imageUrl: string;

  constructor(private imageService: ImageService, private http: HttpClient){}

  ngOnInit(){}

  imageLoaded() {
    this.imageLoadedToContainer.emit();
  }

  private onSuccess(imageUrl: string) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.imageUploaded.emit(imageUrl);
    //console.log(imageUrl)
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
    this.imageError.emit('');
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      const formData = new FormData();

		  formData.append('files', this.selectedFile.file);

      this.selectedFile.pending = true;
      this.http.post(API_ENDPOINT + '/upload', formData).subscribe(
        (res) => {
          this.imageUrl = res[0].url
          //console.log(this.imageUrl)
          this.onSuccess(this.imageUrl)
        },
        (err) => {
          this.onError();
          console.log(err)
        })
    });

    reader.readAsDataURL(file);
  }

}
