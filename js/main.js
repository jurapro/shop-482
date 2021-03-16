const host = 'http://dpaggsfj-m1.wsr.ru/api';

const f = async (url, method = 'get', token = null, data = []) => {

    const options = {
        method: method.toUpperCase(),
        headers: {
            "Content-Type": 'application/json'
        },
    }

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (['post', 'path'].includes(method.toLowerCase())) {
        options.body = JSON.stringify(data);
    }

    return await fetch(`${host}/${url}`, options).then(res => res.json());
}
