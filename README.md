# Where in the World of Warcraft is Amilanae?

In the real world, I'm a web developer named Mackenzie, but online I'm a druid named Amilanae. As an avid World of Warcraft player, it's always really important for me to keep up with my character's gear, progression, and raid schedule. I built this quick app to be able to check up on all of these when I can't log in to the game. 

## Instructions

Before viewing this project, you'll need a Battle.net API key, which can be acquired at https://dev.battle.net/ . Within the server file, on the same level as index.js, create a config file with the following format:

```
module.exports = {
  apiKey: "API_KEY_HERE"
};
```


1. Clone the project down to your local machine.
2. Run "npm install" or "yarn"
3. Create your config file with API key (see above)
4. Run "nodemon server/" to start your backend
5. Run "npm run start" or "yarn start" to view the project in your browser


## Tech

This project utilizes the Battle.net World of Warcraft Community API. With stellar documentation and examples, it's very simple to implement into any project. The back-end of this app uses node and express, and the front end is React. This project was created using only three components, per the challenge!

The site is mobile responsive and features three breakpoints so that it can be easily viewed from a mobile, tablet, or desktop view. Because it utilizes the Battle.net API, all information is updated in real-time with game data. 

## About the Project

I've had the joy of playing World of Warcraft since vanilla, and it's always been an important part of my life. I've made life-long friends and built a team within the game, so making this project was really fun for me. 

In the future, I hope to make this site accessible to other players, who would simply input their character name and realm to see their own data. Unfortunately, I was unable to implement this within the time frame of the challenge because transferring my character to another realm reated a lag in the system to retrieve character images, so these had to be hard-coded in, allowing no chance for customization. 

I think this project could also be useful to guilds who want to check out potential recruits for a raiding team. This website shows gear, progression, and recent achievements. In the future, I may also add raid-logging and parses for a more clear view of the player's skill. 

## Acknowledgements 

I'd like to thank my guild for cheering me on, helping me dig up icons images, and sending me cat pictures when I got frustrated. Thank you to my sister Brianna and brother Alex for giving me critique of my site and offering suggestions, and a final thank you to Dylan, who watched me put this project together first-hand. 
