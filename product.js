(function () {
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

    const $bigImg = document.querySelector(".bigImg");
    const $img = document.querySelectorAll(".img");
    const $myImg = document.querySelector("#myimage");

    function magnify(imgID, zoom) {
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);

        /* Create magnifier glass: */
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");
        /* Insert magnifier glass: */
        img.parentElement.insertBefore(glass, img);
        /* Set background properties for the magnifier glass: */
        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = img.width * zoom + "px " + img.height * zoom + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        $img.forEach((e) => {
            e.addEventListener("click", ({ target }) => {
                const imgIn = getComputedStyle(target).backgroundImage;
                const changeUrl = imgIn.substring(4).replace(")", "").replaceAll('"', "");
                $myImg.src = changeUrl;
                glass.style.backgroundImage = "url('" + img.src + "')";
                glass.style.backgroundRepeat = "no-repeat";
                glass.style.backgroundSize = img.width * zoom + "px " + img.height * zoom + "px";
                bw = 3;
                w = glass.offsetWidth / 2;
                h = glass.offsetHeight / 2;
                $img.forEach((e) => {
                    e.classList.toggle("border", $myImg.src === getComputedStyle(e).backgroundImage.substring(4).replace(")", "").replaceAll('"', ""));
                });
            });
            $img.forEach((e) => {
                e.classList.toggle("border", $myImg.src === getComputedStyle(e).backgroundImage.substring(4).replace(")", "").replaceAll('"', ""));
            });
        });

        /* Execute a function when someone moves the magnifier glass over the image: */
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);

        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
        function moveMagnifier(e) {
            var pos, x, y;
            /* Prevent any other actions that may occur when moving over the image */
            e.preventDefault();
            /* Get the cursor's x and y positions: */
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            /* Prevent the magnifier glass from being positioned outside the image: */
            if (x > img.width - w / zoom) {
                x = img.width - w / zoom;
            }
            if (x < w / zoom) {
                x = w / zoom;
            }
            if (y > img.height - h / zoom) {
                y = img.height - h / zoom;
            }
            if (y < h / zoom) {
                y = h / zoom;
            }
            /* Set the position of the magnifier glass: */
            glass.style.left = x - w + "px";
            glass.style.top = y - h + "px";
            /* Display what the magnifier glass "sees": */
            glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
        }

        function getCursorPos(e) {
            var a,
                x = 0,
                y = 0;
            e = e || window.event;
            /* Get the x and y positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    }
    
    magnify("myimage", 3);
    

    const $open = document.querySelector(".open");
    const $hideInfo = document.querySelector(".hideInfo");
    const $up = document.querySelector(".fa-angle-up");
    const $down = document.querySelector(".fa-angle-down");
    $open.addEventListener("click", (e) => {
        $hideInfo.classList.toggle("discover");
        $up.classList.toggle("discover");
        $down.classList.toggle("discover");
    });

    const $buy = document.querySelector(".buy");
    const $sizeSelect = document.querySelector(".sizeSelect");
    $sizeSelect.addEventListener("click", (e) => {
        if ($sizeSelect.value === "soldOut") {
            $buy.textContent = "알림 받기";
        } else if ($sizeSelect.value === "size") {
            $buy.textContent = "사이즈를 선택하세요";
        } else {
            $buy.textContent = "구매하기";
        }
    });
})();