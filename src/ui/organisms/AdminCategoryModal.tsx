import styled from '@emotion/styled';
import { useState } from 'react';

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    position: relative;
    background-color: white;
    width: 40%;
    height: 40vh;
    border-radius: 10px;
`;

const XButton = styled.button`
    display: flex;
    margin-left: auto;
    background-color: white;
`;

const GoCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
    margin: 0;
    font-weight: 900;
    margin-top: 3vh;
`;

const ModalInput = styled.input`
    background-color: #D9D9D9;
    width: 50%;
    height: 6vh;
    border: 0;
    margin-top: 2vh;
    text-align: center;
`;

const SubmitButton = styled.button`
    background-color: #78A7FF;
    width: 20%;
    height: 5vh;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bolder;
`;

interface AdminCategoryModalProps {
    ModalTitle: string;
}

export function AdminCategoryModal({ ModalTitle }: AdminCategoryModalProps) {
    const [isOpened, setIsOpened] = useState<boolean>(true);

    return(
        <>
            {isOpened && (
                <Overlay>
                    <Modal>
                        <XButton onClick = {() => setIsOpened(false)}> x </XButton>
                        <GoCenter>
                            <Title> { ModalTitle } </Title>
                            <ModalInput></ModalInput>
                            <p> 통일성을 위해 이모티콘 + 띄어쓰기 + 카테고리명으로 입력해주세요. </p>
                            <SubmitButton> 입력 </SubmitButton>
                        </GoCenter>
                    </Modal>
                </Overlay>
            )}
        </>
    )
}