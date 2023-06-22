export function getFormData(e, initData) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let _data = { ...initData };
    for (let [key, value] of Object.entries(data).filter(([key, value]) => value)) {
        _data = { ..._data, [key]: value };
    }

    return _data;
}


export const removeFromList = (arr, i) => {
    const result = Array.from(arr);
    const [removed] = result.splice(i, 1);
    return [removed, result];
};

export const addToList = (arr, i, el) => {
    const result = Array.from(arr);
    result.splice(i, 0, el);
    return result;
};