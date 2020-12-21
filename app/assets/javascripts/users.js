$(function(){

  $("#UserSearch__field").on("keyup", function() {
    let input = $("#UserSearch__field").val();
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users/index',
      datatype: 'json',
      data: {keyword: input}
    })
  })
});