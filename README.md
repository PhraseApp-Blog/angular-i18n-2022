# Azcadea
This is by far the best walk-through of Angular internationalization I have found: https://phrase.com/blog/posts/angular-localization-i18n/. In my previous life at Skillstorm, I was charged with Internationalization with an Angular/PrimeNG(css)/ASP.NET/SQL application, and did poorly. I have done multiple tutorials (you can see on my github) and gone through the Angular Documentation, which I found to be overly general.
    Angular itself is packed with features and i18n is just one of them. The word internationlization has 18 characters between i and n. We will be using an obsure file format called .xlf/.xliff, which means XML Localization Interchange File Format.

## How to run

## Mini-challenge
Can I get Azcadea to run in both Arabic AND French Canadian?

## Checklist of tasks
1. Install and configure the @angular/localize package: npm install @angular/localize (potentially use --force)
2. Mark EVERY string tag with "i18n" as localizable
3. Extract strings for translation: ng extract-18n --output-path src/locale
4. Create a new translated string file: cp src/locale/messages.xlf src/locale/messages.ar.xlf (in our case of course we will translate to french)

ng build --localize

5. Literally translate EVERY string. In the translated messages.xlf file, each string within a \<source>\ tag must add a \<target>\ tag with the actual translation
6. Double check dates, numbers, and currency, potentially add Angular's built-in formatting pipes in component templates. These pipes will use the active locale for formatting by default. Example: <p>currency: {{ myNumber | currency: 'CAD' }}</p>
7. Build app to read headers
8. Add a simple toggle button to give users a tiny practicle feature


## What will we do with this?
The challenge is the shear amount of language that must be manually entered. It's a lot of labor. But there is a capability of using the Accept-Language HTTP Header with normal GET requests, and that will allow our amis du Quebec to enjoy the site.

## How will we get dynamic content translated?
When returning strings that can change at runtime, add $localize before a template literal.

## Snags and snafus
Plurals, 

## Potential 3rd-party plugins
Phrase
Localize