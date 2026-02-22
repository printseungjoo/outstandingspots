declare namespace kakao.maps {
    function load(callback: () => void): void;

    class LatLng {
        constructor(lat: number, lng: number);
    }

    interface MapInterface {
        center: LatLng;
        level: number;
    }

    class Map {
        constructor(container: HTMLElement, options: MapInterface);
        setCenter(latlng: LatLng): void;
        setLevel(level: number): void;
    }

    interface MarkerInterface {
        map: Map;
        position: LatLng;
    }

    class Marker {
        constructor(options: MarkerInterface);
    }

    interface InfoWindowInterface {
        content: string;
        removable: boolean;
    }

    class InfoWindow {
        constructor(options: InfoWindowInterface);
        open(map: Map, marker: Marker): void;
    }
}

declare global {
    interface Window {
        kakao: typeof kakao;
        SButton: (suny: boolean) => void;
    }
}

export function InitMap() {
    if (typeof window.kakao === 'undefined') {
        console.error("카카오맵이 로드되지 않았습니다.");
        return;
    }

    window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        const mapOption: { center: kakao.maps.LatLng, level: number } = {
            center: new window.kakao.maps.LatLng(37.378760, 126.662809),
            level: 3
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat: number = position.coords.latitude;
                const lon: number = position.coords.longitude;
                const locPosition: kakao.maps.LatLng = new window.kakao.maps.LatLng(lat, lon);
                const message: string = '<div style="padding:5px;"> 내 위치 </div>';
                displayMarker({ locPosition, message });
            });
        }

        interface displayMarkerProps {
            locPosition: kakao.maps.LatLng;
            message: string;
        }

        function displayMarker({ locPosition, message }: displayMarkerProps) {
            const marker = new window.kakao.maps.Marker({
                map: map,
                position: locPosition
            });
            const iwContent = message,
                iwRemoveable: boolean = true;
            const infowindow = new window.kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemoveable
            });
            infowindow.open(map, marker);
            map.setCenter(locPosition);
        }

        function SButton(suny: boolean) {
            if (suny === true) {
                map.setCenter(new window.kakao.maps.LatLng(37.378760, 126.662809));
                map.setLevel(3);
            }
        }
        window.SButton = SButton;
    }
    );
}