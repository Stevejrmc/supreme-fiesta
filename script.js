$(() => {
  $(document).on("click", ".menu-closed", function () {
    $(this).removeClass("menu-closed").addClass("menu-opened");

    $("#menu-draw").css({ "left": 0 });
  });

  $(document).on("click", ".menu-opened", function () {
    $(this).removeClass("menu-opened").addClass("menu-closed");

    $("#menu-draw").css({ "left": "-40vw" });
  });
})