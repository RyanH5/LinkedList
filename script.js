$('#form__btn-submit').on('click', prependBookmark);
$('#section-bookmark-list').on('click', '.bookmark__btn-read',toggleRead);
$('#section-bookmark-list').on('click', '.bookmark__btn-delete', removeBookmark);
$('#bookmark-remove-all-read').on('click', removeAllRead);
$('#form__input-title').on('keyup', requireTitleAndURL);
$('#form__input-url').on('keyup', requireTitleAndURL);
$('#form__btn-submit').on('click', updateCount);
$('#section-bookmark-list').on('click', '.bookmark__btn-read', updateCount);
$('#section-bookmark-list').on('click', '.bookmark__btn-delete', updateCount);
$('#form__input-url').on('keyup', isValidURL);

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

function requireTitleAndURL() {
  if ($('#form__input-title').val() !== '' && $('#form__input-url').val() !== '') {
    $('#form__btn-submit').attr('disabled', false);
  } 
}

function  isValidURL() {
  var myVariable = $('#form__input-url').val();
if(/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(myVariable)){
    $('#form__btn-submit').attr('disabled', false);;
} else {
    $('#form__btn-submit').attr('disabled', true);;
}
}

function prependBookmark(e) {
  requireTitleAndURL();
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



