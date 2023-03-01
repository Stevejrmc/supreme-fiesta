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
  const hide = selector => $(`${selector}`).addClass("hide");
  const showBlog = () => {
    closeMenu();
    hide(".resume");
    hide(".projects");
    $(".blog").removeClass("hide");
  }
  const showResume = () => {
    closeMenu();
    hide(".blog");
    hide(".projects");
    $(".resume").removeClass("hide");
  }
  const showProjects = () => {
    closeMenu();
    hide(".blog");
    hide(".resume");
    $(".projects").removeClass("hide");
  }
  const showLangOptions = () => {
    $("#lang-options").removeClass("hide");
  }

  // Thank you Marcelo Rossi: 
  // https://stackoverflow.com/users/463329/marcelo-rossi
  // Found this function on Stackoverflow:
  function simulateClick(item) {
    item.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    item.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    item.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
    item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    item.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    item.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    item.dispatchEvent(new Event('change', { bubbles: true }));

    return true;
  }

  const selectLanguage = function () {
    let userChoice = this.id;
    const options = {
      chinese: 19,
      french: 33,
      portuguese: 92,
      spanish: 109,
      arabic: 4,
      english: 28,
    }
    const abbrv = {
      chinese: "CN",
      french: "FR",
      portuguese: "PT",
      spanish: "ES",
      english: "EN",
      arabic: "AR"
    };
    let abbreviation = abbrv[userChoice];
    let selection = options[userChoice];
    console.log("selection: ", selection);
    console.log("abbreviation: ", abbreviation);
    console.log(document.querySelector(".goog-te-combo"))
    const lang = document.querySelector(".goog-te-combo").children[selection];
    lang.selected = true;
    simulateClick(lang);
    $("#lang").text(abbreviation);

    hide("#lang-options");
  };




  // Event handlers
  $(document).on("click", ".menu-closed", openMenu);
  $(document).on("click", ".menu-opened", closeMenu);
  $(".blog-link").on("click", showBlog);
  $(".resume-link").on("click", showResume);
  $(".projects-link").on("click", showProjects);
  $("#head-right").on("click", showLangOptions);
  $(".lang").on("click", selectLanguage);
})