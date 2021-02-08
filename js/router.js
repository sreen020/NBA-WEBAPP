const self = this;

console.log(document.querySelectorAll("div"));

routie({
  home: function () {
    const route = this.path;
    self.toggle(route);
  },
  games: function () {
    const route = this.path;
    self.toggle(route);
  },
  teams: function () {
    const route = this.path;
    self.toggle(route);
  },
  stats: function () {
    const route = this.path;
    self.toggle(route);
  },
});

function toggle(route) {
  this.hide();
  this.show(route);
}
function hide() {
  const sections = document.querySelectorAll("section");
  sections.forEach(function (element) {
    element.classList.remove("active");
  });
}
function show(route) {
  console.log("." + route);
  document.querySelector("." + route).classList.add("active");
}
