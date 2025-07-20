# Domain Generator
To run the script, use `npm run start`.

A `domains.json` file will be generated will all the possible domain combinations in the arrays.

If the domain name ends with letters that are available as a domain suffix, the suffix will be incorporated as such in the final result. The console will show some examples of this.

Example: `thegreatpenguin => thegreatpengu.in`

---

I took the opportunity to learn how to setup my script on my own with node and npm (instead of using the template from 4Geeks).
- Setup the project with `npm init` and `npm install` and create the `app.js` script.
- Added `"type" : "module"` to be able to use the `import {foo} from 'bar'` syntax, which I find cleaner. If I discover later that it is not good practice to do this, I will update the code.
- Added `npm run start` to run `node app.js` just to learn about adding my own npm commands.

After realizing my arrays combined into over 20k domains, I decided to instead write them to a `json` file. I read about the `writeFileSync` method and used it at the end of my script. I then clean up my console output to be more succint, informative, and readable. 

I enjoyed working on this, and it was fun to figure out a clean algorithm to do it.
