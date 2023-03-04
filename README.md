# Task-Manager-Backend

This is a simple task manager app built with Express and using pnpm as the package manager.

## Installation

1. Clone the repo

   ```bash
   gh repo clone krishna-cyber/Task-Manager-Backend
   ```

2. Run `pnpm install` to install the dependencies
3. Set environment variables. Create a `.env` file in the root directory of the project and add the following variables:

```bash
PORT = <YOUR PREFERRED PORT>
MONGO_URI= <YOUR MONGODB URL>

```

4. Run `pnpm run dev` to start the server

## Usage

1. Create a task by sending a `POST` request to `/tasks/add` with the following body:

```json
{
  "title": "Task Title"
}
```

2. Get all tasks by sending a `GET` request to `/tasks`

3. Get a task by sending a `GET` request to `/tasks/:id`

4. Update a task by sending a `PATCH` request to `/tasks/:id` with the following body:

```json
{
  "title": "Task Title",
  "completed": true
}
```

5. Delete a task by sending a `DELETE` request to `/tasks/:id`

## Technologies Used

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [pnpm](https://pnpm.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## license

[MIT](https://choosealicense.com/licenses/mit/)
