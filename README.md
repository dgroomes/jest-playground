# jest-playground

NOT YET FULLY IMPLEMENTED

📚 Learning and exploring Jest, the JavaScript testing framework.

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
>
> -- <cite>https://jestjs.io</cite>


## Overview

Jest is pervasive. Let's learn it by example.

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Instructions

Follow these instructions to run the demo test suite.

1. Pre-requisite: Node.js
   * I used Node.js v18.17.1 which bundles npm 9.6.7
2. Install dependencies
   * ```shell
     npm install
     ```
3. Run the test suite
   * ```shell
     npm test
     ```


## Observations

I installed Jest, and I'm surprised how many dependencies were installed. I used the following command:

```shell
cat package-lock.json | jq '.packages | keys | length'
```

Which shows that there are 292 packages installed. I think Jest's focus on simplicity must be a form of "reduced code
when authoring tests" and not an absolute simplicity from top-to-bottom.

Jest has [experimental support for ECMAScript modules (ESM)](https://jestjs.io/docs/ecmascript-modules) and this is
because, in part (or mostly?), a feature that Jest relies on in Node.js is itself experimental. Specifically, Jest uses
virtualization features of Node.js, and it looks to me like the ESM variation of this, called [`vm.Module`](https://nodejs.org/api/vm.html#vm_class_vm_module)
is experimental. I would strongly prefer to use modules, but I'm not willing to reach for experimental features in this
project.


## Wish List

General clean-ups, TODOs and things I wish to implement for this project:

* [x] DONE Scaffold the project
* [ ] IN PROGRESS Do something with mocks
  * I'm going to make a function that calls GitHub API using axios. This is a real enough example to make for an
    effective exercise of Jest features.
* [ ] Get leverage. Jest brings a lot of features. If I'm pulling in the complexity, I want to use it. HTML reports?
  Watch mode? Code coverage? Things I don't know about yet?


## Reference

* [Jest: *Getting Started*](https://jestjs.io/docs/getting-started)
