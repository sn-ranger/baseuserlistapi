import config from '../../config';

const getUrl = `${config.api}/users`;

export async function get() {
    class HTTPError extends Error {}

    const response = await fetch(getUrl);

    if (!response.ok) {
        throw new HTTPError(`Error get: ${response.statusText}`);
    }

    return await response.json();
}
