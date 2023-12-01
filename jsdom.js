//get header element
const collection = document.getElementsByTagName("header")

//get all the section elements
const collection1 = document.getElementsByTagName ("section")

//get the section element with class='current'
const collection2 = document.getElementsByClassName ("current")

//get the section that comes after the 'current' section
const collection3 = collection2[0].nextElementSibling

//get the h2 node from the section before the 'current' section
const collection4 = collection2[0].previousElementSibling 

//get the div that contains the section that has an h2 with a class of 'highlight'
const collection5 = document.querySelector ("div section h2.highlight")

//get all the sections that contain an H2 (using a single statement);
const collection6 = document.querySelectorAll ("section h2")