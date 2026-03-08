import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';
import { NaverMaps } from '../atoms/NaverMaps';
import { Camera } from '../atoms/Camera';

const AdminStoresStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const StoresStyled = styled.button`
    width: 100%;
    border: 0.5px solid black;
    border-radius: 0;
    padding: 0.8rem;
`;

const StoreTopLeft = styled.div`
    display: flex;
    white-space: nowrap;
    gap: 0.8rem;
`;

const StoreName = styled.span`
    white-space: nowrap;
`;

const StoreTop = styled.div`
    display: flex;
    align-items: center;
`;

const StoreBranch = styled.div`
    background-color: #D9D9D9;
    border: 0.5px solid black;
    padding-left: 1%;
    padding-right: 1%;
`;

const StoreLatLon = styled.p`
    color: #949292;
    margin-left: 1%;
    margin: 0;
`;

const StoreIcons = styled.div`
    margin-left: auto;
    margin-right: 1%;
    display: flex;
`;

const StoreDiscount = styled.div`
    display: flex;
    text-align: left;
    gap: 0.5%;
    margin-bottom: 1vh;
`;

const BoldText = styled.p`
    margin: 0;
    font-weight: bolder;
    white-space: nowrap;
`;

export function AdminStores() {
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/stores')
            .then((res) => res.json())
            .then((data) => setStores(data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <AdminStoresStyled>
            {stores.map((store) => (
                <StoresStyled key={ store._id }>
                    <StoreTop>
                        <StoreTopLeft>
                            <StoreName>{ store.name.kor }</StoreName>
                            <StoreBranch>
                                { store.branch.kor }
                            </StoreBranch>
                            <StoreLatLon>
                                ({ store.lat }, { store.lon })
                            </StoreLatLon>
                        </StoreTopLeft>
                        <StoreIcons>
                            <NaverMaps storeNaverMap = { store.naverMap }/>
                            <Camera storePhoto = { store.photo }/>
                        </StoreIcons>
                    </StoreTop>
                    <StoreDiscount>
                        <BoldText>
                            할인 가격 :
                        </BoldText>
                        { store.discount.kor }
                    </StoreDiscount>
                    <StoreDiscount>
                        <BoldText>
                            추가 유의사항 :
                        </BoldText>
                        { store.description.kor }
                    </StoreDiscount>
                </StoresStyled>
            ))}
        </AdminStoresStyled>
    )
}