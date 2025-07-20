import { writeFileSync } from 'fs';

let pronoun = ['the', 'our', 'my', 'your', 'his', 'her', 'their', 'its', 'this', 'that', 'those', 'these'];

let adj = ['great', 'big', 'tiny', 'angry', 'furious', 'weird', 'sneaky', 'strange', 'brave', 'wild', 'lazy', 'hungry', 'grumpy', 'noisy'];

let noun = ['choco', 'racoon', 'time', 'print', 'neighbor', 'teacher', 'alien', 'fires', 'robot', 'grandma', 'ghost', 'pirate', 'clown', 'penguin'];

let suffix = [
  '.com', '.org', '.net', '.int', '.edu', '.gov', '.mil',
  '.co', '.io', '.ai', '.app', '.dev', '.xyz', '.me', '.tv',
  '.us', '.uk', '.ca', '.au', '.de', '.fr', '.in', '.jp', '.cn', '.br',
  '.ru', '.es', '.nl', '.it', '.se', '.no', '.fi', '.dk', '.mx', '.za'
];

let domains = []
let preview = []

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let s of suffix) {
        let domain = ''
        let temp = s.slice(1)
        let modNoun = ''
        if (n.endsWith(temp)) {
          modNoun = n.replace(temp, '')
        } else {
          modNoun = n
        }
        if (modNoun !== n) {

        }
        domain = p + a + modNoun + s
        domains.push(domain)
        if (modNoun !== n && preview.length < 8) {
          preview.push(domain)
        }
      }
    }
  }
}

console.log(`For the complete list of generated domains,`);
console.log(`check the 'result' folder for the 'domain.json' file.`);
console.log(`-- Some examples:`);
console.log(preview);

writeFileSync('result/domains.json', JSON.stringify(domains, null, 2));
