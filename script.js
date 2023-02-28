$(() => {
  // functions
  const openMenu = () => {
    $("#menu-button").removeClass("grey");
    $("#menu-button").removeClass("menu-closed").addClass("menu-opened");

    $("#menu-draw").css("left", 0);
  }
  const closeMenu = () => {
    $("#menu-button").addClass("grey");
    $("#menu-button").removeClass("menu-opened").addClass("menu-closed");

    $("#menu-draw").css("left", "-40vw");
  }
  const hide = id => $(`.${id}`).addClass("hide");
  const showBlog = () => {
    closeMenu();
    hide("resume");
    hide("projects");
    $(".blog").removeClass("hide");
  }
  const showResume = () => {
    closeMenu();
    hide("blog");
    hide("projects");
    $(".resume").removeClass("hide");
  }
  const showProjects = function () {
    closeMenu();
    hide("blog");
    hide("resume");
    $(".projects").removeClass("hide");
  }

  // Event handlers
  $(document).on("click", ".menu-closed", openMenu);
  $(document).on("click", ".menu-opened", closeMenu);
  $(".blog-link").on("click", showBlog);
  $(".resume-link").on("click", showResume);
  $(".projects-link").on("click", showProjects);
})