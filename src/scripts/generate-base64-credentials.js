const username = 'LoveNode';
const password = 'Forever';
const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
console.log(base64Credentials); 
