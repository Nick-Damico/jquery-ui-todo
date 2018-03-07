
function isThirteen(keyCode) {
    return keyCode === 13;
}

$(function() {
  const $todoLists = $('.todo--lists');
  const $titleLi = $('li.title');

  // capture todo item and append to list
  $('input').on('keypress', function(e) {
    const $this = $(this);
    const keyCode = (window.event) ? e.which : e.keyCode;
    if ( isThirteen(keyCode) ) {
      const inputVal = $this.val();
      const liItem = `<li class="todo-item-text">${inputVal}</li>`;
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
