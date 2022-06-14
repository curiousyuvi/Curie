# Curie

An app that allows users to **chat** and **listen to synced songs in chat rooms**, the playback of the song will be controlled by a chosen **DJ / Admin**, also other members of the room can suggest songs and **members can vote** 👍️ or 👎️ for that suggestion.

## Contribution Guide

- ### Configure Development Environment

  **Configuring client**

  - Clone the repository :
    `git clone https://github.com/curiousyuvi/curie.git`

  - Open the client directory :
    `cd curie/client/`

  - Create a **.env** file :
    `touch .env`

  - Inside the **.env** file write :
    `REACT_APP_API_ENDPOINT=http://localhost:5000`
    <br/>

  **Configuring server**

  - Open the server directory :
    `cd ../server/`

  - Create a **config** directory and open it :
    `mkdir config && cd config`

  - Create a **dev.env** file :
    `touch dev.env`

  - Inside the **dev.env** file write :

    ```
    SPOTIFY_CLIENT_ID=
    SPOTIFY_CLIENT_SECRET=
    MONGODB_URL=mongodb://admin:Admin123@mongo:27017/curie_db
    ```

  - Now to get Spotify_client_id and Spotify_client_secret, head to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and login with your **Spotify Account**.

  - Then click on **CREATE AN APP** button in Spotify Dashboard and create a spotify app.

  - Then inside the app, go to **EDIT SETTINGS** and add `http://localhost:3000/auth/spotify_callback/` to **Redirect URIs** and **SAVE** the settings.

  - Then inside the app, go to **USERS AND ACCESS** and add your Spotify Account with email by clicling on `ADD NEW USER`.

  - After that, copy your **Client ID** and **Client Secret** from the app into your **dev.env** file

- ### Running Development Server

  - Inside the root directory, run this command:
    `make run`

  - If there are no issues and every thing goes well, then **React client** should be running on `http://localhost:3000/`, **Node server** should be running on `http://localhost:5000/` and **Mongo Express** should be running on `http://localhost:8081/`
