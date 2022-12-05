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

    (function () {
        //선생님의 해결
        const $myimage = document.querySelector("#myimage");
        const $imgList = document.querySelectorAll(".img");
        const $bigImg = document.querySelector(".bigImg");
        const zoom = 3;

        $myimage.onload = function (e) {
            const glass = document.querySelector(".img-magnifier-glass");
            glass.style.backgroundImage = "url('" + $myimage.src + "')";
            glass.style.backgroundSize = $myimage.width * zoom + "px " + $myimage.height * zoom + "px";
        };

        $imgList.forEach((img) => {
            img.addEventListener("click", (e) => {
                const imgIn = getComputedStyle(img).backgroundImage;
                const changeUrl = imgIn.substring(4).replace(")", "").replaceAll('"', "");
                $myimage.src = changeUrl;
                $imgList.forEach((e) => {
                    e.classList.toggle("border", $myimage.src === getComputedStyle(e).backgroundImage.substring(4).replace(")", "").replaceAll('"', ""));
                });
            });
        });

        $bigImg.addEventListener("mouseover", (e) => {
            const glass = document.querySelector(".img-magnifier-glass");
            if (glass) {
                glass.style.display = "block";
            }
        });

        $bigImg.addEventListener("mouseout", (e) => {
            const glass = document.querySelector(".img-magnifier-glass");
            if (glass) {
                glass.style.display = "none";
            }
        });

        function magnify() {
            var glass, w, h, bw;

            /*create magnifier glass:*/
            glass = document.createElement("div");
            glass.setAttribute("class", "img-magnifier-glass");
            $myimage.parentElement.insertBefore(glass, $myimage);

            bw = 3;
            w = glass.offsetWidth / 2;
            h = glass.offsetHeight / 2;
            /*execute a function when someone moves the magnifier glass over the image:*/
            glass.addEventListener("mousemove", moveMagnifier);
            $myimage.addEventListener("mousemove", moveMagnifier);

            /*and also for touch screens:*/
            glass.addEventListener("touchmove", moveMagnifier);
            $myimage.addEventListener("touchmove", moveMagnifier);
            function moveMagnifier(e) {
                var pos, x, y;
                /*prevent any other actions that may occur when moving over the image*/
                e.preventDefault();
                /*get the cursor's x and y positions:*/
                pos = getCursorPos(e);
                x = pos.x;
                y = pos.y;
                /*prevent the magnifier glass from being positioned outside the image:*/
                if (x > $myimage.width - w / zoom) {
                    x = $myimage.width - w / zoom;
                }
                if (x < w / zoom) {
                    x = w / zoom;
                }
                if (y > $myimage.height - h / zoom) {
                    y = $myimage.height - h / zoom;
                }
                if (y < h / zoom) {
                    y = h / zoom;
                }
                /*set the position of the magnifier glass:*/
                glass.style.left = x - w + "px";
                glass.style.top = y - h + "px";
                /*display what the magnifier glass "sees":*/
                glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
            }
            function getCursorPos(e) {
                var a,
                    x = 0,
                    y = 0;
                e = e || window.event;
                /*get the x and y positions of the image:*/
                a = $myimage.getBoundingClientRect();
                /*calculate the cursor's x and y coordinates, relative to the image:*/
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                /*consider any page scrolling:*/
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return { x: x, y: y };
            }
        }
        magnify();
    })();

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
