import type { Request } from 'express';

import type { SessionRole } from '../lib/sessionToken';

export type RequestAuth = {
    role: SessionRole;
    id: string;
    storeId?: string;
};

export type AuthedRequest = Request & {
    auth?: RequestAuth;
};
