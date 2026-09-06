export type OwnerStatus = 'pending' | 'approved' | 'rejected';

export default interface Owner {
    _id: string;
    name: string;
    phone: string;
    storeId: string;
    id: string;
    phoneVerified: boolean;
    firebaseUid?: string;
    status: OwnerStatus;
    createdAt?: string;
    storeName?: {
        kor: string;
        eng: string;
    };
}
