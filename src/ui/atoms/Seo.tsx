import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

const SITE_URL = 'https://outstandingspots.com';

function upsertMeta(selector: string, attributes: Record<string, string>) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
    }
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
}

function upsertLink(rel: string, href: string) {
    let element = document.head.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
}

function getSeo(pathname: string, language: 'kor' | 'eng') {
    const isKorean = language === 'kor';
    if (pathname === '/stores') {
        return {
            title: isKorean
                ? '전체 매장 | Outstanding Spots'
                : 'All Stores | Outstanding Spots',
            description: isKorean
                ? 'SUNY Korea 주변 제휴 매장 목록과 할인 혜택을 확인하세요.'
                : 'Browse partner stores and discounts near SUNY Korea.',
            robots: 'index,follow',
            path: '/stores',
        };
    }
    if (pathname === '/') {
        return {
            title: isKorean
                ? 'Outstanding Spots | SUNY Korea 주변 제휴 매장'
                : 'Outstanding Spots | Partner Stores near SUNY Korea',
            description: isKorean
                ? 'SUNY Korea 주변 제휴 매장 지도와 할인 정보를 한눈에 확인하세요.'
                : 'Find partner stores and discounts near SUNY Korea on the Outstanding Spots map.',
            robots: 'index,follow',
            path: '/',
        };
    }

    return {
        title: 'Outstanding Spots',
        description: isKorean
            ? 'SUNY Korea 주변 제휴 매장 안내 서비스입니다.'
            : 'Partner store guide for SUNY Korea.',
        robots: 'noindex,nofollow',
        path: pathname,
    };
}

export function Seo() {
    const { pathname } = useLocation();
    const { language } = useLanguage();

    useEffect(() => {
        const seo = getSeo(pathname, language);
        const url = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;
        const image = `${SITE_URL}/loginBackgroundImage.png`;
        document.title = seo.title;
        document.documentElement.lang = language === 'eng' ? 'en' : 'ko';
        upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
        upsertMeta('meta[name="robots"]', { name: 'robots', content: seo.robots });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
        upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: language === 'eng' ? 'en_US' : 'ko_KR' });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });
        upsertLink('canonical', url);
    }, [pathname, language]);

    return null;
}
