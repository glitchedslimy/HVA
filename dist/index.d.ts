type Variants = {
    [key: string]: {
        [key: string]: string[];
    };
};
type PropertyMap = {
    [key: string]: string;
};
export default function hva(variants: {
    variants: Variants;
}, defaultStyles?: string[]): (propertyMap: PropertyMap) => string;
export {};
