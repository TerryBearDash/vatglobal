
export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.open('GET', `${url}${serialize(params)}`);
        xhr.send(params);
    });
};

const serialize = (obj) => {
    const s = obj ? Object.keys(obj).map((key) => key + '=' + obj[key]).join('&') : '';
    return obj ? `?${s}` : '';
}