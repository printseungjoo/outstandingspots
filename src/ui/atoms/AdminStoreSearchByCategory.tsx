import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useCategories } from '../../contexts/CategoryContext';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreSearchByCategoryStyled = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        flex: 1;
        padding: 0;
        align-items: stretch;
    }
`;

const Text = styled.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
    box-sizing: border-box;
    padding-right: 0.7rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

const SelectButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0 0.9rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    color: black;
    height: calc(1.6rem + 2px);
    min-height: calc(1.6rem + 2px);

    @media (max-width: 1024px) {
        font-size: 0.75rem;
    }
`;

const OptionsList = styled.ul`
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 0;
    right: 0;
    z-index: 30;
    margin: 0;
    padding: 0.25rem 0;
    list-style: none;
    background: white;
    border: 1px solid #333;
    border-radius: 0.3rem;
    max-height: 14rem;
    overflow: auto;
    box-shadow: 0 6px 16px #2E2A6320;
`;

const OptionItem = styled.li<{ $selected: boolean }>`
    padding: 0.45rem 0.7rem;
    font-size: 0.85rem;
    text-align: center;
    cursor: pointer;
    color: #2E2A63;
    background: ${({ $selected }) => $selected ? '#F1EDFC' : 'white'};

    &:hover {
        background: #F1EDFC;
    }
`;

interface AdminStoreSearchByCategoryProps {
    selectedCategory: string;
    onChangeSelectedCategory: (value: string) => void;
}

export function AdminStoreSearchByCategory({ selectedCategory, onChangeSelectedCategory }: AdminStoreSearchByCategoryProps) {
    const { categories } = useCategories();
    const { language } = useLanguage();
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);
    const allLabel = language === 'eng' ? 'All' : '전체';
    const selectedLabel = selectedCategory === 'all'
        ? allLabel
        : (categories.find((category) => category.name.kor === selectedCategory)?.name[language] ?? allLabel);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return(
        <AdminStoreSearchByCategoryStyled>
            <Text> { language === 'eng' ? 'Filter' : '필터' } </Text>
            <SearchDiv ref = { wrapRef }>
                <SelectButton type = 'button' onClick = {() => setOpen((value) => !value)}>
                    { selectedLabel }
                </SelectButton>
                {open && (
                    <OptionsList>
                        <OptionItem $selected = { selectedCategory === 'all' } onClick = {() => {
                            onChangeSelectedCategory('all');
                            setOpen(false);
                        }}>
                            { allLabel }
                        </OptionItem>
                        {categories.map((category) => (
                            <OptionItem key = { category._id }
                                $selected = { selectedCategory === category.name.kor }
                                onClick = {() => {
                                    onChangeSelectedCategory(category.name.kor);
                                    setOpen(false);
                                }}>
                                { language === 'eng' ? category.name.eng : category.name.kor }
                            </OptionItem>
                        ))}
                    </OptionsList>
                )}
            </SearchDiv>
        </AdminStoreSearchByCategoryStyled>
    )
}
