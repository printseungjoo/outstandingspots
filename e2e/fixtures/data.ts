import type Category from '../../src/types/Category'
import type Owner from '../../src/types/Owner'
import type Store from '../../src/types/Store'
import type Student from '../../src/types/Student'

export const categories: Category[] = [
    { _id: 'cat-cafe', name: { kor: '카페', eng: 'Cafe' } },
    { _id: 'cat-food', name: { kor: '음식점', eng: 'Restaurant' } },
    { _id: 'cat-bar', name: { kor: '주점', eng: 'Bar' } }
];

export const cafeStore: Store = {
    _id: 'store-cafe',
    photo: '/uploads/cafe.png',
    category: { kor: '카페', eng: 'Cafe' },
    name: { kor: '아웃카페', eng: 'Out Cafe' },
    branch: { kor: '송도점', eng: 'Songdo' },
    naverMap: 'https://map.naver.com/cafe',
    lat: 37.3808,
    lon: 126.6613,
    discount: { kor: '음료 10% 할인', eng: 'Drink 10% discount' },
    description: { kor: '학생증 지참', eng: 'Bring your ID' },
    openTime: '00:00',
    closeTime: '00:00',
    theme: { kor: '디저트', eng: 'Dessert' },
    address: { kor: '인천 연수구 송도동 1', eng: '1 Songdo-dong, Incheon' }
};

export const foodStore: Store = {
    _id: 'store-food',
    photo: '/uploads/food.png',
    category: { kor: '음식점', eng: 'Restaurant' },
    name: { kor: '한식당', eng: 'Hansik House' },
    branch: { kor: '본점', eng: 'Main branch' },
    naverMap: 'https://map.naver.com/food',
    lat: 37.3792,
    lon: 126.6643,
    discount: { kor: '식사 15% 할인', eng: 'Meal 15% discount' },
    description: { kor: '없음', eng: 'None' },
    openTime: '09:00',
    closeTime: '21:00',
    theme: { kor: '한식', eng: 'Korean food' },
    address: { kor: '인천 연수구 송도동 2', eng: '2 Songdo-dong, Incheon' }
};

export const barStore: Store = {
    _id: 'store-bar',
    photo: '/uploads/bar.png',
    category: { kor: '주점', eng: 'Bar' },
    name: { kor: '별빛주점', eng: 'Starlight Pub' },
    branch: { kor: '송도점', eng: 'Songdo' },
    naverMap: 'https://map.naver.com/bar',
    lat: 37.3800,
    lon: 126.6658,
    discount: { kor: '안주 1개 서비스', eng: 'One free side dish' },
    description: { kor: '주말 제외', eng: 'Weekdays only' },
    openTime: '18:00',
    closeTime: '02:00',
    theme: { kor: '맥주', eng: 'Beer' },
    address: { kor: '인천 연수구 송도동 3', eng: '3 Songdo-dong, Incheon' }
};

export const stores: Store[] = [cafeStore, foodStore, barStore];

export const STUDENT_PASSWORD = 'student123';

export const student: Student = {
    _id: 'student-mongo-1',
    nickname: '테스트학생',
    email: 'tester@stonybrook.edu',
    emailVerified: true,
    id: 'student1',
    favorites: [cafeStore._id, foodStore._id],
    recentViews: [barStore._id, cafeStore._id]
};

export const OWNER_PASSWORD = 'owner1234';

export const approvedOwner: Owner = {
    _id: 'owner-mongo-1',
    name: '김사장',
    phone: '01012345678',
    storeId: cafeStore._id,
    id: 'owner1',
    phoneVerified: true,
    status: 'approved',
    createdAt: '2026-09-01T00:00:00.000Z',
    storeName: { kor: '아웃카페 송도점', eng: 'Out Cafe Songdo' }
};

export const pendingOwner: Owner = {
    _id: 'owner-mongo-2',
    name: '이대기',
    phone: '01022223333',
    storeId: foodStore._id,
    id: 'owner2',
    phoneVerified: true,
    status: 'pending',
    createdAt: '2026-10-01T00:00:00.000Z',
    storeName: { kor: '한식당 본점', eng: 'Hansik House Main branch' }
};

export const rejectedOwner: Owner = {
    _id: 'owner-mongo-3',
    name: '박거절',
    phone: '01044445555',
    storeId: barStore._id,
    id: 'owner3',
    phoneVerified: true,
    status: 'rejected',
    createdAt: '2026-10-02T00:00:00.000Z',
    storeName: { kor: '별빛주점 송도점', eng: 'Starlight Pub Songdo' }
};

export const owners: Owner[] = [approvedOwner, pendingOwner, rejectedOwner];

export const EMAIL_CODE = '123456';

export const GEOCODE_RESULT = { lat: 37.3815, lon: 126.6601 };
