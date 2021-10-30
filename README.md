# Places App

Simple Web app to save information about places in a map, including image upload. The frontend of this project was developed using Vue3 with TypeScript, Vue-leaflet, SCSS and Vuex; the backend was developed with Node.js with TypeScript, Express, Multer, TypeORM, SQLite and JWT authentication.

![image](https://user-images.githubusercontent.com/43031902/139534686-8333847d-f44e-44ef-976e-41f9a2245590.png)

## Project setup

### Frontend

`cd frontend`

To install the required dependencies:

```
yarn install
```

add `.env` file at root and define the following environment variables:
- VUE_APP_API_URL
- VUE_APP_ASSET_URL

To run the server:

```
yarn serve
```

### Backend

`cd backend`

To install the required dependencies:

```
yarn install
```

add `.env` file at root and define the following environment variables:
- JWT_KEY

To run the server:

```
yarn dev
```


