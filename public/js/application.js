$(document).ready(function() {
  console.log('READY');

  getNewTodoFormListener();
});

function getNewTodoFormListener(){
  $('#new-todo-form').on('click', function(event){
    event.preventDefault();
    console.log('clicked it')
    displayForm();
  })
}

function displayForm(){
  $.ajax({
    url: '/todos/new',
    method: 'GET'
  })
  .done(function(response){
    console.log('respon', response)
  })
  .fail(function(response){
    console.log('failling')
  })
}
