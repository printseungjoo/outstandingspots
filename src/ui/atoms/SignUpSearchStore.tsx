import { useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { useStores } from '../../contexts/StoresContext';
import { storeFullName } from '../../lib/resolveStoreId';
import type Store from '../../types/Store';

const SignUpSearchStoreStyled = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 10;
`;

const Title = styled.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;
`;

const InputFieldDiv = styled.div`
    flex: 1;
    min-width: 0;
`;

const FieldWrap = styled.div`
    position: relative;
    width: 100%;
`;

const InputField = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
`;

const StoreInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 0.85rem;
    background: transparent;

    &::placeholder {
        font-size: 0.85rem;
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
`;

const EmptyItem = styled.p`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`;

const Description = styled.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;
`;

function storeMatchesQuery(store: Store, query: string) {
    const q = query.trim().toLowerCase();
    if (!q) {
        return true;
    }
    const korFull = storeFullName(store, 'kor').toLowerCase();
    const engFull = storeFullName(store, 'eng').toLowerCase();
    return korFull.includes(q)
        || engFull.includes(q)
        || (store.name?.kor ?? '').includes(q)
        || (store.name?.eng ?? '').toLowerCase().includes(q)
        || (store.branch?.kor ?? '').includes(q)
        || (store.branch?.eng ?? '').toLowerCase().includes(q);
}

export function SignUpSearchStore({ storeInputRef, onQueryChange }: {
    storeInputRef?: RefObject<HTMLInputElement | null>;
    onQueryChange?: (value: string) => void;
}) {
    const { language } = useLanguage();
    const { stores } = useStores();
    const [query, setQuery] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [menuBox, setMenuBox] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });
    const fieldRef = useRef<HTMLDivElement | null>(null);
    const fieldInputRef = useRef<HTMLInputElement | null>(null);

    const matches = useMemo(
        () => stores.filter((store) => storeMatchesQuery(store, query)),
    [stores, query]);

    const storeLabel = (store: Store) => storeFullName(store, language);

    const setInputNode = (element: HTMLInputElement | null) => {
        fieldInputRef.current = element;
        if (storeInputRef) {
            storeInputRef.current = element;
        }
    };

    const emitQuery = (nextValue: string) => {
        setQuery(nextValue);
        onQueryChange?.(nextValue);
    };

    const updateMenuBox = () => {
        const box = fieldRef.current?.getBoundingClientRect();
        if (!box) {
            return;
        }
        setMenuBox({ top: box.bottom + 4, left: box.left, width: box.width });
    };

    const handleQuery = (nextValue: string) => {
        emitQuery(nextValue);
        setOpen(true);
        setActiveIndex(0);
        updateMenuBox();
    };

    const pickStore = (store: Store) => {
        const name = storeLabel(store);
        if (fieldInputRef.current) {
            fieldInputRef.current.value = name;
        }
        emitQuery(name);
        setOpen(false);
    };

    return(
        <SignUpSearchStoreStyled>
            <Title> { language === 'eng' ? 'Store' : '가게 선택' } </Title>
            <InputFieldDiv>
                <FieldWrap>
                    <InputField ref = { fieldRef }>
                        <StoreInput name = "storeQuery" type = "text" defaultValue = ""
                            autoComplete = "off" ref = { setInputNode }
                            placeholder = { language === 'eng' ? 'Enter the store name and branch.' : '매장명과 지점명을 입력해주세요.' }
                            onInput = {(e) => handleQuery(e.currentTarget.value)}
                            onChange = {(e) => handleQuery(e.currentTarget.value)}
                            onCompositionEnd = {(e) => handleQuery(e.currentTarget.value)}
                            onFocus = {() => {
                                setOpen(true);
                                updateMenuBox();
                            }}
                            onBlur = {(e) => {
                                emitQuery(e.currentTarget.value);
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
                                        pickStore(selected);
                                    }
                                }
                            }} />
                    </InputField>
                    {open && createPortal(
                        <Dropdown style = {{ top: menuBox.top, left: menuBox.left, width: menuBox.width }}>
                            {matches.length === 0 ? (
                                <EmptyItem>
                                    {stores.length === 0
                                        ? (language === 'eng' ? 'No stores loaded.' : '가게 목록을 불러오지 못했습니다.')
                                        : (language === 'eng' ? 'No matching store.' : '일치하는 가게가 없습니다.')}
                                </EmptyItem>
                            ) : matches.map((store) => (
                                <DropdownItem key = { store._id } type = "button"
                                    onMouseDown = {(event) => {
                                        event.preventDefault();
                                        pickStore(store);
                                    }}>
                                    { storeLabel(store) }
                                </DropdownItem>
                            ))}
                        </Dropdown>,
                        document.body
                    )}
                </FieldWrap>
                <Description>{'\u00A0'}</Description>
            </InputFieldDiv>
        </SignUpSearchStoreStyled>
    )
}
