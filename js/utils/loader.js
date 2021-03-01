/**
 *
 * @param {string} key
 */
// logic for loader
export default function loader(key) {
  const loader = document.getElementById("loader");

  if (key == "show") {
    loader.classList.add("show");
  }
  if (key == "hide") {
    loader.classList.remove("show");
  } else {
    return;
  }
}
