import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

const AllStore = styled.div`
    width: 25%;
    height: 80vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
    z-index: 3;
`;

const Title = styled.p`
    font-weight: bolder;
    margin-bottom: 1vh;
    margin-top: 3vh;
`;

const Detail = styled.p`
    font-size: 0.8rem;
    margin-top: 1vh;
    text-align: center;
    margin-bottom: 3vh;
`;

const StoreButton = styled.button`
    width: 100%;
    font-size: 0.8rem;
    background-color: #EFEEEF;
    border-radius: 0;
    border: 0.3px solid black;
    padding: 3vh;
`;

interface AllStoresProps {
    onOpen?: (store: fetchStoreInterface) => void;
}

export function AllStores({ onOpen }: AllStoresProps) {
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);

    useEffect(() => {
        fetch('http://localhost:5500/stores')
            .then((res) => res.json())
            .then((data) => setStores(data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <AllStore>
            <Title>
                전체 매장 확인하기
            </Title>
            <Detail>
                가나다 순으로 정렬되어 있습니다. <br/> 스크롤을 통해 더 확인하세요!
            </Detail>
            {stores.map((store) => (
                <StoreButton key = {store._id} onClick = {() => {onOpen?.(store);}}>
                    {store.name.kor} {store.branch.kor}
                </StoreButton>
            ))}
        </AllStore>
    )
}