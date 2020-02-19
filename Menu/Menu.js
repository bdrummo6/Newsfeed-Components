/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const createMenu = (arr) => {
  // Creates a header element contain the menu and it's elements
  const menuContainer = document.querySelector('.header');

  // Creates a div which will contain the list and list items that will make up the menu
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // Creates an unordered list for holding the list items which are menu items
  const menuList = document.createElement('ul');

  // Iterates through the array of items and stores them in list items and appends those to the menuList
  arr.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  });

  // Creates a menu button with the class menu-button and then an event listener for when the button is clicked on
  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menu.style.color = '#81C784'; // When the menu opens the default font color changes
    menu.style.backgroundColor = '#FFFEF7'; // When the menu opens the default background color changes
    menu.classList.toggle('menu--open');

    articles.addEventListener('click', () => { // When a click occurs on the main part of the page then the menu closes
      menu.classList.remove('menu--open');
    })
  });

  menuContainer.appendChild(menu); // Appends the menu div to the menuContainer header
  menu.appendChild(menuList); // Appends the menuList ul to the menu div

  return menuContainer;

};

createMenu(menuItems);