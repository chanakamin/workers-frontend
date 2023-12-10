# WorkersFrontend

Frontend Side of worker (test) Project. 
Here You can see all units, workers of each unit, and create / delete workers

## Development server
Download the project, and Run `npm install`, 
Run `ng serve` for a dev server. The application will run on `http://localhost:4200/`.
To have the project run perfectly, you have to run the server side from here  [Backed Project](https://github.com/chanakamin/workers)  before.

## Project Structure

Worker folder includes all worker logic. 
There is a directory per each component,
A directory for shared services - unit service & worker service
And a Directory for types.

## Routes

- main route - all units displayed
- `/:id` - specific unit with all it's workers
- `/:id/new-worker` - add new worker to a unit
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Next Steps

- Edit Option
- Authentication
- Rxjs options (pipes, subjects)
- tests
- css
