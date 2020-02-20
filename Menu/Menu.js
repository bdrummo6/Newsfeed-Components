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
  // Creates a 'div' element to be the menu container
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // Creates a 'ul' element to hold the menu items
  const menuList = document.createElement('ul');

  // Creates 'li' elements by iterating over the array data and then appending each to the menuList
  arr.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item; // Stores data from item into the textContent property of the created menuItem
    menuList.appendChild(menuItem);
  });

  // Gets the element with the class 'menu-button'
  const btn = document.querySelector('.menu-button');

  btn.addEventListener('click', () => {
    menu.style.color = '#81C784'; // Changes the default font color on button click
    menu.style.backgroundColor = '#FFFEF7'; // Changes the default background color on button click
    menu.classList.toggle('menu--open'); // Toggles the menu to open and close

    articles.addEventListener('click', () => { // Clicking on main part of the page will also close the menu
      menu.classList.remove('menu--open');
    })
  });

  menu.appendChild(menuList);

  return menu;
}

// Get the 'div' with the class 'header'
const menuContainer = document.querySelector('.header');

// Call createMenu function with the array 'menuItems' as its parameter
const menu = createMenu(menuItems);

// Append menu to menuContainer
menuContainer.appendChild(menu);