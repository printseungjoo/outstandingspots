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
    console.log('지도 초기화 시작하기');

    if (typeof window.kakao === 'undefined') {
        console.error('카카오맵이 로드되지 않았습니다.');
        return;
    }
    console.log('kakao 객체 확인됨');
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
        console.error('map 컨테이너 찾기 실패');
        return;
    }
    console.log('map 컨테이너 확인됨');
    if (window.kakaoMap) {
        console.log('기존 지도 재사용하기');
        callback(window.kakaoMap);
        return;
    }
    console.log('kakao.maps.load 실행하기');

    window.kakao.maps.load(() => {
        console.log('kakao.maps.load 콜백 실행됨');
        const mapOption = {
            center: new window.kakao.maps.LatLng(37.378760, 126.662809),
            level: 3,
        };
        console.log('새 지도 생성 완료');
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        window.kakaoMap = map;
        console.log('지도 콜백 전달 완료');
        callback(map);

        window.SButton = function (suny: boolean) {
            console.log('SButton 호출됨', suny);
            if (suny) {
                map.setCenter(new window.kakao.maps.LatLng(37.378760, 126.662809));
                map.setLevel(3);
                console.log('지도 중심 SUNY로 이동하기');
            }
        };
    });
}