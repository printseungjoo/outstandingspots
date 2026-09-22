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

const MAX_PHOTO_SIDE = 1200;

interface UploadImageProps {
    onChangePhoto: (blob: Blob | null) => void;
    initialPreviewUrl?: string;
}

function canvasToPng(canvas: HTMLCanvasElement) {
    return new Promise<Blob | null>((resolve) => {
        canvas.toBlob((blob) => resolve(blob), 'image/png');
    });
}

function loadImageFile(file: File) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);
        img.onload = () => {
            URL.revokeObjectURL(objectUrl);
            resolve(img);
        };
        img.onerror = (error) => {
            URL.revokeObjectURL(objectUrl);
            reject(error);
        };
        img.src = objectUrl;
    });
}

async function adjustImage(file: File | undefined): Promise<Blob | null> {
    if (!file) return null;
    let width = 0;
    let height = 0;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    try {
        const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
        width = bitmap.width;
        height = bitmap.height;
        const scale = Math.min(1, MAX_PHOTO_SIDE / Math.max(width, height));
        canvas.width = Math.max(1, Math.round(width * scale));
        canvas.height = Math.max(1, Math.round(height * scale));
        ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
    } catch {
        const img = await loadImageFile(file);
        width = img.naturalWidth || img.width;
        height = img.naturalHeight || img.height;
        const scale = Math.min(1, MAX_PHOTO_SIDE / Math.max(width, height));
        canvas.width = Math.max(1, Math.round(width * scale));
        canvas.height = Math.max(1, Math.round(height * scale));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    return await canvasToPng(canvas) ?? file;
}

export function UploadImage({ onChangePhoto, initialPreviewUrl }: UploadImageProps) {
    const { language } = useLanguage();

    const [previewUrl, setPreviewUrl] = useState<string | null>(initialPreviewUrl ?? null);

    useEffect(() => {
        setPreviewUrl(initialPreviewUrl ?? null);
    }, [initialPreviewUrl]);

    async function handleChange(e: ChangeEvent<HTMLInputElement>) {
        try {
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
        } catch (error) {
            console.error(error);
            onChangePhoto(null);
        }
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