# AppTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.7.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## MOCK

The data api was simulated using json-server.

The json-server was installed as a project dependency.

When starting the application, the json-server is started together, without the need for additional commands in the terminal.

For such behavior, I wrote a secondary script that is executed through the command ```ǹpm start```

## Application features

- Project registration and display
- Registration and display of tasks in projects
- Removal of projects and related tasks
- Task removal

## Features partially implemented

- Task editing (I plan to complete today)

## Visual behavior

The system is not responsive,
I still intend to apply the appropriate media queri

## Architecture

I stood out for using the principles of KISS, DRY and many of the principles of YAGNI.

To evaluate the test, it would be interesting to review these concepts.

I also tried to use the principles of clean code.

[Remember KISS,YAGNI and DRY](https://danielsmanioto.com/blog/2020/01/18/dry-yagni-kiss-principios-de-design-de-software-que-todo-desenvolvedor-deveria-seguir/)

## End to end or unit tests

I didn't write tests, because, due to my current routine, I ended up not being able to focus 100% on writing the task management system as it would prevent me from participating in other appointments.

## Versination

The system is versioned with git using standard commit's
[Conventional commit's](https://www.conventionalcommits.org/en/v1.0.0)
