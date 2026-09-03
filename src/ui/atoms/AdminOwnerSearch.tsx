import { useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import type Owner from '../../types/Owner';
import type Language from '../../types/Language';

const AdminOwnerSearchStyled = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const Text = styled.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`;

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`;

const SearchBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0 0.9rem;
    pointer-events: auto;
    position: relative;
`;

const SearchIcon = styled.span`
    font-size: 1rem;
    color: #333;
`;

const SearchInput = styled.input`
    width: 100%;
    min-height: 1.6rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    background-color: transparent;
    color: black;
    margin: 0 0.5rem;

    &::placeholder {
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

const Dropdown = styled.div`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`;

const DropdownItem = styled.button`
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0.45rem 0.5rem;
    border: none;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    color: black;
    cursor: pointer;

    &.active {
        background-color: #f3f0ff;
    }
`;

const EmptyItem = styled.p`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`;

export function ownerStoreLabel(owner: Owner, language: Language) {
    return language === 'eng'
        ? (owner.storeName?.eng || owner.storeName?.kor || '')
        : (owner.storeName?.kor || owner.storeName?.eng || '');
}

export function ownerSuggestionLabel(owner: Owner, language: Language) {
    return `${owner.name} · ${ownerStoreLabel(owner, language)} · ${owner.phone}`;
}

export function ownerMatchesQuery(owner: Owner, query: string) {
    const q = query.trim().toLowerCase();
    if (!q) {
        return true;
    }
    const queryDigits = q.replace(/\D/g, '');
    const phoneDigits = owner.phone.replace(/\D/g, '');
    const haystack = [
        owner.name,
        owner.phone,
        owner.storeName?.kor ?? '',
        owner.storeName?.eng ?? '',
        ownerSuggestionLabel(owner, 'kor'),
        ownerSuggestionLabel(owner, 'eng'),
    ].join(' ').toLowerCase();
    return haystack.includes(q) || (queryDigits.length > 0 && phoneDigits.includes(queryDigits));
}

interface AdminOwnerSearchProps {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
    owners: Owner[];
}

export function AdminOwnerSearch({ searchValue, onChangeSearchValue, owners }: AdminOwnerSearchProps) {
    const { language } = useLanguage();
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuBox, setMenuBox] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });
    const fieldRef = useRef<HTMLDivElement | null>(null);

    const matches = useMemo(() => {
        const q = searchValue.trim();
        if (!q) {
            return [];
        }
        return owners.filter((owner) => ownerMatchesQuery(owner, q)).slice(0, 8);
    }, [owners, searchValue]);

    const updateMenuBox = () => {
        const box = fieldRef.current?.getBoundingClientRect();
        if (!box) {
            return;
        }
        setMenuBox({ top: box.bottom + 4, left: box.left, width: box.width });
    };

    const pickOwner = (owner: Owner) => {
        onChangeSearchValue(ownerSuggestionLabel(owner, language));
        setOpen(false);
    };

    return(
        <AdminOwnerSearchStyled>
            <Text> {language === 'eng' ? 'Search' : '검색'} </Text>
            <SearchDiv>
                <SearchBarDiv ref = { fieldRef }>
                    <SearchIcon> 🔍 </SearchIcon>
                    <SearchInput type = 'text' id = 'ownerSearchBar' value = { searchValue } autoComplete = 'off'
                        onChange = {(e) => {
                            onChangeSearchValue(e.target.value);
                            setOpen(true);
                            setActiveIndex(0);
                            updateMenuBox();
                        }}
                        onFocus = {() => {
                            setOpen(true);
                            updateMenuBox();
                        }}
                        onBlur = {() => {
                            window.setTimeout(() => setOpen(false), 120);
                        }}
                        onKeyDown = {(e) => {
                            if (!open || matches.length === 0) {
                                return;
                            }
                            if (e.key === 'ArrowDown') {
                                e.preventDefault();
                                setActiveIndex((index) => Math.min(index + 1, matches.length - 1));
                            } else if (e.key === 'ArrowUp') {
                                e.preventDefault();
                                setActiveIndex((index) => Math.max(index - 1, 0));
                            } else if (e.key === 'Enter') {
                                e.preventDefault();
                                const selected = matches[activeIndex] ?? matches[0];
                                if (selected) {
                                    pickOwner(selected);
                                }
                            }
                        }}
                        placeholder = {language === 'kor' ? '이름/매장명/전화번호 검색' : 'Search name/store name/phone number'}
                    />
                </SearchBarDiv>
            </SearchDiv>
            {open && searchValue.trim() !== '' && createPortal(
                <Dropdown style = {{ top: menuBox.top, left: menuBox.left, width: menuBox.width }}>
                    {matches.length === 0 ? (
                        <EmptyItem>
                            {language === 'eng' ? 'No matching owner.' : '일치하는 사장님이 없습니다.'}
                        </EmptyItem>
                    ) : matches.map((owner, index) => (
                        <DropdownItem key = { owner._id } type = 'button'
                            className = { index === activeIndex ? 'active' : '' }
                            onMouseDown = {(event) => {
                                event.preventDefault();
                                pickOwner(owner);
                            }}>
                            { ownerSuggestionLabel(owner, language) }
                        </DropdownItem>
                    ))}
                </Dropdown>,
                document.body
            )}
        </AdminOwnerSearchStyled>
    )
}
