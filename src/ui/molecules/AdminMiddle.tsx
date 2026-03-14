import styled from '@emotion/styled';

import { AdminStores } from './AdminStores';
import { AdminCategories } from './AdminCategories';

const AdminMiddleBackground = styled.div`
    width: 100%;
    height: 73vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    width: 100%;
    height: 68vh;
    border: 0;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 5vh;
`;

type Language = 'kor' | 'eng';

interface AdminMiddleProps {
    isChecked: boolean;
    onChangeLanguage: Language;
}

export function AdminMiddle({ isChecked, onChangeLanguage }: AdminMiddleProps) {
    return(
        <AdminMiddleBackground>
            <Box>
                {isChecked ? <AdminCategories onChangeLanguage = { onChangeLanguage }/> : <AdminStores onChangeLanguage = { onChangeLanguage }/>}
            </Box>
        </AdminMiddleBackground>
    )
}