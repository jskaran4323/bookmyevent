### ✅ TODO

We are evaluating you based on your front-end and/or back-end capabilities. **Failure to complete one side fully does not necessarily result in disqualification.** Please complete the task to the best of your abilities.

#### Components to Implement

You are expected to create at least **three components**:

---

#### 1. Admin Data Table View

- Create an API function that fetches data from `backend/data/funds_data.json`.
- Display the data in a table format.
- Style the table using your best UI/UX judgment.
- When clicking on the **Name** of a data point, navigate to the **User Facing Data View**.
- Include an edit icon (e.g., a pencil) that navigates to the **Admin Edit View**.

---

#### 2. User Facing Data View

- Create an API function to fetch a **single data point** from `backend/data/funds_data.json`.
- Display all available information for that data point.
- Style the view using your best UI/UX judgment.

---

#### 3. Admin Edit View

- Create an API function to fetch and edit a **single data point** from `backend/data/funds_data.json`.
- Allow the admin to **edit** and **delete** the data.
- Automatically save changes when the admin finishes editing.
- Design the view using your best UI/UX judgment.
- You may implement this as a **separate page** or a **modal/dialog** (e.g., MatDialog).


#### ANSWER: 

### Approach and Design Explanation

## Backend Approach
The backend of this application is built using a function-based architecture instead of a class-based one. 

The structure is organized into clear layers: for example

Client → Route → Controller → Service → Data Source (JSON) → Service → Controller → Response → Client

The overall flow follows a simple pattern where a request moves from the route to the controller, then to the service, and finally interacts with the JSON file.

A function-based approach was chosen because the application is stateless and primarily performs simple CRUD operations.so that code can stay lightweight, easier to read, and faster to implement and debug.

The backend uses a JSON file located at `backend/data/funds_data.json` as its data source. Since there is no database involved, file operations are handled using `fs/promises`.

To maintain type safety, a TypeScript interface called `Fund` is used instead of a traditional database model(which we usually use). 

Error handling is implemented using a custom `AppError` class that extends the built-in Error class and includes a status code. Errors are thrown within the service layer and handled centrally through middleware. 

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


## Frontend Approach
On the frontend, the application is built using Angular with standalone components and routing. 

The application is divided into three main components: a table view to display all funds, a detail view to show information for a single fund, and an edit view for administrative changes. Each component corresponds directly to one of the requirements, making the structure intuitive and easy to follow.

Routing is used to manage navigation between views. The root path displays the table view, `/fund/:name` shows the user-facing detail view, and `/admin/edit/:name` opens the admin edit view.

The admin edit functionality is implemented as a separate page rather than using a modal dialog such as Angular Material’s MatDialog. This decision was made because a full page is better suited for forms with multiple fields.


Data fetching on the frontend is handled with Angular’s HttpClient, with all API interactions centralized in a service. This includes fetching all funds, retrieving a single fund, updating a fund, and deleting a fund

In the admin edit view, autosave is implemented using the blur event. This means that changes are saved when the user finishes editing a field rather than on every keystroke, and if admin doesnt wish to edit he can go back to the fund page.

I tried to keep UX|UI to the minimum. so simple scss is used.


# Going further 
If any improvement for the future, I would introduce a unique Id for all funds so that they can be uniquely defined, I will also introduce testing (Frontend/Backend)

# Question/Doubts:
My only doubt is:
The requirements for this task did not include authentication or role-based access control.
The term “Admin” is used only to describe a view that allows editing and deleting data. It does not represent an actual user role or permission system.


