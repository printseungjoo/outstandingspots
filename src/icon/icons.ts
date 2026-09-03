import { faCheck, faEye, faLock, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const byPrefixAndName: Record<string, Record<string, IconDefinition>> = {
    fad: {
        user: faUser
    },
    fas: {
        lock: faLock,
        check: faCheck,
        xmark: faXmark
    },
    far: {
        eye: faEye,
    }
};
