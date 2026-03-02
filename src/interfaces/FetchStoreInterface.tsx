export interface fetchStoreInterface {
    _id: string;
    photo: string;
    category: {
        kor: string;
        eng: string;
    };
    name: {
        kor: string;
        eng: string;
    };
    branch: {
        kor: string;
        eng: string;
    };
    naverMap: string;
    lat: number;
    lon: number;
    discount: {
        kor: string;
        eng: string;
    };
    description: {
        kor: string;
        eng: string;
    };
}