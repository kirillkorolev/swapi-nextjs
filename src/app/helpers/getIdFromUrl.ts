export const getIdFromUrl = (url: string) => url.split('/').filter(it => it).slice(-1).pop();