(function () {
    'use strict';
    
    const $searchButton = document.querySelector('.fa-magnifying-glass')
    const $searchBar = document.querySelector('.search')
    const $join = document.querySelector('.join')
    const $container = document.querySelector('.container')
    const $login = document.querySelector('.fa-user')
    const $x = document.querySelector('.fa-xmark')
    
    $searchButton.addEventListener('click', e => {
        $searchBar.classList.toggle('on')
    })
    $login.addEventListener('click', e => {
        $join.classList.toggle('hidden')
        $container.classList.toggle('black')
    })
    $x.addEventListener('click', e => {
        $join.classList.toggle('hidden')
        $container.classList.toggle('black')
    })
    
    
    var map = null; //지도 생성 및 객체 리턴
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.86832023880102, 128.59396305101927), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    
    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(35.86832023880102,128.59396305101927); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
    const $li = document.querySelectorAll('li')
    const $findLoad = document.querySelectorAll('.findLoad')

    for (let i = 0; i < $li.length; i++){
        const store = $li[i].firstElementChild.textContent
        const addr = $li[i].firstElementChild.nextElementSibling.textContent
        $li[i].addEventListener('click', e => {
            geocoder.addressSearch(addr, function(result, status) {
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
                    
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                        
                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: `<span class="info-title">${store}</span>`,
                    });
                    infowindow.open(map, marker);
                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);

                    var infoTitle = document.querySelectorAll(".info-title");
                    infoTitle.forEach(function (e) {
                        var w = e.offsetWidth ;
                        var ml = w / 2;
                        e.parentElement.style.top = "5px";
                        e.parentElement.style.left = "50%";
                        e.parentElement.style.marginLeft = -ml + "px";
                        e.parentElement.style.width = w + "px";
                        e.parentElement.previousSibling.style.display = "none";
                        e.parentElement.parentElement.style.border = "0px";
                        e.parentElement.parentElement.style.background = "unset";
                    });
                }
                
            })
        })
        $findLoad[i].addEventListener('click', e => {
            geocoder.addressSearch(addr, function(result, status) {
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
                    window.open(`https://map.kakao.com/link/to/${store},${result[0].y},${result[0].x}`)
                }
            })
        })
    }

    const $storeList = document.querySelector('.storeList')
    const $select = $storeList.querySelector('select')
    const $btn = $storeList.querySelector('.btn')

    $btn.addEventListener('click', e => {
        $li.forEach(e => {
            e.classList.toggle(
                "yes",
                e.firstElementChild.nextElementSibling.textContent.includes($select.value)
            );
        })
        
    })

    const $ham = document.querySelector(".ham");
    const $bar = document.querySelector(".fa-bars");
    $bar.addEventListener("click", (e) => {
        $ham.classList.toggle("hidden");
    });




})()