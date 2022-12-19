const funnyJokes = [
  "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
  "Time flies like an arrow, fruit flies like a banana.",
  "A soldier survived mustard gas in battle, and then pepper spray by the police. He's now a seasoned veteran.",
  "I'm addicted to brake fluid, but I can stop whenever I want.",
  "What's the difference between my ex and the titanic? The titanic only went down on 1,000 people.",
  "I told my doctor that I broke my arm in two places. He told me to stop going to those places.",
  "What's E.T. short for? Because he's only got little legs.",
  "A baby seal walks into a club.",
  "My granddad has the heart of a lion and a lifetime ban from the San Diego Zoo.",
  "I went on a once in a lifetime holiday. Never again.",
  "Rick Astley will let you borrow any movie from his Pixar collection, except one. He's never gonna give you up.",
  "It takes a lot of balls to golf like me.",
  "I asked my North Korean friend how it was there, he said he couldn't complain.",
  "Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the telly.",
  "Exaggerations went up by a million percent last year.",
  "They all laughed when I said I wanted to be a comedian. Well, they're not laughing now.",
  "I used to be addicted to soap, but I'm clean now.",
  "Two penguins walk into a bar... which is stupid because the second one should have seen it.",
  "I was wondering, why does a frisbee appear larger the closer it gets... then it hit me.",
  "Have I told you this deja vu joke before?",
  "Where do you find a cow with no legs? Right where you left it.",
  "Nostalgia isn't what it used to be...",
  "I didn't know my dad was a construction site thief, but when I got home all the signs were there.",
  "What's the best thing about Switzerland? I don't know, but their flag is a huge plus.",
  "What did the turkey say to the computer? Google, Google!",
];

const dadJokes = [
  "What does a baby computer call his father? Data.",
  "After an unsuccessful harvest, why did the farmer decide to try a career in music? Because he had a ton of sick beets.",
  "I only seem to get sick on weekdays. I must have a weekend immune system.",
  "What do you call a Frenchman wearing sandals? Philippe Flop.",
  "Why is it so cheap to throw a party at a haunted house? Because the ghosts bring all the boos.",
  "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner.",
  "What brand of underwear do scientists wear? Kelvin Klein.",
  "Which days are the strongest? Saturday and Sunday. The rest are weekdays.",
  "I just found out I’m colorblind. The news came out of the purple!",
  "Did you know your pupils are the last part to stop working when you die? They dilate.",
  "How do cows stay up to date? They read the Moo-spaper.",
  "What's the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle? Attire.",
  "I hate my job—all I do is crush cans all day. It’s soda pressing.",
  "Where do pirates get their hooks? Second hand stores.",
  "What do you call a line of men waiting to get haircuts? A barberqueue.",
  "In fact, if you sneer at any other method of measuring liquids, you may be held in contempt of quart.",
  "Who were the greenest Presidents in US history? The bushes.",
  "My hotel tried to charge me ten dollars extra for air conditioning. That wasn’t cool.",
  "What do you call a beehive without an exit? Unbelievable.",
  "If I ever find the doctor who screwed up my limb replacement surgery…I’ll kill him with my bear hands.",
  "Did you know that the first french fries weren’t cooked in France? They were cooked in Greece.",
  "It's easy to convince ladies not to eat Tide Pods, but harder to deter gents.",
  "I asked my date to meet me at the gym but she never showed up. I guess the two of us aren't going to work out.",
  "How do you find Will Smith in a snowstorm? You look for fresh prints.",
  "The difference between a numerator and a denominator is a short line. Only a fraction of people will understand this",
  "I found a wooden shoe in my toilet today. It was clogged.",
  "I just broke up with my mathematician girlfriend. She was obsessed with an X.",
  "I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog.",
  "To whoever stole my copy of Microsoft Office, I will find you. You have my Word.",
  "What’s Forrest Gump’s password? 1forrest1.",
  "I used to run a dating service for chickens. But I was struggling to make hens meet.",
  "If prisoners could take their own mug shots…They’d be called cellfies.",
  "Have you heard about those new corduroy pillows? They're making headlines.",
  "If a pig loses its voice…does it become disgruntled?",
  "Wanna hear a joke about paper? Never mind. It's tearable.",
  "A ship carrying red paint and a ship carrying blue paint collide in the middle of the ocean. Both crews were marooned.",
  "What is a guitar player's favorite Italian food? Strum-boli.",
  "How does cereal pay its bills? With Chex.",
];
const holidaysJokes = [
  "What do grapes sing at Christmas? ‘Tis the season to be jelly.",
  "Where do you find chili beans? At the North Pole!",
  "Why shouldn’t you prank the eggnog? It can’t take a yolk.",
  "Why do so many people drink eggnog around the holidays? It’s sold everywhere, you just can’t egg-nore it.",
  "Who is the only one to not eat at Christmas dinner? The turkey, it’s always stuffed!",
  "What’s the best thing to put into a Christmas cake? Your teeth.",
  "What did one cranberry say to the other at Christmas time? Berry Christmas!",
  "What did the gingerbread man get when he broke his leg? A candy cane.",
  "What did the gingerbread Man put on his bed? A cookie sheet.",
  "Why did the gingerbread man go to the doctor? He was feeling crumby.",
  "What’s red, white and blue at Christmas time? A sad candy cane.",
  "Who hides in a bakery on Christmas? A mince spy.",
  "How does Darth Vader enjoy his Christmas Turkey? On the dark side!",
  "How many letters are in the Christmas alphabet? 25 — there’s noel.",
  "Did you hear about what happened to the man who stole the advent calendar? He got 25 days.",
  "Why is the Grinch such a good gardener? He has a green thumb.",
  "How did one sheep greet the other for the holidays? Wool-tide bleatings!",
  "What’s Tarzan’s favorite Christmas song? Jungle bells.",
  "What type of key do you need to put on a Nativity play? A don-key.",
  "Why was the advent calendar afraid? Its days were numbered!",
  "What falls in the winter but never gets hurt? Snow. ",
];

//Function for random joke
const randomJokes = (arrayOfJokes) =>
  arrayOfJokes[Math.floor(Math.random() * arrayOfJokes.length)];

// Find all elements
const buttonFunnyJokes = document.getElementById("funnyJokes");
const buttonDadJokes = document.getElementById("dadJokes");
const buttonHolidaysJokes = document.getElementById("holidaysJokes");
const displayJoke = document.getElementById("displayJoke");
const content = document.createElement("h2");

// Method to display the random joke on click
buttonFunnyJokes.onclick = function () {
  displayJoke.appendChild(content);
  content.innerHTML = randomJokes(funnyJokes);
};

buttonDadJokes.onclick = function () {
  displayJoke.appendChild(content);
  displayJoke.innerHTML = randomJokes(dadJokes);
};

buttonHolidaysJokes.onclick = function () {
  displayJoke.appendChild(content);
  displayJoke.innerHTML = randomJokes(holidaysJokes);
};

const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector(".modal-title");
  modalTitle.textContent = randomJokes(funnyJokes);
});
