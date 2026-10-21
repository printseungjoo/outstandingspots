import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { useLanguage } from '../../contexts/LanguageContext'
import { getT } from '../../i18n'
import { localeCode, ogLocale } from '../../lib/localized'
import type Language from '../../types/Language'

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

function getSeo(pathname: string, language: Language) {
    const t = getT(language);
    if (pathname === '/stores') {
        return {
            title: t('storesSeoTitle'),
            description: t('storesSeoDescription'),
            robots: 'index,follow',
            path: '/stores'
        };
    }
    if (pathname === '/') {
        return {
            title: t('homeSeoTitle'),
            description: t('homeSeoDescription'),
            robots: 'index,follow',
            path: '/'
        };
    }

    return {
        title: 'Outstanding Spots',
        description: t('defaultSeoDescription'),
        robots: 'noindex,nofollow',
        path: pathname
    };
}

export function Seo() {
    const pathname = usePathname();
    const { language } = useLanguage();

    useEffect(() => {
        const seo = getSeo(pathname, language);
        const url = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;
        const image = `${SITE_URL}/loginBackgroundImage.png`;
        document.title = seo.title;
        document.documentElement.lang = localeCode(language);
        upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
        upsertMeta('meta[name="robots"]', { name: 'robots', content: seo.robots });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
        upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: ogLocale(language) });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });
        upsertLink('canonical', url);
    }, [pathname, language]);

    return null;
}
