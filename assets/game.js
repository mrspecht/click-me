'use strict';

const $width = window.innerWidth - 100;
const $height = window.innerHeight - 100;
const $click = new Audio('assets/point.wav');
const $music =  new Audio('assets/monkeys.mp3');

let $hits = 0;
let $secs = 60;
let $ready = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function counter() {
  $('#time').html($secs);
  setInterval(function() {
    $secs -= 1;
    if ($secs >= 0) {
      $('#time').html($secs);
    }

    if ($secs < 1) {
      $music.pause();
      $('#me').hide();
    }
  }, 1000);
}

$(document).ready(function(e) {
  $('#me').mouseover(function() {
    if ($ready) {
      $(this).animate({
        left: getRandomInt($width),
        top: getRandomInt($height)
      }, 500);
    }
  });

  $('#start').click(function(){
    counter();
    $music.play();
    $('#me').animate({
      left: getRandomInt($width),
      top: getRandomInt($height)
    }, 500);
    $('#me').addClass('pointer')
    $('#start').addClass('hide');
    $('#message').addClass('hide');
    $ready = true;
  });

  $('#me').click(function() {
    if ($ready) {
      $(this).animate({
        left: getRandomInt($width),
        top: getRandomInt($height)
      }, 500);
      $hits += 1;
      $('#hits').html($hits);
      $click.play();
    }
  });
});
