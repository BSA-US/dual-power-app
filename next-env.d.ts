/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.styl' {
    const content: {[className: string]: string};
    export default content;
}
