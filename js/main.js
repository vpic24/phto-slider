$(document).ready(function(){
  'use strict';

  $('.next').click( function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  $('.prev').click( function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active');
      prevImg.addClass('active');
    }
  });
});
