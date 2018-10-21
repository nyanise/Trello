$(document).ready(() => {
    $(".add").on("click", () => {

        let val = $('#Input').val();
        $('#todoList').append(`<li>${val}</li>`);
        $('input').val("");

        $('li').draggable();
        $('.drop').droppable();
    }
    )

  
    $('.drop').droppable();
   $('#todoList').sortable();

    $( "li" ).draggable();
    $( ".drop" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "p1" )
          .find( ".drop" );
      }
    });
  

});
