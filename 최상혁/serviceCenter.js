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


const $result = document.querySelector(".result");
const $cateDt = document.querySelectorAll(".cateDt");
const 쇼핑 = JSON.parse(JSON.stringify(FAQ.쇼핑));
const 서비스 = JSON.parse(JSON.stringify(FAQ.서비스));
const 제품 = JSON.parse(JSON.stringify(FAQ.제품));
const 기프트 = JSON.parse(JSON.stringify(FAQ.기프트));
const 결제 = JSON.parse(JSON.stringify(FAQ.결제));
const 배송 = JSON.parse(JSON.stringify(FAQ.배송));
const 반품 = JSON.parse(JSON.stringify(FAQ.반품));
const $modal = document.querySelector('.modal')
const $x2 = document.querySelector(".x2");

//초기값 보여주기위해 근데 중복소스;;
for (let i = 0; i < 쇼핑.length; i++) {
    makeList(쇼핑, i);
}
makeModal();
//---------------------------
$cateDt.forEach((e) => {
    e.addEventListener("click", (item) => {
        $result.innerHTML = "";
        for (let i = 0; i < eval(e.textContent).length; i++) {
            makeList(eval(e.textContent), i);
        }
        makeModal();
        $cateDt.forEach((e) => {
            e.classList.toggle("now", e.textContent === item.target.textContent);
        });
    });
});

function makeList(name, i) {
    const $div = document.createElement("div");
    const $hidden = document.createElement('div')
    $div.className = "answer";
    $div.innerText = name[i].title;
    $hidden.className = 'hidden'
    $hidden.innerText = name[i].detail;
    $result.appendChild($div);
    $result.appendChild($hidden);
}

function makeModal() {
    const $answer = document.querySelectorAll(".answer");
    const $insert = document.querySelector('.insert')
    const $title = document.createElement('div')
    const $modalC = document.createElement('div')
    $answer.forEach((e) => {
        e.addEventListener("click", (item) => {
            $insert.innerHTML = null
            $title.className = 'title'
            $title.innerHTML = item.target.textContent
            $modalC.className = 'modalC'
            $modalC.innerHTML = item.target.nextElementSibling.innerHTML
            $insert.appendChild($title)
            $insert.appendChild($modalC)
            $container.classList.toggle("black");
            $modal.classList.toggle('hidden')
        });
    });
}

$x2.addEventListener("click", (e) => {
    $container.classList.toggle("black");
    $modal.classList.toggle('hidden')
});