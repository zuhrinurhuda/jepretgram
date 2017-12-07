# jepretgram

## Deskripsi Jepretgram

Jepretgram adalah sebuah web app sederhana yang berfungsi sebagai situs mini social media yang mirip seperti Instagram, dimana setiap user dapat mendaftar dan juga membagikan/mengupload sebuah photo beserta caption ke web app tersebut.

Selain itu user juga dapat memberikan like ke setiap photo yang di share oleh user lainnya.

Jepretgram memiliki beberapa fitur antara lain:
Auth (Login & Register)
Share photo with caption
Display all photo
Delete photo
Edit caption
Comment (Optional)

Teknologi yang digunakan antara lain:
ExpressJS untuk backend/api server
MongoDB dan Mongoose untuk database serta ODM-nya
Vue.js untuk js front-end framework-nya.

## Langkah-langkah yang perlu dilakukan untuk menjalankan Jepretgram

npm install
npm start
npm run dev

## Daftar API Endpoint

| Route             | HTTP   | Description                          |
| ----------------- | ------ | ------------------------------------ |
| `/api/users`      | GET    | Get all the users                    |
| `/api/users`      | POST   | Create a user                        |
| `/api/users/:id`  | Delete | Delete a user                        |
| `/api/users/:id`  | PUT    | Update a user with new info          |
| `/api/photos`     | GET    | Get all the photos                   |
| `/api/photos`     | POST   | Create a photo                       |
| `/api/photos/:id` | Delete | Delete a photo                       |
| `/api/photos/:id` | PUT    | Update a photo with new info         |
| `/api/photos/like`| PUT    | Like a photo                         |

## link demo

http://jepretgram.s3-website-ap-southeast-1.amazonaws.com/
jangan lupa login facebook dulu
setelah upload foto harus di reload dlu
