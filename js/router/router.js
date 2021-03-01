import filterPlayers from "../utils/filterPlayerData.js";
import renderPlayerData from "../modules/renderPlayers.js";
import "../router/routie.js";

/**
 *
 * @param {object} playerData
 */

// i'm using normal functions instead of arrow functions to resolve routie errors
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
  // this function will remove and add the id of the chosen team to the container
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
  // hides the current shown section
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
  // Shows the chosen section
  function show(route) {
    document.getElementsByClassName(route)[0].classList.add("active");
  }

  removeOverlayAfterClick();

  /**
   *
   */
  // this function will remove the overlay
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
