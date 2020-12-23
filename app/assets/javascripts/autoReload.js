$(function() {
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

  let reloadMessages = function() {
    let last_message_id = $('.Chat-main__message-box:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !==0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Chat-main__message-list').append(insertHTML)
        $('.Chat-main__message-list').animate({ scrollTop: $('.MessageField')[0].scrollHeight})
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 70000);
});