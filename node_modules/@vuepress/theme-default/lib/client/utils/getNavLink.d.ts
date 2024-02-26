import type { NavLink } from '../../shared/index.js';
/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export declare const getNavLink: (config: string) => NavLink;
