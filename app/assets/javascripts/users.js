$(function(){

  $("#UserSearch__field").on("keyup", function() {
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: {　keyword: input　},
      datatype: "json"
    })
    .done(function(users) {
      console.log("成功です");
    })
    .done(function(users) {
      console.log("失敗しました");
    });
  })
});