export const parseLocalConfig = (str: string) => {
    return JSON.parse(str);
};

export const stringifyConfig = (config: object) => {
    // set up human readable adapter
    return JSON.stringify(config, null, 2);
};

export const saveConfigToLocal = (config: object, key: string) => {
    const configs = stringifyConfig(config);
    localStorage.setItem(key, configs);
};

export const loadConfigFromLocal = (key: string) => {
    const str = localStorage.getItem(key);
    return parseLocalConfig(str);
};
