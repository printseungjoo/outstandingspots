export type OwnerStatus = 'pending' | 'approved' | 'rejected';

export interface OwnerInterface {
    _id?: string;
    name: string;
    phone: string;
    storeId: string;
    id: string;
    phoneVerified: boolean;
    firebaseUid?: string;
    status: OwnerStatus;
}
