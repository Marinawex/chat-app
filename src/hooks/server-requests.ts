import { Message } from '../types/message';

const endpoint =  'http://localhost:3006'; //todo: add endpoint (server) address (starting with http://)


/**
 * GET Request to get the list of messages
 **/
export async function getMessages() {
  // todo: replace this with fetch to get the messages from the server
   const res = await fetch(`${endpoint}/message`)
   const mockMessagesWithNames = await res.json()
  
  return mockMessagesWithNames;
}

/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server
  const  res  = await fetch(`${endpoint}/mockUsers`);
  const mockUsers = await res.json()
  return mockUsers;
}


/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  const res = await fetch(`${endpoint}/users?id=${userId}`);
  return (await res.json());
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  const body = JSON.stringify(message);
  const method = 'POST';
  const headers = {
      'content-type': 'application/json'
  }
  return fetch(endpoint, {method, headers, body})
  .then(res => {
    if(res.status === 201){
      return 'ok'
    } else return 'error'
  });
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
  // todo: implement sending a rquest to change the like of a message by the user
  const body = JSON.stringify({messageId,userId,like});
  const method = 'POST';
  const headers = {
      'content-type': 'application/json'
  }
  return fetch(`${endpoint}/likes`, {method, headers, body})
}