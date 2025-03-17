// Random function from a-Z0-9 on this code not build in function
// This is a simple service that returns a random string of a-Z0-9 with a length of 10
function randomString() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
