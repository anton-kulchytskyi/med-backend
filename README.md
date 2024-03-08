# Medicine Delivery App

This is a web application for ordering medicine delivery from different pharmacies.

## Getting Started

Follow these steps to clone or fork the repository and run the server locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)


```bash
git clone https://github.com/anton-kulchytskyi/med-backend.git
cd med-backend
npm install
npm run dev
```
The server will be running at http://localhost:5000. In this case, please create a file named .env and add the following content to it:

```
MONGO_URI=mongodb+srv://antek1809:Xs6ZG1KOWR6CFPq6@cluster0.xb3fubx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;
```

If you prefer to access the server remotely, it is available [here](https://med-backend-rapb.onrender.com).

## Usage

Use the API endpoints to interact with pharmacies and medicines.

- View all pharmacies: `GET /pharmacies`
- View a specific pharmacy: `GET /pharmacies/:pharmacyId`

- View all medicines: `GET /medicines`
- View a specific medicine: `GET /medicines/:medicineId`

- View all users: `GET /users`
- View a specific user: `GET /users/:userId`

- View all orders: `GET /orders`
- View a specific order: `GET /orders/:orderId`

## Contributing

Feel free to contribute to the development of this project. Follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.


