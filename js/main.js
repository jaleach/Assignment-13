// console.log('This is cool!');

// $('.container').html(template.example({
//   value: 'Hello, World!!'
// }));



$.getJSON("http://private-44f6d-timeline6.apiary-mock.com/timeline").done(function(data){
  // console.log(data);
var stuff = data.timelines;
    stuff.forEach( function(x){
    var dates = x.timestamp;
    var m = moment(new Date(dates));
          x.date= m.format('M/DD/YY');
          x.times= m.format('hh:mm');
    });
$('.container').html(template.timelines(data));
});



// Jd review
// var m = moment('h:mm:ss')


// var dateStr = "";
// var m = moment (new Date)(dateStr)


// $('.container').html(template.date(data){
//   date:
//   time:
// });
// });





// data.timelines = data.timelines.map(function(datas){
//   if(movie.release){
//     var date = moment (new Date(movie.release));
//     movie.release = date.format('MMMM Do, \'YY');
//   }
//   return movie;
// });


// $('.container').html(template.timelines(data));
// });
