
# Cat Facts Generator App

![App Screenshot](https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_4x3.png)

The Cat Facts Generator is a simple web application built with React that provides users with random facts about cats accompanied by adorable cat images. The application fetches data from external APIs to dynamically generate new content with each request, offering users an engaging and educational experience about our feline friends.


## API Reference

#### Get cat fact

```http
  GET https://catfact.ninja/fact?max_length=140
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API link |

#### Get image

```http
  GET https://cataas.com/cat/says/${text}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `text`      | `string` | **Required**. Text to fetch |



## Run Locally

Clone the project

```bash
  git clone https://github.com/PaolaVelasquez2611/Programacion-WEB-2024-1/tree/Cats-facts-app
```

Go to the project directory

```bash
  cd Cats-facts-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Authors

- [@AndresNei20](https://github.com/AndresNei20)
- [@PaolaVelasquez2611](https://github.com/PaolaVelasquez2611)

