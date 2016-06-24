var dataSet = $.ajax({
  method: 'GET',
  url: '/api/my_boards.json',
  dataType: 'json'
})

.done(function(data){
  render(data);
  //more functions
})

.fail(function() {
  console.log( "error" );
})

.always(function() {
  console.log( "finished" );
});