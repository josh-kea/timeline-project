import TweenMax from "gsap/TweenMax";


import $ from "jquery";
window.jQuery = window.$ = $;
// let json = require('/data.json');

window.addEventListener('DOMContentLoaded', init);

function init () {
    console.log('hello')
    dot.classList.add('active-dot')
    // loadJSON();
    // animateLogo();

    onClickAdd();

    
}

function onClickAdd(){
  svg1.addEventListener("click", function(){

    //showing text box and moving it right
    document.querySelector('#svg1-info').classList.add('active');
    document.querySelector('#svg1-info').style.display = 'grid';
    TweenMax.to('#svg1-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg1, 1, {x:-500,
    scale:1.5});

    //document.querySelector(`#${svg}-info`).classList.add('active');
  });

  //return svg;
  //2
  svg2.addEventListener("click", function(){
    
    document.querySelector('#svg2-info').classList.add('active');
    document.querySelector('#svg2-info').style.display = 'grid';
    TweenMax.to('#svg2-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg2, 1, {x:500,
    scale:1.5});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  svg3.addEventListener("click", function(){

    document.querySelector('#svg3-info').classList.add('active');
    document.querySelector('#svg3-info').style.display = 'grid';
    TweenMax.to('#svg3-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg3, 1, {x:-500,
    scale:1.5});

  });

  //
  svg4.addEventListener("click", function(){
    
    document.querySelector('#svg4-info').classList.add('active');
    document.querySelector('#svg4-info').style.display = 'grid';
    TweenMax.to('#svg4-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg4, 1, {x:500,
    scale:1.5});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  svg5.addEventListener("click", function(){

    document.querySelector('#svg5-info').classList.add('active');
    document.querySelector('#svg5-info').style.display = 'grid';
    TweenMax.to('#svg5-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg5, 1, {x:-500,
    scale:1.5});

  });

  //
  svg6.addEventListener("click", function(){
    
    document.querySelector('#svg6-info').classList.add('active');
    document.querySelector('#svg6-info').style.display = 'grid';
    TweenMax.to('#svg6-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg6, 1, {x:500,
    scale:1.5});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  svg7.addEventListener("click", function(){

    document.querySelector('#svg7-info').classList.add('active');
    document.querySelector('#svg7-info').style.display = 'grid';
    TweenMax.to('#svg7-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg7, 1, {x:-500,
    scale:1.5});

  });

  //
  svg8.addEventListener("click", function(){
    
    document.querySelector('#svg8-info').classList.add('active');
    document.querySelector('#svg8-info').style.display = 'grid';
    TweenMax.to('#svg8-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg8, 1, {x:500,
    scale:0.5});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  svg9.addEventListener("click", function(){

    document.querySelector('#svg9-info').classList.add('active');
    document.querySelector('#svg9-info').style.display = 'grid';
    TweenMax.to('#svg9-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg9, 1, {x:-500,
    scale:1.2});

  });

  //
  svg10.addEventListener("click", function(){
    
    document.querySelector('#svg10-info').classList.add('active');
    document.querySelector('#svg10-info').style.display = 'grid';
    TweenMax.to('#svg10-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg10, 1, {x:500,
    scale:1.5});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  svg11.addEventListener("click", function(){

    document.querySelector('#svg11-info').classList.add('active');
    document.querySelector('#svg11-info').style.display = 'grid';
    TweenMax.to('#svg11-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg11, 1, {x:-500,
    scale:0.4});

  });

  //
  svg12.addEventListener("click", function(){
    
    document.querySelector('#svg12-info').classList.add('active');
    document.querySelector('#svg12-info').style.display = 'grid';
    TweenMax.to('#svg12-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg12, 1, {x:500,
    scale:0.8});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  svg13.addEventListener("click", function(){

    document.querySelector('#svg13-info').classList.add('active');
    document.querySelector('#svg13-info').style.display = 'grid';
    TweenMax.to('#svg13-info', 1, {x:200,
    opacity:1});
    TweenMax.to(svg13, 1, {x:-500,
    scale:1.5});

  });

  //
  svg14.addEventListener("click", function(){
    
    document.querySelector('#svg14-info').classList.add('active');
    document.querySelector('#svg14-info').style.display = 'grid';
    TweenMax.to('#svg14-info', 1, {x:-200,
    opacity:1});
    TweenMax.to(svg14, 1, {x:500,
    scale:1.5});
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  
}


let cloud1 = document.querySelector('#cloud1');
let cloud2 = document.querySelector('#cloud2');
let cloud3 = document.querySelector('#cloud3');
let cloud4 = document.querySelector('#cloud4');
let cloud5 = document.querySelector('#cloud5');
let cloud6 = document.querySelector('#cloud6');
let cloud7 = document.querySelector('#cloud7');

let svg1 = document.querySelector('#svg-1');
let svg2 = document.querySelector('#svg-2');
let svg3 = document.querySelector('#svg-3');
let svg4 = document.querySelector('#svg-4');
let svg5 = document.querySelector('#svg-5');
let svg6 = document.querySelector('#svg-6');
let svg7 = document.querySelector('#svg-7');
let svg8 = document.querySelector('#svg-8');
let svg9 = document.querySelector('#svg-9');
let svg10 = document.querySelector('#svg-10');
let svg11 = document.querySelector('#svg-11');
let svg12 = document.querySelector('#svg-12');
let svg13 = document.querySelector('#svg-13');
let svg14 = document.querySelector('#svg-14');


let dot = document.querySelector(".dot");
let p1 = document.querySelector('#p-1');
let p2 = document.querySelector('#p-2');
let p3 = document.querySelector('#p-3');
let p4 = document.querySelector('#p-4');
let p5 = document.querySelector('#p-5');
let p6 = document.querySelector('#p-6');
let p7 = document.querySelector('#p-7');
let p8 = document.querySelector('#p-8');
let p9 = document.querySelector('#p-9');
let p10 = document.querySelector('#p-10');
let p11 = document.querySelector('#p-11');
let p12 = document.querySelector('#p-12');
let p13 = document.querySelector('#p-13');
let p14 = document.querySelector('#p-14');




let siliconValleySVG = document.querySelector('#siliconvalley-svg');

// Actions when scrolling, making the website dynamic
$(window).scroll( event => {
    let scrollPositionTop = $(window).scrollTop();
    let scrollPositionBottom = $(window).scrollTop() + $(window).height();
    console.log(scrollPositionBottom + 'Bottom');

    console.log(scrollPositionTop)

    // Do something
    // Moving clouds based on where the scroll position at the top is.
    cloud1.style.transform = `translate( ${scrollPositionTop}px, ${0}px)`;
    cloud2.style.transform = `translate( ${-scrollPositionTop}px, ${0}px)`;
    cloud3.style.transform = `translate( ${scrollPositionTop}px, ${0}px)`;
    cloud4.style.transform = `translate( ${-scrollPositionTop}px, ${0}px)`;
    cloud5.style.transform = `translate( ${scrollPositionTop}px, ${0}px)`;
    cloud6.style.transform = `translate( ${-scrollPositionTop}px, ${0}px)`;
    cloud7.style.transform = `translate( ${-scrollPositionTop}px, ${0}px)`;

    /* Styling the year scroll */
    checkScroll(scrollPositionBottom, scrollPositionTop);
    console.log($(svg2).offset().top +'svg2top')

});


function checkScroll (scrollBtm, scrollTp) {
  if (scrollBtm < $(svg1).offset().top){
    dot.classList.add('active-dot');
    p1.classList.remove('active');
    console.log('topped')
  }

  if (scrollBtm > $(svg1).offset().top){
    dot.classList.remove('active-dot')
    dot.classList.add('nonactive-dot')
    p1.classList.remove('nonactive');
    p1.classList.add('active');
    p2.classList.remove('active');
  }

  if (scrollBtm > $(svg2).offset().top){
    console.log('lol');
    p1.classList.remove('active');
    p2.classList.remove('nonactive');
    p2.classList.add('active');
    p3.classList.remove('active');
  }
  if (scrollBtm > $(svg3).offset().top){
    console.log('lol');
    p2.classList.remove('active');
    p3.classList.remove('nonactive');
    p3.classList.add('active');
    p4.classList.remove('active');
  }
  if (scrollBtm > $(svg4).offset().top){
    console.log('lol');
    p3.classList.remove('active');
    p4.classList.remove('nonactive');
    p4.classList.add('active');
    p5.classList.remove('active');
  }
  if (scrollBtm > $(svg5).offset().top){
    console.log('lol');
    p4.classList.remove('active');
    p5.classList.remove('nonactive');
    p5.classList.add('active');
    p6.classList.remove('active');
  }
  if (scrollBtm > $(svg6).offset().top){
    console.log('lol');
    p5.classList.remove('active');
    p6.classList.remove('nonactive');
    p6.classList.add('active');
    p7.classList.remove('active');
  }
  if (scrollBtm > $(svg7).offset().top){
    console.log('lol');
    p6.classList.remove('active');
    p7.classList.remove('nonactive');
    p7.classList.add('active');
    p8.classList.remove('active');
  }
  if (scrollBtm > $(svg8).offset().top){
    console.log('lol');
    p7.classList.remove('active');
    p8.classList.remove('nonactive');
    p8.classList.add('active');
    p9.classList.remove('active');
  }
  if (scrollBtm > $(svg9).offset().top){
    console.log('lol');
    p8.classList.remove('active');
    p9.classList.remove('nonactive');
    p9.classList.add('active');
    p10.classList.remove('active');
  }
  if (scrollBtm > $(svg10).offset().top){
    console.log('lol');
    p9.classList.remove('active');
    p10.classList.remove('nonactive');
    p10.classList.add('active');
    p11.classList.remove('active');
  }
  if (scrollBtm > $(svg11).offset().top){
    console.log('lol');
    p10.classList.remove('active');
    p11.classList.remove('nonactive');
    p11.classList.add('active');
    p12.classList.remove('active');
  }
  if (scrollBtm > $(svg12).offset().top){
    console.log('lol');
    p11.classList.remove('active');
    p12.classList.remove('nonactive');
    p12.classList.add('active');
    p13.classList.remove('active');
  }
  if (scrollBtm > $(svg13).offset().top){
    console.log('lol');
    p12.classList.remove('active');
    p13.classList.remove('nonactive');
    p13.classList.add('active');
    p14.classList.remove('active');
  }
  if (scrollBtm > $(svg14).offset().top){
    console.log('lol');
    p13.classList.remove('active');
    p14.classList.remove('nonactive');
    p14.classList.add('active');
  }
}

$(dot).on('click', el => {
  el.preventDefault();
  
  $('html, body').animate({
      scrollTop: 0
    }, 500, 'swing');
  });

// On Click Functions for Years //
$(p1).on('click', el => {
  el.preventDefault();
  
  $('html, body').animate({
      scrollTop: $(svg1).offset().top + ($(svg1).height() /2) - ($(window).height() / 2) 
    }, 500, 'swing');
  });

  $(p2).on('click', el => {
    el.preventDefault();
    
    $('html, body').animate({
        scrollTop: $(svg2).offset().top + ($(svg2).height() /2) - ($(window).height() / 2) 
      }, 500, 'swing');
    });

    $(p3).on('click', el => {
      el.preventDefault();
      
      $('html, body').animate({
          scrollTop: $(svg3).offset().top + ($(svg3).height() /2) - ($(window).height() / 2) 
        }, 500, 'swing');
      });

      //
      $(p4).on('click', el => {
        el.preventDefault();
        
        $('html, body').animate({
            scrollTop: $(svg4).offset().top + ($(svg4).height() /2) - ($(window).height() / 2) 
          }, 500, 'swing');
        });
        //
        $(p5).on('click', el => {
          el.preventDefault();
          
          $('html, body').animate({
              scrollTop: $(svg5).offset().top + ($(svg5).height() /2) - ($(window).height() / 2) 
            }, 500, 'swing');
          });
          //
          $(p6).on('click', el => {
            el.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(svg6).offset().top + ($(svg6).height() /2) - ($(window).height() / 2) 
              }, 500, 'swing');
            });
            //
            $(p7).on('click', el => {
              el.preventDefault();
              
              $('html, body').animate({
                  scrollTop: $(svg7).offset().top + ($(svg7).height() /2) - ($(window).height() / 2) 
                }, 500, 'swing');
              });
              //
              $(p8).on('click', el => {
                el.preventDefault();
                
                $('html, body').animate({
                    scrollTop: $(svg8).offset().top + ($(svg8).height() /2) - ($(window).height() / 2) 
                  }, 500, 'swing');
                });
                //
                $(p9).on('click', el => {
                  el.preventDefault();
                  
                  $('html, body').animate({
                      scrollTop: $(svg9).offset().top + ($(svg9).height() /2) - ($(window).height() / 2) 
                    }, 500, 'swing');
                  });
                  //
                  $(p10).on('click', el => {
                    el.preventDefault();
                    
                    $('html, body').animate({
                        scrollTop: $(svg10).offset().top + ($(svg10).height() /2) - ($(window).height() / 2) 
                      }, 500, 'swing');
                    });
                    //
                    $(p11).on('click', el => {
                      el.preventDefault();
                      
                      $('html, body').animate({
                          scrollTop: $(svg11).offset().top + ($(svg11).height() /2) - ($(window).height() / 2) 
                        }, 500, 'swing');
                      });
                      //
                      $(p12).on('click', el => {
                        el.preventDefault();
                        
                        $('html, body').animate({
                            scrollTop: $(svg12).offset().top + ($(svg12).height() /2) - ($(window).height() / 2) 
                          }, 500, 'swing');
                        });
                        //
                        $(p13).on('click', el => {
                          el.preventDefault();
                          
                          $('html, body').animate({
                              scrollTop: $(svg13).offset().top + ($(svg13).height() /2) - ($(window).height() / 2) 
                            }, 500, 'swing');
                          });
                          //
                          $(p14).on('click', el => {
                            el.preventDefault();
                            
                            $('html, body').animate({
                                scrollTop: $(svg14).offset().top + ($(svg14).height() /2) - ($(window).height() / 2) 
                              }, 500, 'swing');
                            });
                            //

                            // Onclick Ends

    


//Function to animate logo 


/*

function loadJSON(){
    // fetch data.json file
    fetch(json).then(response => response.json()).then (myJSON => {
      console.log("JSON is loaded");
      myJSON.forEach(obj => {
        console.log(obj);
        console.log(obj.svg)
  
        // clone the template
        const clone = document.querySelector('.timeline-block').cloneNode(true);

        clone.querySelector('.logo img').src = obj.svg;
  
        // put the data in the clone
        

        document.querySelector('#timeline-div').appendChild(clone);
  
        // clone.querySelector("[data-field='title']").textContent = obj.title;
        //
        // 
      })
    })
  }

  */