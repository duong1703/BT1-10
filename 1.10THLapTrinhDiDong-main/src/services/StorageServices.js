import {AsyncStorage} from 'react-native'

const _getKey = (key) => `cg@users:${key}`

export const getUserByUserName = Email => {
    if (!Email) {
        return Promise.reject(new Error('Email is empty'))
    }

    const key = _getKey(Email)

    return AsyncStorage.getItem(key)
        .then(str => {
            if (!str) {
                throw new Error('User not found')
            }

            try {
                return JSON.parse(str)
            } catch (error) {
                //Remove data is broken
                AsyncStorage.removeItem(key)

                throw error
            }
        })
        .catch(error => {
            return Promise.resolve(false)
        })
}

export const createNewUser = ({Email, name, password,Phone}) => {
    return getUserByUserName(Email)
        .then(user => {
            if (user) {
                throw new Error('The user already exists')
            }

            const newUser = {Email, name, password,Phone}
            const key = _getKey(Email)

            return AsyncStorage.setItem(key, JSON.stringify(newUser))
        })
}
