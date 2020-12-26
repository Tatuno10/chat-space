$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html = 
      `<div class="Chat-main__message-box" data-message-id=${message.id}>
        <div class="Chat-main__message-info">
          <div class="Chat-main__poster-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-date">
            ${message.created_at}
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
      `<div class="Chat-main__message-box" data-message-id=${message.id}>
        <div class="Chat-main__message-info">
          <div "class=Chat-main__poster-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-date">
            ${message.created_at}
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
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.Chat-main__submit-btn').prop('disabled', false)
    })
    .fail(function() {
      alert("エラーです")
      $('.Chat-main__submit-btn').prop('disabled', false)
    })
  })
});
