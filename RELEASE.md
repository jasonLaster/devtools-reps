### How to create a new Reps release for mozilla-central.

Before you get started, you will need clones of devtools-reps and mozilla-central, as well as
a Bugzilla account.

```
1. Go to your clone of devtools-reps
  a. create a release branch on github
  b. update minor version in package.json, reset build version: 
    v0.N.X -> v0.N+1.0
  c. create a PR on Github for this release
  d. run /bin/publish-assets.js to create the bundle

2. Go to your clone of mozilla-central
  a. update mozilla-central to the latest
  b. copy : 
       assets/build/reps.js      -> devtools/shared/components/reps
       assets/build/reps.css     -> devtools/shared/components/reps
       assets/build/load-reps.js -> devtools/shared/components/reps
       assets/build/mochitest/*  -> devtools/shared/components/reps/test/mochitest/
  c. commit 'Bug XXXXXXX - reps v0.N+1.0: update devtools reps bundle from GitHub;r=reviewer'
  d. push to try, test locally, submit for review etc ...
  e. while try fails or some problem is detected, go back to devtools-reps, fix the issue, 
     create a new bundle and go back to 2.a
  f. when everything is fine and the patch is r+, land on autoland or inbound
  g. merge the PR on github
  h. create a tag on github
```

After that any issue with the bundle should be addressed with a new build version. 
Ideally, if the bundle has to be updated in mozilla-central for a bugfix, a corresponding
tag should be created on GitHub.

