import styled from '@emotion/styled';

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

export function AdminMiddle() {
    return(
        <AdminMiddleBackground>
            <Box>
            </Box>
        </AdminMiddleBackground>
    )
}