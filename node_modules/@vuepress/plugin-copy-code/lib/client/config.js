import { defineClientConfig } from 'vuepress/client';
import { useCopyCode } from './composables/index.js';
import './styles/copy-code.css';
import './styles/vars.css';
const delay = __CC_DELAY__;
const duration = __CC_DURATION__;
const locales = __CC_LOCALES__;
const selector = __CC_SELECTOR__;
const showInMobile = __CC_SHOW_IN_MOBILE__;
export default defineClientConfig({
    setup: () => {
        useCopyCode({
            selector,
            locales,
            duration,
            delay,
            showInMobile,
        });
    },
});
