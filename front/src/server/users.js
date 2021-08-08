import baseUrl from './const';

const endpoints = {
    all: () => 'users',
    byId: (id) => `users/${id}`
}

const makeRequest = (requestType, urlEnd, dataToUpload, successCallback, failureCallback) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";
    xhr.open(requestType, `${baseUrl}/${urlEnd}`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            successCallback(xhr.response);

            return;
        }

        failureCallback();
    }
    xhr.onerror = () => {
        failureCallback();
    }

    switch (requestType) {
        case "POST":
        case "PUT":
            xhr.setRequestHeader("Content-Type", "application/json");

            if (!dataToUpload) {
                xhr.send()

                break;
            }

            xhr.send(dataToUpload)

            break;
        default:
            xhr.send();
            break;
    }
} 

export function getAllUsers(success, fail) {
    makeRequest(
        'GET',
        endpoints.all(),
        null,
        success,
        fail
    )
}

export function login(credentials, success, fail) {
    makeRequest(
        'POST',
        'login',
        JSON.stringify(credentials),
        success,
        fail
    )
}

export function getUser(id, success, fail) {
    makeRequest(
        'GET',
        endpoints.byId(id),
        null,
        success,
        fail
    )
}

export function updateUser(user, success, fail) {
    makeRequest(
        'PUT',
        endpoints.byId(user.id),
        JSON.stringify(user),
        success,
        fail
    )
}