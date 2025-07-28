import {Client,Account,Databases} from 'appwrite'

const client = new Client();

console.log("jelasdfadfasd")
client
.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT )
    .setProject(import.meta.env.VITE_APPWRITE_PROJECTID);


export const account = new Account(client);

export const database = new Databases(client);


export default client;


