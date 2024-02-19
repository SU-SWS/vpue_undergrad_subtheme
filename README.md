# [VPUE Undergrad](https://github.com/SU-SWS/vpue_undergrad_subtheme)
##### Version: 1.0.2

Changelog: [Changelog.txt](CHANGELOG.txt)

Description
---

VPUE Undergrad is a Stanford Undergrad sub-theme that works with the Stanford Basic theme. It was designed by Lina Yamaguchi.

Documentation
---
See subtheming guides and best practices here: 
https://devguide.sites.stanford.edu/front-end/drupal/sub-themes 

Sites
---
This is installed on the following sites:

- Test: https://advising-test.sites.stanford.edu/

List of Sites with this Subtheme:

- advising.stanford.edu

- approaching.stanford.edu

- artsintensive.stanford.edu

- bosp.stanford.edu

- college.stanford.edu

- exploreintrosems.stanford.edu

- frosh101.stanford.edu

- hume.stanford.edu

- introsems.stanford.edu

- lelandscholars.stanford.edu

- orientation.stanford.edu

- octresources.stanford.edu

- pwr.stanford.edu

- pwrcourses.stanford.edu

- pwrnotations.stanford.edu

- sis.stanford.edu

- soco.stanford.edu

- summerfellows.stanford.edu/

- undergrad.stanford.edu

- undergradresearch.stanford.edu

- vpuefacstaff.stanford.edu

- ways.stanford.edu

- Client test site: https://advisingsubtheme.sites.stanford.edu/


Configuration
---

Nothing special needed. Install, enable, and set as the default active theme.

Developer
---

If you wish to develop on this theme you will most likely need to compile some new css. Please use the sass structure provided and compile with the sass compiler packaged in this theme. To install:

```
npm install
```
After you've made a change you want to see processed, you can run:
```
npm run publish
```
This will process scss, js, and asset files, preparing them from the src directory to the dist directory.
It will also copy decanter twig templates from node_modules to the dist/templates/decanter directory to be used.

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this theme. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)
