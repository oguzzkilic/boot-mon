# How to contribute

Not sure what a pull request is, or how to submit one? Take a look at GitHub's [help](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/) documentation first.

## Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Fork the repository on GitHub

## Making Changes

* Create a topic branch from where you want to base your work.
  * This is usually the master branch.
  * Only target release branches if you are certain your fix must be on that
    branch.
  * To quickly create a topic branch based on master; `git checkout -b
    fix/master/my_contribution master`. Please avoid working directly on the
    `master` branch.
* Make commits of logical units.
* Check for unnecessary whitespace with `git diff --check` before committing.
* Make sure your commit messages are in the proper format.
* Make sure you have added the necessary tests for your changes.
* Run _all_ the tests to assure nothing else was accidentally broken.