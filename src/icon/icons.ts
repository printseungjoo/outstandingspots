import { faEye, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const byPrefixAndName: Record<string, Record<string, IconDefinition>> = {
    fad: {
        user: faUser
    },
    fas: {
        lock: faLock
    },
    far: {
        eye: faEye
    }
};
