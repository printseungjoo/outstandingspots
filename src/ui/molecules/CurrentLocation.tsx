export function CurrentLocation(kakaoMap: kakao.maps.Map) {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, lon = position.coords.longitude;
        const locPosition = new kakao.maps.LatLng(lat, lon), message = '<div style="padding:5px;"> 내 위치 </div>';
        const marker = new kakao.maps.Marker({
            position: locPosition
        });
        const iwContent = message, iwRemoveable = true;
        const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable
        });
        infowindow.open(kakaoMap, marker);
        kakaoMap.setCenter(locPosition);
    });

    return null;
}