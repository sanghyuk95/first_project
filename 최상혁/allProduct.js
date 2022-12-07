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
const $topBtn = document.querySelector(".topBtn");
$topBtn.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const $ham = document.querySelector(".ham");
const $bar = document.querySelector(".fa-bars");
$bar.addEventListener("click", (e) => {
    $ham.classList.toggle("hidden");
});

const $img = document.querySelectorAll(".img");
const $link = document.querySelectorAll(".proLink");
const $rp = document.querySelector(".rp");

$link.forEach((e) => {
    e.addEventListener("click", (item) => {
        const recent = getComputedStyle(e.firstElementChild).backgroundImage;
        const $title = item.target.firstElementChild.textContent;
        const json = JSON.stringify(recent);
        const json2 = JSON.stringify(e.href);
        const json3 = JSON.stringify($title)
        localStorage.setItem("url", json);
        localStorage.setItem("link", json2);
        localStorage.setItem('title',json3)
    });
});

const url = localStorage.getItem("url");
const link = localStorage.getItem("link");
const $title = localStorage.getItem("title");

const parseUrl = JSON.parse(url);
const parseLink = JSON.parse(link);
const parseTitle = JSON.parse($title);

const $p = document.createElement('p')
$p.innerHTML = parseTitle
$rp.appendChild($p)
$rp.style.backgroundImage = parseUrl;
$rp.style.backgroundSize = "contain";
$rp.style.backgroundRepeat = "no-repeat";

$rp.addEventListener("click", (e) => {
    location = parseLink;
});

const $SE = document.querySelector(".SE");
const $SEBtn = document.querySelector(".SEBtn");

$SEBtn.addEventListener("click", () => {
    console.log($SE.value);
    $img.forEach((e) => {
        const $parent = e.parentElement.parentElement;
        $parent.classList.toggle("hideList", !e.firstElementChild.textContent.includes($SE.value));
    });
    $SE.value = "";
});
$SE.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        $img.forEach((e) => {
            const $parent = e.parentElement.parentElement;
            $parent.classList.toggle("hideList", !e.firstElementChild.textContent.includes($SE.value));
        });
        $SE.value = "";
    }
});
