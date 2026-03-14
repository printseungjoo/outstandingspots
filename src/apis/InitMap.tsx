import { loadKakaoMapSdk } from "./LoadKakaoMapSdk";

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
    }

    interface Window {
        kakao: typeof kakao;
        SButton: (suny: boolean) => void;
        kakaoMap?: kakao.maps.Map;
    }
}

export async function InitMap(callback: (map: kakao.maps.Map) => void) {
    try {
        await loadKakaoMapSdk();

        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        const mapOption = {
            center: new window.kakao.maps.LatLng(37.378760, 126.662809),
            level: 3
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        window.kakaoMap = map;
        callback(map);

        function SButton(suny: boolean) {
            if (suny) {
                map.setCenter(new window.kakao.maps.LatLng(37.378760, 126.662809));
                map.setLevel(3);
            }
        }
        window.SButton = SButton;
    } catch (error) {
        console.error('카카오맵 초기화를 실패하였습니다:', error);
    }
}