
$(document).ready(function(){
var tl = new TimelineMax();

tl.from($('.click'),2,{
      opacity: "0",
      y: "40px",
    });

$('.start').on('click', function(){
  console.log(1)
  tl.to($('.click'),1,{
      y: "40px",
      opacity: "0"
    });

 tl.to($('.start'),.1,{
      display: "none"
    }, 3);

tl.from($('.img'),2,{
      opacity: '0',
      y: '-30px'
    }, 3.4);

tl.from($('.wrapper'),2,{
      opacity: '0',
      y: '30px'
    }, 3.4);

tl.from($('.bottom'),2,{
      opacity: '0',
    }, 5);

tl.from($('.menu'),1,{
      opacity: '0',
    }, 5);

tl.from($('.search'),1,{
      opacity: '0',
    }, 5);
 
 // tl.to($('.wrapper'),1.5,{
 //      top: "100%",
 //      opasity: '0'
 //    }, .5)
 // tl.to($('.img'),1.5,{
 //      height: "100%"
 //    }, .5)
});
  

});