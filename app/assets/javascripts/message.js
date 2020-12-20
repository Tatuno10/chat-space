$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
      `<div class="Chat-main__message-box">
        <div class="Chat-main__message-info">
          <div "class=Chat-main__poster-name">
            ${message.user_name}
          </div>
          <div class="Chat-space__message-date">
            ${message.created_st}
          </div>
        </div>
        <div class="Chat-main__message-text">
          <p class="Chat-main__content">
            ${message.content}
          </p>
          <img class="Chat-main__image" src="${message.image}">
        </div>
      </div>`
      return html;
    } else {
      let html = 
      `<div class="Chat-main__message-box">
        <div class="Chat-main__message-info">
          <div "class=Chat-main__poster-name">
            ${message.user.name}
          </div>
          <div class="Chat-space__message-date">
            ${message.created_st}
          </div>
        </div>
          <div class="Chat-main__message-text">
            <p class="Chat-main__content">
              ${message.content}
            </p>
          </div>
      </div>`
      return html;
    };
  }

  $(".Chat-main__message-form").on("submit",function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html)
      $('form')[0].reset();
    })
  })
});
