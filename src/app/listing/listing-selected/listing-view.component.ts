import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pictures: {imageUrl: string}[] = [
    {
      "imageUrl":"https://www.notebookcheck.net/typo3temp/_processed_/4/b/csm_LenovoE50-80__1__8f23e3bfde.jpg"
    },
    {
      "imageUrl": "https://www.notebookcheck.net/fileadmin/_processed_/csm_4zu3_Lenovo_E51_80_a9251e94ed.jpg"
    },
    {
      "imageUrl": "https://www.notebookcheck.net/fileadmin/_processed_/csm_Lenovo_E51_80_Unterseite_a54dcfafd9.jpg"
    }
  ]

}
