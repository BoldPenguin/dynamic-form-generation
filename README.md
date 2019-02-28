# A little background information

This code exercise is intended to evaluate your software engineering skills but also give you an introduction into the types of problems we solve at Bold Penguin. Your solution will be evaluated based on the ability to produce intended results, cleanliness, adherence to best practices, maintainability, and readability. You should write code like you would if this were an actual assignment. You do not need to gold plate your solution, but we are looking for something more than a script.  Ideally your solution would demonstrate your understand of object-oriented principles and best practices.

# The Dynamic Form Generation Problem

One of the problems Bold Penguin helps solve is matching business owners (who are looking to purchase a commercial insurance policy) with an agent & and a carrier who can help them.

To this end, Bold Penguin writes software that asks questions about the business to be insured so to determine an agent/carrier match for the particular business/owner.

The goal is to provide a path that provides a user experience short in duration while also providing the most accurate match.  We use question sets that are generated from a set of rules data provided by agents and carriers.

## Getting Started

Clone **this** repo, please don't make a fork of it.

You'll need to setup your development environment with Javascript and Angular. This step is platform dependent, so you'll need to figure it out yourself.

## The API

Another team (the Pengwinners) is working on a series of API endpoints to generate a dynamic form. The form is intended to collect data from a small business owner about their business. There are a few endpoints that you will need to use for this assignment:

### GET https://pengwinning.boldpenguin.com/api/questions

This retrieves a list of questions that the consumer must answer. The questions have some indication of the types of HTML elements that are to be used.

```bash
$ curl -XGET https://pengwinning.boldpenguin.com/api/questions -H 'Authorization: Bearer xxxxxxxx'
```

### GET https://pengwinning.boldpenguin.com/api/naics/search?q=XXX

This endpoint filters NAICS (North American Industry Classification System) for industry classification codes that match the query string (e.g. the q parameter).

```bash
$ curl -XGET https://pengwinning.boldpenguin.com/api/naics/search?q=te -H 'Authorization: Bearer xxxxxxxx'
```

### POST https://pengwinning.boldpenguin.com/api/application_forms

This endpoint saves an application form (which is essentially the answers to the questions described in the `api/questions` endpint.

```bash
$ curl -XPOST https://pengwinning.boldpenguin.com/api/application_forms -H 'Authorization: Bearer xxxxxxxx'
```

TODO: Supply a sample request payload

## Authentication

Like most modern web application, we use stateless authentication. In order to authenticate successfully, you'll need to supply a request header with the bearer scheme. To generate your authorization header:

1. Trim leading and trailing whitespace from your email address
2. Force all characters to lower-case
3. md5 hash the final string

For example, if your email was `Frank@boldpenguin.com`, you would generate the md5 hash of `frank@boldpenguin.com` which is `5475eb1890f635deca00c57d127f30bd`. You will then supply this value via the Authorization header of an HTTP request, like so:

`Authorization: Bearer 5475eb1890f635deca00c57d127f30bd`

## Your Assignment

**After completing each of the steps below, commit your changes to your local clone with a meaningful commit message.**

1. Set up an injectible service that will be responsible for retrieving the question set data from: 
```bash
https://5u9pljo9pc.execute-api.us-east-1.amazonaws.com/dev/api/questions
```
All endpoints require an Authorization header with the md5 hash fingerprint value of your personal email as the value.

2. Install the Angular Material Module

```bash
https://material.angular.io/guide/getting-started
```

3. Make a form using Angular Material Form Controls to ask the user for inputs based on the the question set data you fetched in step one.

4. Configure your service to post back the form responses to
```bash
https://5u9pljo9pc.execute-api.us-east-1.amazonaws.com/dev/api/application_forms
```
with a request body JSON object that has an array of answers objects, each with an id, and response:

```bash
{
	"answers": [
		{"id":1,
		"response": "<response1>"},
		{"id":2,
		"response": "<response2>"},
		{"id":1,
		"response": "<response3>"}...
	]
}
```

5. Implement Search....




# DynamicFormGeneration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
