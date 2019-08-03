# apod-app
This is a React app which displays photos of space from the NASA APOD API

## Dependencies
- react
- react-dom
- axios
- node-sass
- styled-components

## Components

- App  
  Holds state for the entire app. Also makes the API call. Passes state  and api response to Potd .  
  State :  
  - loading
  - selectedDate


- Potd  
  Renders the various elements on the screen.  
  Props:  
  - object returned by API

- Constellation  
  A container for stars

- Star  
  A star used as a decoration for the backround.

- MediaWrapper  
  Parent of ImgBlock and Copyright. Used to align Copyright with ImgBlockContainer.

- ImgBlockContainer  
  Parent of ImgBlock. Creates purple border with padding

- ImgBlock  
  A div with the background-img: src set to the url passed as props.  
  Props:  
  - hdurl
  - url

- ImgControls  
Used to rotate the img or switch versions

- PictureTitle  
  An h1 containing the title of the photo.  
  Props:  
  - title

- NASALogo  
  The NASA logo

- DatePicker  
  User can select a date which will update state.selectedState, causing the app to re-render with the API data for the selected day. 

- ImgModal  
  Modal for viewing image full screen.  
  Props:  
  - hdurl
  - url

  - ModalControls  
  Buttons used to rotate, toggle HD/normal, change date, and close the modal

- NextArrow  
  Icon for next/previous date  

- HDImage  
  Icon for HD image toggle  

- RotateIcon  
  Icon for image rotation  

- NormalImage  
  Icon for reverting from HD to normal image

- HeaderContainer  
  Parent of Logo, AppTitle, DatePicker

- AppTitle  
  Text at top of screen on tablet and desktop

- ExplanationContainer  
  Parent of Explanation

- Explanation  
  Description of the photo  
  Props:  
  - explanation
