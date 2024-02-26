import { createRequire } from 'node:module';
import { removeLeadingSlash } from 'vuepress/shared';
import { fs } from 'vuepress/utils';
import { PLUGIN_NAME } from './logger.js';
const require = createRequire(import.meta.url);
const DEFAULT_TEMPLATE_PATH = require.resolve(`${PLUGIN_NAME}/templates/sitemap.xsl`);
export const getSiteMapTemplate = (options) => [
    options.sitemapXSLFilename
        ? removeLeadingSlash(options.sitemapXSLFilename)
        : 'sitemap.xsl',
    options.sitemapXSLTemplate ?? fs.readFileSync(DEFAULT_TEMPLATE_PATH, 'utf-8'),
];
