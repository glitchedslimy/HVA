type StyleObject = {
  [key: string]: {
    [key: string]: string[];
  };
};

type PropertyMap = {
  [key: string]: string;
};

export default function hva(styles: StyleObject) {
  return (propertyMap: PropertyMap) => {
    const classList = Object.entries(propertyMap).flatMap(
      ([key, value]) => styles[key]?.[value] ?? []
    );
    if (propertyMap.class) {
      classList.push(propertyMap.class);
    }
    if (propertyMap.className) {
      classList.push(propertyMap.className);
    }
    return classList.join(" ");
  };
}
