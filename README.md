# Play Chat
Front-end application for the technical challenge of Full Stack Jr. In this application it is possible to manage the front-end of a small chat through HTTP(s) requests following the REST convention.


# Demo
[https://github.com/andressafirmino/TechnicalChallenge-PlayChat-Front]()

# Deploy
<a href="https://technical-challenge-play-chat-front.vercel.app/">Play Chat</>

# How does it work?
This project is a chat for exchanging messages. It has two entities: `users` and `messages`.

For the `users` entity, two routes were created:

- POST `/sign-up`: Register a user.
- POST `/sign-in`: Login user. If the user is not registered, a 401 error is returned.

For the `messages` entity, two routes were created:

- POST `/messages`: Send a message.
- GET `/messages`: Get all messages.


# Motivation
This was my first practical project using NextJS and TailwindCSS. This opportunity allowed me to implement new ways of styling layouts, as well as learn more about Server Side Rendering.

# Technologies used
For this project, the following were used:

- Node;
- NextJS;
- TypeScript;
- TailwindCSS;
- Axios.

# How to run in development
To run this project under development, you need to follow the steps below:

- Clone the repository;
- Download the necessary dependencies with the command: `npm install`;
- Then create the `.env` file based on `.env.example`;
- This `.env` file is composed of the following properties:
```
- NEXT_PUBLIC_DB_HOST="http://local..."
```
- The `NEXT_PUBLIC_DB_HOST` property is used to connect to the server.

- To run the project under development, run the command `npm run dev`;


# Continuity plan
- Implement websocket for realtime;
- Implement layout and features for user logout
- Implement layout and features for sending private messages
- Implement layout and features for adding users to the friends list;
- Implement layout and features for room creation;
- Implement layout and features for message response;
- Implement layout and features for message editing;
- Implement layout and features to search for other users.
