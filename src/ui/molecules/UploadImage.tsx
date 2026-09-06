import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const UploadImageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const Title = styled.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`;

const ImageFileInput = styled.input`
    display: none;
`;

const VisibleImageFileInput = styled.label`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    aspect-ratio: calc((25vw * 0.92 * 0.90) / 20vh);
    border: 0.5px solid gray;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
    color: gray;

    @media (max-width: 767px) {
        aspect-ratio: calc((100vw * 0.92 * 0.90) / 16vh);
    }
`;

const PreviewImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const DESKTOP_VIEWPORT_WIDTH = 1440;
const DESKTOP_VIEWPORT_HEIGHT = 900;
const STORE_PHOTO_ASPECT = (0.25 * DESKTOP_VIEWPORT_WIDTH * 0.92 * 0.90) / (0.20 * DESKTOP_VIEWPORT_HEIGHT);
const STORE_PHOTO_WIDTH = 464;
const STORE_PHOTO_HEIGHT = Math.round(STORE_PHOTO_WIDTH / STORE_PHOTO_ASPECT);

interface UploadImageProps {
    onChangePhoto: (blob: Blob | null) => void;
    initialPreviewUrl?: string;
}

export function UploadImage({ onChangePhoto, initialPreviewUrl }: UploadImageProps) {
    const { language } = useLanguage();

    const [previewUrl, setPreviewUrl] = useState<string | null>(initialPreviewUrl ?? null);

    useEffect(() => {
        setPreviewUrl(initialPreviewUrl ?? null);
    }, [initialPreviewUrl]);

    useEffect(() => {
        return () => {
            if (previewUrl?.startsWith('blob:')) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    function adjustImage(file: File | undefined): Promise<Blob | null> {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
                return;
            }
            const img = new Image();
            img.crossOrigin = 'anonymous';
            const objectUrl = URL.createObjectURL(file);
            img.src = objectUrl;
            img.onload = () => {
                const width = STORE_PHOTO_WIDTH;
                const height = STORE_PHOTO_HEIGHT;
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    URL.revokeObjectURL(objectUrl);
                    resolve(blob);
                }, 'image/png');
            }
            img.onerror = (error) => {
                URL.revokeObjectURL(objectUrl);
                reject(error);
            }
        })
    }

    async function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const blob = await adjustImage(e.target.files?.[0]);
        onChangePhoto(blob);
        if (!blob) return;
        const nextUrl = URL.createObjectURL(blob);
        setPreviewUrl((prev) => {
            if (prev?.startsWith('blob:')) {
                URL.revokeObjectURL(prev);
            }
            return nextUrl;
        });
    }

    return(
        <UploadImageStyled>
            <TitleDiv>
                <Title> {language === 'eng' ? 'Store Photo' : '매장 사진'} </Title>
            </TitleDiv>
            <ImageFileInput type = 'file' accept = 'image/*' id = 'imageFileInput' onChange = { handleChange } />
            <VisibleImageFileInput htmlFor = 'imageFileInput'>
                {previewUrl
                    ? <PreviewImg src = { previewUrl } alt = { language === 'eng' ? 'Store preview' : '매장 미리보기' } />
                    : (language === 'eng' ? 'Upload Image' : '이미지 업로드')}
            </VisibleImageFileInput>
        </UploadImageStyled>
    )
}