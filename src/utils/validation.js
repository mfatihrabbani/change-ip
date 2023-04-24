export const validationError = (message) => {
    var error = new Error()
    error.message = message
    throw error
}