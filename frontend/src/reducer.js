export const reducer = (store, action) => {
    const { type, payload } = action

    const ACTION_MAP = {
        authentication: () => {
            const { token, username } = payload
            localStorage.setItem('auth', token) // => { token: ..., username: 'admin' }
            localStorage.setItem('username', username)

            return {...store, authentication: {isLoading: false, isAuthorized: true, username }}

        },
        error: () => ({...store, authentication: {...store.authentication, isLoading: false, errors: payload }}),
        startLoading: () => ({...store, authentication: {...store.authentication, isLoading: true} }),
        authorization: () => {
            const isTokenStored = localStorage.getItem('auth') ? true : false;
            const username = localStorage.getItem('username');
            return {...store, authentication: {...store.authentication, isAuthorized: isTokenStored, username  }};
        },
        logout: () => {
            localStorage.removeItem('auth');
            return {...store, authentication: {...store.authentication, isAuthorized: false }};
        }
    }
    return ACTION_MAP[type]()
}