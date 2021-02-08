export default function router() {
  routie({
    home: function () {
      const route = this.path;
      toggle(route);
    },
    games: function () {
      const route = this.path;
      toggle(route);
    },
    teams: function () {
      const route = this.path;
      toggle(route);
    },
    stats: function () {
      const route = this.path;
      toggle(route);
    },
  });

  function toggle(route) {
    hide();
    show(route);
  }
  function hide() {
    const sections = document.getElementsByTagName("section");
    Object.values(sections).map((item, index) => {
      item.classList.remove("active");
    });
  }
  function show(route) {
    document.getElementsByClassName(route)[0].classList.add("active");
  }
  removeOverlayAfterClick();

  function removeOverlayAfterClick() {
    const buttons = document.querySelectorAll("ul a");
    const input = document.querySelectorAll("#menuToggle input");

    buttons.forEach(function (item) {
      item.addEventListener("click", () => {
        input[0].checked = false;
      });
    });
  }
}
