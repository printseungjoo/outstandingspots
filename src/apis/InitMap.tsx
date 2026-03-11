declare global {
    namespace kakao.maps {
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
            map?: Map;
            position: LatLng;
        }

        class Marker {
            constructor(options: MarkerInterface);
            setMap(map: Map | null): void;
        }

        interface InfoWindowInterface {
            content: string;
            removable: boolean;
        }

        class InfoWindow {
            constructor(options: InfoWindowInterface);
            open(map: Map, marker: Marker): void;
            close(): void;
        }
    }

    interface Window {
        kakao: typeof kakao;
        SButton: (suny: boolean) => void;
        kakaoMap?: kakao.maps.Map;
    }
}

export function InitMap(callback: (map: kakao.maps.Map) => void) {
    if (typeof window.kakao === 'undefined') {
        console.error('카카오맵이 로드되지 않았습니다.');
        return;
    }
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
        return;
    }
    if (window.kakaoMap) {
        callback(window.kakaoMap);
        return;
    }

    window.kakao.maps.load(() => {
        const mapOption = {
            center: new window.kakao.maps.LatLng(37.378760, 126.662809),
            level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        window.kakaoMap = map;
        callback(map);

        window.SButton = function (suny: boolean) {
            if (suny) {
                map.setCenter(new window.kakao.maps.LatLng(37.378760, 126.662809));
                map.setLevel(3);
            }
        };
    });
}