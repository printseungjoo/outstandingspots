import type { Page } from '@playwright/test'

import { PNG_1X1 } from './mockApi'

export function storeForm(page: Page) {
    return {
        photoInput: page.locator('#imageFileInput'),
        preview: page.getByRole('img', { name: '매장 미리보기' }),
        category: page.locator('select'),
        nameKor: page.getByPlaceholder('예) 아웃스탠딩 카페'),
        nameEng: page.getByPlaceholder('예) Outstanding cafe'),
        discountKor: page.getByPlaceholder('예) 음료 10% 할인'),
        discountEng: page.getByPlaceholder('예) Drink 10% discount'),
        themeKor: page.getByPlaceholder('예) 한식'),
        themeEng: page.getByPlaceholder('예) Korean food'),
        branchKor: page.getByPlaceholder('예) 송도점'),
        branchEng: page.getByPlaceholder('예) Songdo branch'),
        mainBranch: page.getByLabel('본점'),
        naverMap: page.getByPlaceholder('https://map.naver.com/...'),
        openTime: page.locator('input[type="time"]').nth(0),
        closeTime: page.locator('input[type="time"]').nth(1),
        address: page.getByPlaceholder('주소를 입력하면 위도/경도가 자동으로 계산됩니다'),
        searchAddress: page.getByRole('button', { name: '검색', exact: true }),
        lat: page.getByPlaceholder('37.3751739'),
        lon: page.getByPlaceholder('126.6682747'),
        descriptionKor: page.getByPlaceholder('예) 점심특선은 10월 21일부터 시행'),
        descriptionEng: page.getByPlaceholder('예) Lunch special starts from Oct 21'),
        noDescription: page.getByLabel('없음'),
        cancel: page.getByRole('button', { name: '취소', exact: true }),
        save: page.getByRole('button', { name: '저장', exact: true })
    };
}

export async function uploadPhoto(page: Page) {
    await storeForm(page).photoInput.setInputFiles({ name: 'store.png', mimeType: 'image/png', buffer: PNG_1X1 });
}
