let kakaoMapSdkPromise: Promise<void> | null = null;

declare global {
    interface Window {
        kakao: typeof kakao;
    }
}

export function loadKakaoMapSdk(): Promise<void> {
    if (window.kakao && window.kakao.maps) {
        return Promise.resolve();
    }

    if (kakaoMapSdkPromise) {
        return kakaoMapSdkPromise;
    }

    kakaoMapSdkPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
            `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${import.meta.env.VITE_KAKAO_APP_KEY}`;
        script.async = true;
        script.dataset.kakaoMapSdk = 'true';

        script.onload = () => {
            if (!window.kakao || !window.kakao.maps) {
                reject(new Error('카카오맵 SDK 로드 후 kakao 객체를 찾을 수 없습니다.'));
                return;
            }

            window.kakao.maps.load(() => resolve());
        };

        script.onerror = () => {
            reject(new Error('카카오맵 SDK 로드를 실패하였습니다.'));
        };

        document.head.appendChild(script);
    });

    return kakaoMapSdkPromise;
}