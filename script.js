$('#form__btn-submit').on('click', prependBookmark);
$('#section-bookmark-list').on('click', '.bookmark__btn-read',toggleRead);
$('#section-bookmark-list').on('click', '.bookmark__btn-delete', removeBookmark);
$('#bookmark-remove-all-read').on('dblclick', removeAllRead);
$('#form__btn-submit').on('click', updateCount);
$('#section-bookmark-list').on('click', '.bookmark__btn-read', updateCount);
$('#section-bookmark-list').on('click', '.bookmark__btn-delete', updateCount);
$('#form__input-title').on('input', isValidURLTitle);
$('#form__input-url').on('input', isValidURLTitle);
$('div').mouseover(feedbackPopup);

function updateCount(){
  var counterTotal = $('.bookmark__btn-delete').length;
  var counterRead = $('.read').length;
  $('#bookmark-count-total').text('Bookmarks saved: ' + counterTotal);
  $('#bookmark-count-read').text('Bookmarks read: ' + counterRead);
}  


function clearAndFocus() {
  $('#form__input-title').val('');
  $('#form__input-url').val('');
  $('#form__btn-submit').attr('disabled', true);
  $('#form__input-title').focus();
}

function  isValidURLTitle() {
  var myVariable = $('#form__input-url').val();
  if($('#form__input-title').val() !== '' && /^(www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(myVariable)) {
    $('#form__btn-submit').attr('disabled', false);
  } 
}

function prependBookmark(e) {
  e.preventDefault();
  $('#section-bookmark-list').prepend(`
  <article class="bookmark">
    <h2 class="bookmark__website-title">${$('#form__input-title').val()}</h2>
    <hr>
    <a href="" class="bookmark__website-link">${$('#form__input-url').val()}</a>
    <hr>
    <button class="bookmark__btn-read">Read</button>
    <button class="bookmark__btn-delete">Delete</button>
  </article>`);
  clearAndFocus();
}

function toggleRead() {
  $(this).toggleClass('read');
}

function removeBookmark() {
  console.log(this);
  $(this).closest('article').remove();
}

function removeAllRead() {
  var bookmarksRead = $('.read');
  bookmarksRead.parent().remove();
  updateCount();
}

function feedbackPopup() {
  var modal = $('#myModal');
  var span = $(".close");
  var myVariable = $('#form__input-url').val();
    if(myVariable === '' || /^(www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(myVariable)) {
      modal.css("display", "none");
    } else {
      modal.css("display", "block");
    }
    span.on('click', function() {
        modal.css("display", "none");
    })
}




