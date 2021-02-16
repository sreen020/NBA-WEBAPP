import filterPlayers from "./filterPlayerData.js";
import renderPlayerData from "./renderPlayers.js";

/**
 *
 * @param {object} playerData
 */
export default function router(playerData) {
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

    "teams/:id": (id) => {
      addSection(id);
      toggle(id);
      const filtered = filterPlayers(playerData, id);
      renderPlayerData(filtered);
    },
  });

  /**
   *
   * @param {string} id
   */
  function addSection(id) {
    const teamSection = document.querySelector("#specific-team-section");
    teamSection.classList = "";
    teamSection.classList.add(id);
  }

  /**
   *
   * @param {string} route
   */
  function toggle(route) {
    hide();
    show(route);
  }

  /**
   *
   */
  function hide() {
    const sections = document.getElementsByTagName("section");
    Object.values(sections).map((item, index) => {
      item.classList.remove("active");
    });
  }

  /**
   *
   * @param {string} route
   */
  function show(route) {
    document.getElementsByClassName(route)[0].classList.add("active");
  }

  removeOverlayAfterClick();

  /**
   *
   */
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
