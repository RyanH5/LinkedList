$('#form__btn-submit').on('click', prependBookmark);
$('#section-bookmark-list').on('click', '.bookmark__btn-read',toggleRead);
$('#section-bookmark-list').on('click', '.bookmark__btn-delete', removeBookmark);
$('#form__input-title').on('keyup', requireTitleAndURL);
$('#form__input-url').on('keyup', requireTitleAndURL);

function requireTitleAndURL() {
  if ($('#form__input-title').val() !== '' && $('#form__input-url').val() !== '') {
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
    </article>`)
}

function toggleRead() {
  $(this).toggleClass('read');
}

function removeBookmark() {
  console.log(this);
  $(this).closest('article').remove();
}

