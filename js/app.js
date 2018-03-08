
function isThirteen(keyCode) {
    return keyCode === 13;
}

$(function() {
  const $todoLists = $('.list-container__list');

  // capture todo item and append to list
  $('.list-container__input').on('keypress', function(e) {
    const $this = $(this);
    const keyCode = (window.event) ? e.which : e.keyCode;
    if ( isThirteen(keyCode) ) {
      const inputVal = $this.val();
      const liItem = `<li class="list-container__text">${inputVal}</li>`;
      $this.parent().parent().append(liItem);
      $this.val('');
    }
  })

  //  Make Lists Sortable
  $todoLists.sortable({
    items: "li:not('.list-container__title, :nth-child(2)')",
    connectWith: 'ul',
    dropOnEmpty: true,
    placeholder: "emptySpace"
  });

  // Droppable, removes draggable item
  $('.removal').droppable({
    drop: function(event, ui) {
      ui.draggable.remove();
    }
  })


});
