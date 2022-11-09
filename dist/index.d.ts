import { PluginOption } from 'vite';
export { default as tinycolor } from 'tinycolor2';

declare function mixLighten(colorStr: string, weight: number): string;
declare function mixDarken(colorStr: string, weight: number): string;
declare function mix(color1: string, color2: string, weight: number, alpha1?: number, alpha2?: number): string;
declare function toNum3(colorStr: string): number[];
declare function dropPrefix(colorStr: string): string;
declare function pad2(num: number): string;

interface AntdDarkThemeOption {
    darkModifyVars?: any;
    fileName?: string;
    verbose?: boolean;
    selector?: string;
    filter?: (id: string) => boolean;
    extractCss?: boolean;
    preloadFiles?: string[];
    loadMethod?: 'link' | 'ajax';
}
declare function antdDarkThemePlugin(options: AntdDarkThemeOption): PluginOption;

declare type ResolveSelector = (selector: string) => string;
declare type InjectTo = 'head' | 'body' | 'body-prepend';
interface ViteThemeOptions {
    colorVariables: string[];
    wrapperCssSelector?: string;
    resolveSelector?: ResolveSelector;
    customerExtractVariable?: (code: string) => string;
    fileName?: string;
    injectTo?: InjectTo;
    verbose?: boolean;
}
declare function viteThemePlugin(opt: ViteThemeOptions): PluginOption;

export { InjectTo, ResolveSelector, ViteThemeOptions, antdDarkThemePlugin, dropPrefix, mix, mixDarken, mixLighten, pad2, toNum3, viteThemePlugin };