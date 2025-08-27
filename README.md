# TestApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Continuous Integration (CI/CD) Pipeline

The project uses GitHub Actions with the workflow:
CI (Angular) -> Docker Hub

## Pipeline file: .github/workflows/ci.yml

 # Trigger

    Runs automatically on push to main

 # Concurrency

    Only one pipeline runs per branch (ci-${branch})
    Any older runs are cancelled when new commits are pushed

 # Pipeline Stages

 1.  Unit Tests (unit_tests)

    Runs Angular unit tests in ChromeHeadless

    # Generates:

    JUnit XML (reports/junit/…)

    Coverage HTML (reports/coverage/index.html)

    Raw console log (reports/unit-tests.log)

    Uploads results as an artifact

    Fails the pipeline if any test fails

 2.  End-to-End Tests (e2e_tests)

    Builds the Angular app for production

    Serves the dist/ folder locally

    Runs Cypress tests (headless Chrome)

    Generates:

    JUnit XML (reports/cypress-junit/…)

    Screenshots (cypress/screenshots/…)

    Videos (cypress/videos/…)

    Raw console log (reports/cypress.log)

    Uploads results as an artifact

    Fails the pipeline if any E2E test fails

 3.  Gate (gate)

    Waits for both unit_tests and e2e_tests

    If either failed → marks the pipeline as ❌ failed

    If both succeeded → allows next stage to run

 4.  Build & Push Docker Image (build_push)

    Runs only if both test jobs passed

    Uses Docker Buildx

    Pushes the image to Docker Hub as:

    latest

    Commit SHA tag

 5.  Artifact Pruning (prune_old_artifacts)

    Keeps only the last 7 artifacts for completed runs on main

    Deletes older ones to save storage

## Artifacts Produced

Each run produces downloadable artifacts on the GitHub Actions run page:

unit-artifacts-<run#>-<sha7>/
  reports/junit/…
  reports/coverage/…
  unit-tests.log

e2e-artifacts-<run#>-<sha7>/
  reports/cypress-junit/…
  reports/cypress.log
  cypress/screenshots/…
  cypress/videos/…

## Pipeline Flow Diagram
    +-------------+
    | unit_tests  |
    +-------------+
           \
            \
             ---> [ gate ] ---> build_push ---> prune_old_artifacts
            /
    +-------------+
    |  e2e_tests  |
    +-------------+

unit_tests and e2e_tests run in parallel

If both succeed → pipeline continues

If either fails → pipeline stops before Docker build
