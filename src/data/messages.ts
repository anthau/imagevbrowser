export interface Message {
  fromName: string;
  subject: string;
  date: string;
    id: number;
    title?: string;

}
export interface Message1 {

    thumbnailUrl?: string;

}
const axios = require('axios');

const fecth = async () => { let a = await axios.get('https://jsonplaceholder.typicode.com/users/1/albums');  return a.data; }
//Todo tee tähän se 
export const getMessages = async (x: string) => { let a = await axios.get('https://jsonplaceholder.typicode.com/users/' + x + '/albums');return a.data; };
export const getMessage = async (id: number) => { let a = await fecth();return a.find((m:any) => m.id === id)} 
