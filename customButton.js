$(document).ready(function () {
  // Select all buttons with the class 'btn-custom'

  const semua = $("#btnAll");
  const primary = $("#btnPrimary");
  const secondary = $("#btnSecondary");
  let active = [];

  // check if the button has class "active", if does push the id to array
  // if not, check the ID if it's already in array if it does remove it from the array
  function checkActive(buttons) {
    if ($(buttons).hasClass("active")) {
      active.push(buttons.prop("id"));
    } else {
      const index = active.indexOf(buttons.prop("id"));
      if (index !== -1) {
        active.splice(index, 1);
      }
    }
    console.log(active);
  }

  // change the class if has class "active"
  function activeButton(buttons) {
    if ($(buttons).hasClass("active")) {
      $(buttons).toggleClass("btn-primary").removeClass("btn-light");
    } else {
      $(buttons).toggleClass("btn-light").removeClass("btn-primary");
    }
  }

  // change class buttons "semua" if the array length >= 2
  function changeClass() {
    if (active.length >= 2) {
      semua.addClass("active btn-primary").removeClass("btn-light");
    } else {
      semua.addClass("btn-light").removeClass("active btn-primary");
    }
  }

  function activeAll() {
    if (!semua.hasClass("active")) {
      semua.addClass("btn-light").removeClass("active btn-primary");
      primary.addClass("btn-light").removeClass("active btn-primary");
      secondary.addClass("btn-light").removeClass("active btn-primary");
      active = [];
    } else {
      semua.addClass("btn-primary").removeClass("btn-light");
      primary.addClass("active btn-primary").removeClass("btn-light");
      secondary.addClass("active btn-primary").removeClass("btn-light");

      const allButtons = $("#btnPrimary", "#btnSecondary");
      allButtons.each(function () {
        const buttonId = $(this).prop("id");
        if (buttonId !== "btnAll") {
          if (active.includes(buttonId)) {
            active.splice(active.indexOf(buttonId), 1);
          } else {
            active.push(buttonId);
          }
        }
      });
    }
  }

  $(primary).click(function () {
    activeButton(primary);
    checkActive(primary);
    changeClass(this);
  });

  $(secondary).click(function () {
    activeButton(secondary);
    checkActive(secondary);
    changeClass(this);
  });

  $(semua).click(function () {
    activeAll(semua);
  });
});
