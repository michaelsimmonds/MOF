# MOF

## Setup

* Clone or download the repository.
* Run `yarn` in terminal.
* Run `yarn run serve` in terminal to open in browser.

## Task

The task was to build a content carousel module that is fully responsive and matches the supplied design file. The project  should fulfil the following criteria to be acceptable as an Minimum Viable Product.
* The site should be AA compliant against the WCAG 2.0 Accessibility guidelines.
* It needs to use valid HTML5 and make use of a CSS pre-processor (SASS/LESS).
* It should be platform agnostic and work well across all screen-sizes - designs are provided for all breakpoints.
* Navigating left or right should trigger the correct element to move into the central position.
* JavaScript frameworks can be used for this component (such as React, AngularJS etc) as well as any plugins you deem appropriate.


## Process
The first thing I did was set up a webpack, which included the relevant loader rules and an auto-refresh settings, and install the necessry packages. When this was done I added a script to the package.json which would launch my project on `yarn run serve`.

After this was set up, I created the index.html, app.js and style.css files and checked everthing was working by console logging and dislaying 'Hello World'. I was originally going to create the carousel using vanilla javascript, but after searching online and seeing what carousel packages were available, I decided to to use React and React Slick slider due to its in-built effects and responsive capabilites.

I constructed my main React App in my app.js file then attached it to the 'root' div in the HTML using ReactDOM. I then set up the necessary path to my Home component where I then created five divs, each with their own image and text information which would later constitute the slider. I then imported the slider from React-Slick and input the relevant settings that enabled me to replicate the provided desktop design. Since arrows were part of the desktop design, I wrote two functions that would enable me to render my own arrow rather than the defualt ones provided by React Slider. At first this was in the Home component, but I later gave them their own separate components and exported them into the Home.

I then started adding responsive break points using the Slider settings and my own CSS media queries. One the of the main difficulties in this project was ensuring that these two sets of breaking points married up together in an effecient way, as they would often clash and overlap.

## Outcome
Below are three screenshots of my site with the dimensions the same as the desings provided. The carousel I built is fully responsive and works well across all screen sizes.

### Desktop Design
![Screenshot 2019-05-11 at 13 57 35](https://user-images.githubusercontent.com/43914382/57572864-5aa04200-7418-11e9-8428-9841500a3191.png)

### Tablet Design (768 by 1024)
![Screenshot 2019-05-11 at 17 28 13](https://user-images.githubusercontent.com/43914382/57572878-84f1ff80-7418-11e9-806d-0d7296218dba.png)

### Mobile Design (320 by 646)
![Screenshot 2019-05-11 at 17 22 04](https://user-images.githubusercontent.com/43914382/57572880-92a78500-7418-11e9-919f-98b616a15472.png)


## Challenges and Wins

* One of my favourtie aspects of the designs provided were the border effects on some of the images, whereby the border of one image was effectly the edge of another slightly larger image underneath it. I tried to achieve this by setting two images in each div, making one slighlty smaller and then placing the smaller one on top of the larger one using the position: absolute property. However, the responsive design of the page invariably threw the images out of sync. In the end I set both of the images left/right margins to auto, then gave the larger one a negative top margin equal to its height. This effectivly placed it underneath the smaller one and achieved the responsive border-like effect that was required.

* It was difficult to keep the arrows in the correct position, as the width of the page and the position of the invidual sliders varied a lot. It was important that the arrows occupied the correct position, as if they overlapped with the images they would become virtually invisible. To achieve this I had to sync the various break points in the slider settings and my own CSS media queries to ensure they did not clash or ovelap.