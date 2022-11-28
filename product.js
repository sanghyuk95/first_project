const $searchButton = document.querySelector(".fa-magnifying-glass");
const $searchBar = document.querySelector(".search");
const $join = document.querySelector(".join");
const $container = document.querySelector(".container");
const $login = document.querySelector(".fa-user");
const $x = document.querySelector(".fa-xmark");

$searchButton.addEventListener("click", (e) => {
  $searchBar.classList.toggle("on");
});
$login.addEventListener("click", (e) => {
  $join.classList.toggle("hidden");
  $container.classList.toggle("black");
});
$x.addEventListener("click", (e) => {
  $join.classList.toggle("hidden");
  $container.classList.toggle("black");
});

const $ham = document.querySelector(".ham");
const $bar = document.querySelector(".fa-bars");
$bar.addEventListener("click", (e) => {
    $ham.classList.toggle("hidden");
});

