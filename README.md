# Azcadea
This is by far the best walk-through of Angular internationalization I have found: https://phrase.com/blog/posts/angular-localization-i18n/. In my previous job at Skillstorm, I was charged with Internationalization with an Angular/PrimeNG(css)/ASP.NET/SQL application, and did poorly. I have done multiple tutorials (you can see on my github) and gone through the Angular Documentation, which I found to be overly general.
    Angular itself is packed with features and i18n is just one of them. The word internationalization has 18 characters between i and n. We will be using an obsure file format called .xlf/.xliff, which means XML Localization Interchange File Format.

## Mini-challenge
Can I get Azcadea to run in both Arabic AND French Canadian?
I figured this out Sunday afternoon, yay.

## How to run locally
npm install --force (should work), then it's worth it to go over the steps below. The code in this repo has been updated from the tutorial to include an extra French translation. Do steps 1,8,9,10.

## Checklist of tasks
1. Install and configure the @angular/localize package: npm install @angular/localize (potentially use --force)
2. Add a few entries to angular.json
3. Mark EVERY string tag with "i18n" as localizable
4. Extract strings for translation: ng extract-18n --output-path src/locale
5. Create a new translated string file: cp src/locale/messages.xlf src/locale/messages.ar.xlf (in our case of course we will translate to french)
6. Literally translate EVERY string. In the translated messages.xlf file, each string within a \<source> tag must add a \<target> tag with the actual translation
7. Double check dates, numbers, and currency, potentially add Angular's built-in formatting pipes in component templates. These pipes will use the active locale for formatting by default. Example: \<p>currency: {{ myNumber | currency: 'CAD' }}\</p>
8. Generate separate builds in the dist file: ng build --localize
9. This tutorial uses a simple HTTP server to test, so run npx http-server dist/azcadea, open localhost:8080/en-CA or localhost:8080/ar
10. Build app for production: ng build --localize --configuration production, node serve-prod-test.js, and look at the Express.js server they built on localhost:8080
11. Build app to read headers
12. Add a simple toggle button to give users a tiny practicle feature
13. To view images, edit data in cabinet.model.ts and add locale to locale.d.ts

## What will we do with this?
The challenge is the shear amount of language that must be manually entered. It's a lot of labor. But there is a capability of using the Accept-Language HTTP Header with normal GET requests, and that will allow our amis du Quebec to enjoy the site.

## How will we get dynamic content translated?
When returning strings that can change at runtime, add $localize before a template literal. If we can add translations for the data, we might be able to use this strategy. Ultimately, this is the question for Brent.

## Snags and snafus
Plurals, syntax

## Potential 3rd-party plugins
Phrase \n
Localize