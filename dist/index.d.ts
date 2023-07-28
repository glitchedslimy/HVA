type StyleObject = {
    [key: string]: {
        [key: string]: string[];
    };
};
type PropertyMap = {
    [key: string]: string;
};
export default function hva(styles: StyleObject): (propertyMap: PropertyMap) => string;
export {};
