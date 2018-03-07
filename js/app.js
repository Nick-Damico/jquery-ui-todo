
function isThirteen(keyCode) {
    return keyCode === 13;
}

$(function() {
  const $todoLists = $('.todo--lists');
  const $titleLi = $('li.title');
  // Activate dropdown input
   $todoLists.on({
     mouseover:  function() {
       $(this).children('li.input--li').slideDown(800);
     },
     mouseleave: function() {
       $(this).children('li.input--li').slideUp(800);
     }
   })

  // capture todo item and append to list
  $('input').on('keypress', function(e) {
    const $this = $(this);
    const keyCode = (window.event) ? e.which : e.keyCode;
    if ( isThirteen(keyCode) ) {
      const inputVal = $this.val();
      const liItem = `<li>${inputVal}</li>`;
      $this.parent().parent().append(liItem);
      $this.val('');
    }
  })

  //  Make Lists Sortable
  $todoLists.sortable({
    items: "li:not('.title, input--li')",
    connectWith: 'ul',
    dropOnEmpty: true,
    placeholder: "emptySpace"
  });

  // Droppable, removes draggable item
  $('.div--remove-items').droppable({
    drop: function(event, ui) {
      ui.draggable.remove();
    }
  })


});
