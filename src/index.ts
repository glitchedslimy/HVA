type Variants = {
  [key: string]: {
    [key: string]: string[];
  };
};

type PropertyMap = {
  [key: string]: string;
};

export default function hva(variants: {variants: Variants}, defaultStyles?: string[]) {
  return (propertyMap: PropertyMap) => {
    if(!defaultStyles) {
      defaultStyles = [];
    }
    const classList = [...defaultStyles, ...Object.entries(propertyMap).flatMap(([key, value]) => variants.variants[key]?.[value] ?? [])];
    if (propertyMap.class) {
      classList.push(propertyMap.class);
    }
    if (propertyMap.className) {
      classList.push(propertyMap.className);
    }
    return classList.join(" ");
  };
}