/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Is Angular dying because of React?',
    date: 'May 1st, 2019',
    firstParagraph: `As local market trends begin to skew towards React, it’s easy to question the future of demand for Angular. 
          It’s a one or the other kind of game and makes you wonder which once you should pick up, especially when you’re just entering the fray. `,

    secondParagraph: `Since Facebook changed React’s BSD licensing to MIT, the library appears to be exploding in every corner of the global development 
          market. However, what a lot of entrepreneurs and startups don’t realize until later down the line is that React isn’t a complete front end system —
          it is just one library, one building block of many to help quickly scale a small application into larger, compartmentalized and component 
          based system.`,

    thirdParagraph: `Facebook is often used as the prime example of its success. But React is only a tiny drop in the multitude of technologies the 
          tech giant employs. It is after all, just a JavaScript UI library. Angular, however, is a collection of libraries that work together a 
          cohesive unit. There are things that Angular do well that React omits, while other theoretical implementations of the latter is much better 
          executed. Developers will always be biased towards what they know best and as a result, refuse to look into other paradigms that may be 
          better suited for the situation — or perhaps this kind of thinking is often regulated to those who sits at the junior and intermediate levels.`
  },
  {
    title: 'Deeply Understanding JavaScript Async and Await with Examples',
    date: 'May 1st, 2019',
    firstParagraph: `In the beginning, there were callbacks. A callback is nothing special but a function that is executed at some later time. 
          Due to JavScript’s asynchronous nature, a callback is required in many places, where the results are not available immediately.`,

    secondParagraph: `Problems arise when we want to do multiple async operations. Imagine this hypothetical scenario (where all operations are async) —
          We query our database for the user Arfat. We read the profile_img_url and fetch the image from someServer.com.
          After fetching the image, we transform it into a different format, say PNG to JPEG.
          If the transformation is successful, we send the user an email.
          We log this task in our file transformations.log with the timestamp.`,

    thirdParagraph: `Note the nesting of callbacks and the staircase of }) at the end. This is affectionately called as Callback Hell or Pyramid of 
          Doom due to its namesake resemblance. Some disadvantages of this are —
          The code becomes harder to read as one has to move from left to right to understand.
          Error handling is complicated and often leads to bad code.
          To overcome this problem, JavaScript gods created Promises. Now, instead of nesting callbacks inward, we can chain them.`
  },
  {
    title: 'Embracing Webflow as a Frontend Developer',
    date: 'May 28th, 2018',
    firstParagraph: `Throughout the rather short history of software development there have been many evolutions in the tools we use to 
          build software. Despite the very nature of software development being rapid change, there’s always been a resistant, change-adverse 
          group downplaying the legitimacy of newer tools. When we advanced from Assembly to the familiar C-like languages commonly used today, 
          there were no doubt programmers who scoffed at C, and thought the abstractions went too far — that real programmers wrote Assembly, 
          and C was just a toy for the simpletons. We often hear, more recently, the same sentiments expressed towards languages like PHP and 
          Visual Basic. In an interview once, I saw my chances of getting the job disappear in a swift evanescence when I mentioned to my 
          interviewer that my last job was primarily working with PHP.`,

    secondParagraph: `It’s rampant in our industry to preach some version of the no true Scotsman fallacy when it comes to the tools we use to 
          build software. We bicker over programming languages, text editors, and a variety of other tools. This brings us to Webflow (Webflow): 
          a visual tool for building websites without writing any code. Should real web developers use Webflow despite already knowing how to code?`,

    thirdParagraph: `My initial thoughts when I first learned of Webflow was something along these lines: Oh great… another Adobe Dreamweaver.
          I thought Webflow wasn’t a serious tool for real developers. I thought it would be better if people just learned how to code instead 
          of using these clunky, inefficient tools. Just like some people once thought with C, I thought a visual abstraction would go too far, 
          too high level, to be a legitimate tool..`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const createArticle = (obj) => {
   // Create a 'div' element for the article
  const article = document.createElement('div');
  article.classList.add('article'); // Gives the 'div' element the class 'article'

  // Creates a 'h2' element that will hold an Article's title
  const title = document.createElement('h2');
  title.textContent = obj.title; // Sets the text of the 'h2' element

  // Creates a 'p' element to hold the date of the article
  const date = document.createElement('p');
  date.classList.add('date');
  date.textContent = obj.date;

  // Creates a 'p' element for holding the text for the firstParagraph
  const p1 = document.createElement('p');
  p1.textContent = obj.firstParagraph;
  // Creates a 'p' element for holding the text for the secondParagraph
  const p2 = document.createElement('p');
  p2.textContent = obj.secondParagraph;
  // Creates a 'p' element for holding the text for the thirdParagraph
  const p3 = document.createElement('p');
  p3.textContent = obj.thirdParagraph;

  // Creates a 'span' element for holding the button that will expand and close an article
  const btn = document.createElement('span');
  btn.classList.add('expandButton');
  btn.textContent = 'Click to Expand'; // Sets the initial text for the button

  // Creates an event listener so when the button is clicked the article will expand open or close depending on its status
  btn.addEventListener('click', () => {
    article.style.transition = 'all 3s ease-in-out'; // Slows the process of opening an closing an article
    if(btn.parentElement.classList.contains('article-open')) { // if the article is open
      btn.parentElement.classList.remove('article-open'); // removes 'article-open' token to close the article
      btn.textContent = 'Click to Expand';
    } else { // if the article is closed
      btn.parentElement.classList.add('article-open'); // Adds the 'article-open' token to open the article
      btn.textContent = 'Click to Close';
    }
  });

  // Append individual elements to the article 'div'
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(btn);

  return article; // returns the article component
};

// Get the 'div' with the class 'articles'
const articles = document.querySelector('.articles');

// Maps over the data, creates articles from the data and then appends each one to the articles 'div'
data.forEach(article => articles.appendChild(createArticle(article)));