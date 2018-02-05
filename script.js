$('#form__btn-submit').on('click', prependBookmark);
$('#section-bookmark-list').on('click', '.bookmark__btn-read',toggleRead);
// $('#form__input-title').val() = $('bookmark__website-title').text()
// console.log(title)

// function Bookmark(title, url) {
//   this.title = title;
//   this.url = url;
//   this.btnRead = btnRead;
//   this.btnDelete = buttonDelete;
// }


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

