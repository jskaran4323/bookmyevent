## Submission Details

**Name:** Jaskaran Singh  
**Email:** jaskaran.s@myjobsca.com  

**Message:**  
Thank you for reviewing my submission. 

## Approach and Design Explanation

---

## Backend Approach

The backend of this application is built using a function-based architecture instead of a class-based one.

The structure is organized into clear layers. For example:

```
Client → Route → Controller → Service → Data Source (JSON) → Service → Controller → Response → Client
```

The overall flow follows a simple pattern where a request moves from the route to the controller, then to the service, and finally interacts with the JSON file.

A function-based approach was chosen because the application is stateless and primarily performs simple CRUD operations. This keeps the code lightweight, easier to read, and faster to implement and debug.

The backend uses a JSON file located at `backend/data/funds_data.json` as its data source. Since there is no database involved, file operations are handled using `fs/promises`.

To maintain type safety, a TypeScript interface called `Fund` is used instead of a traditional database model (which is typically used with databases).

Error handling is implemented using a custom `AppError` class that extends the built-in Error class and includes a status code. Errors are thrown within the service layer and handled centrally through middleware.

---

## API Routes

The available API endpoints are:

* **GET /users/all**
  Fetch all funds

* **GET /users/:name**
  Fetch a single fund by name

* **PUT /users/:name**
  Update a fund by name

* **DELETE /users/:name**
  Delete a fund by name

---

## Frontend Approach

On the frontend, the application is built using Angular with standalone components and routing.

The application is divided into three main components:

* A table view to display all funds
* A detail view to show information for a single fund
* An edit view for administrative changes

Each component corresponds directly to one of the requirements, making the structure intuitive and easy to follow.

Routing is used to manage navigation between views:

* `/` → Table view
* `/fund/:name` → User-facing detail view
* `/admin/edit/:name` → Admin edit view

The admin edit functionality is implemented as a separate page rather than using a modal dialog such as Angular Material’s MatDialog. This decision was made because a full page is better suited for forms with multiple fields.

Data fetching on the frontend is handled using Angular’s HttpClient, with all API interactions centralized in a service. This includes fetching all funds, retrieving a single fund, updating a fund, and deleting a fund.

In the admin edit view, autosave is implemented using the `blur` event. This means that changes are saved when the user finishes editing a field rather than on every keystroke. If the admin does not wish to edit, they can navigate back to the fund page.

UI/UX has been intentionally kept simple, using basic SCSS for styling.

---

## Going Further

For future improvements:

* Introduce a unique ID for each fund to ensure proper identification
* Add testing for both frontend and backend

---

## Question / Doubts

The requirements for this task did not include authentication or role-based access control.

The term “Admin” is used only to describe a view that allows editing and deleting data. It does not represent an actual user role or permission system.


