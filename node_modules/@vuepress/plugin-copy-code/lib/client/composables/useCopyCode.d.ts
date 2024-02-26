import type { CopyCodePluginLocaleConfig } from '../../shared/index.js';
export interface UseCopyCodeOptions {
    locales: CopyCodePluginLocaleConfig;
    selector: string[];
    /** @default 500 */
    delay: number;
    /** @default 2000 */
    duration: number;
    /** @default false */
    showInMobile?: boolean;
}
export declare const useCopyCode: ({ delay, duration, locales, selector, showInMobile, }: UseCopyCodeOptions) => void;
