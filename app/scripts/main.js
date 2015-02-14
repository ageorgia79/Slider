'use strict';

var arrayImages = [
          'http://www.ocdexperience.com/blog//wp-content/uploads/2011/12/KonaOCD.jpg',
          'http://captainkimo.com/wp-content/uploads/2013/04/wpid18938-Sunset-at-Lake-Catherine-Palm-Beach-Gardens-Florida.jpg',
          'http://captainkimo.com/wp-content/uploads/2014/01/West-Palm-Beach-Skyline-City-Sunset.jpg',
          'http://captainkimo.com/wp-content/uploads/2013/06/wpid20109-Jupiter-Island-Mangrove-Tree-at-Intracoastal-During-Sunset.jpg',
          'http://captainkimo.com/wp-content/uploads/2012/12/wpid18184-Sunset-from-the-Flagler-Museum-Over-West-Palm-Beach-City-Buildings.jpg',
          'http://cdn.lightgalleries.net/4bd5ebf463380/images/_S8A2415_HDR-1.jpg',
          'http://www.photosandus.com/wp-content/gallery/new-england-vacation/sunset-across-mooselookmeguntic-lake.jpg',
          'http://www.flyingkiwi.com/assets/Uploads/TourImages/_resampled/SetWidth1200-west-coast-sunset.jpg',
          'http://24.media.tumblr.com/e983df196afa733d4230dba1f12d957f/tumblr_mevxnvRRsD1r1vvzio1_1280.jpg',
          'http://naviwall.com/wp-content/uploads/2014/03/Marina-Florida-Beach-Sunset-Wallpaper.jpg',
          'http://farm2.staticflickr.com/1343/757113505_e5e1bbe3a1_o.jpg',
          'http://fc03.deviantart.net/fs71/f/2013/105/3/f/belgrade_fortress_at_sunset_by_han_van_zem-d61udux.jpg',
        ];

function imageChanger(arrayImages, delayTime) {

  var numCounter = 0;

  setInterval(function() {
    $('#slider-box').empty();
    $('#slider-box').append('<img src="' + arrayImages[numCounter] + '">');
    
    numCounter += 1;
    

    if (numCounter === arrayImages.length) {
      numCounter = 0;
    }
  }, delayTime);
}

imageChanger(arrayImages, 2500);    
  








