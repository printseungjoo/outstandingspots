import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        await mongoose.connection.collection('owners').dropIndex('username_1').catch(() => undefined);
        console.log('MongoDB 연결이 성공하였습니다.');
    } catch {
        console.error('MongoDB에 연결할 수 없습니다.');
        process.exit(1);
    }
};
