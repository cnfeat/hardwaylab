import { resolveRoute } from 'vuepress/client';
/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export const getNavLink = (config) => {
    const { notFound, meta, path } = resolveRoute(config);
    return notFound
        ? { text: path, link: path }
        : {
            text: meta.title || path,
            link: path,
        };
};
