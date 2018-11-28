export function setBusy(busy) {
    return {
        type: 'SET_BUSY',
        data: {
            busy
        }
    }
}

export function storeResults(response) {
    return {
        type: 'STORE_RESULTS',
        data: {
            response
        }
    }
}