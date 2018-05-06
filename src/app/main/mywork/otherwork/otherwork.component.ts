import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-otherwork',
  templateUrl: './otherwork.component.html',
  styleUrls: ['./otherwork.component.scss']
})
export class OtherworkComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '90%',
        image: false,
        height: '500px',
        thumbnailsColumns: 3,
        thumbnailsRows: 3,
        thumbnailsArrows: true,
        imageDescription: true,
        imageArrows: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewKeyboardNavigation: true,
        previewDescription : true,
        previewSwipe : true,
        imageAnimation: NgxGalleryAnimation.Zoom,
        arrowPrevIcon: "triangle-left",
        arrowNextIcon: "triangle-right", 
        
        
      },{ "breakpoint": 1366, "width": "90%", "height": "500px", "thumbnailsColumns": 2, "thumbnailsRows": 2, },
      ,{ "breakpoint": 823, "width": "100%", "height": "230px", "thumbnailsColumns": 2, "thumbnailsRows": 1, },
      ,{ "breakpoint": 640, "width": "100%", "height": "220px", "thumbnailsColumns": 1, "thumbnailsRows": 1, },
      ,{ "breakpoint": 568, "width": "100%", "height": "200px", "thumbnailsColumns": 1, "thumbnailsRows": 1, },
      ,{ "breakpoint": 414, "width": "100%", "height": "450px", "thumbnailsColumns": 1, "thumbnailsRows": 2, }
    ];

   

    this.galleryImages = [
      {
        small: './assets/images/businesscards/workcom-promo.png',
        medium: './assets/images/businesscards/workcom-promo.png',
        big: './assets/images/businesscards/workcom-promo.png',
        description: "Workcom promo campaign, kickofflabs CMS.",
        
      },
      {
        small: './assets/images/businesscards/workcom-platform.png',
        medium: './assets/images/businesscards/workcom-platform.png',
        big: './assets/images/businesscards/workcom-platform.png',
        description: "Workcom landing page and app mockups, switched to angular later on.",
      },
      {
        small: './assets/images/businesscards/milipol.png',
        medium: './assets/images/businesscards/milipol.png',
        big: './assets/images/businesscards/milipol.png',
        description: "Milipol website front-end, for acropont.ca.",
      },
      {
        small: './assets/images/businesscards/acropont.png',
        medium: './assets/images/businesscards/acropont.png',
        big: './assets/images/businesscards/acropont.png',
        description: "Acropont.ca promo website.",
      },
      {
        small: './assets/images/businesscards/superduper.png',
        medium: './assets/images/businesscards/superduper.png',
        big: './assets/images/businesscards/superduper.png',
        description: "Superduper webshop front-end, for acropont.ca.",
      },
      {
        small: './assets/images/businesscards/canadas-gunshop.png',
        medium: './assets/images/businesscards/canadas-gunshop.png',
        big: './assets/images/businesscards/canadas-gunshop.png',
        description: "Canada's gunshop front-end, for acropont.ca.",
      },
      {
        small: './assets/images/businesscards/energic.png',
        medium: './assets/images/businesscards/energic.png',
        big: './assets/images/businesscards/energic.png',
        description: "Energic landing page, for HeavyForm creative agency.",
      },
      {
        small: './assets/images/businesscards/chips3.png',
        medium: './assets/images/businesscards/chips3.png',
        big: './assets/images/businesscards/chips3.png',
        description: "Chipsway landing page/mockup, for HeavyForm creative agency.",
      },
      {
        small: './assets/images/businesscards/chips1.png',
        medium: './assets/images/businesscards/chips1.png',
        big: './assets/images/businesscards/chips1.png',
        description: "Chipsway facebook mini game, for HeavyForm creative agency.",
      },
      {
        small: './assets/images/businesscards/chips2.png',
        medium: './assets/images/businesscards/chips2.png',
        big: './assets/images/businesscards/chips2.png',
        description: "Chipsway facebook mini game, for HeavyForm creative agency.",
      },
      
    ];
  }
}