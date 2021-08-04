// ******** MVP ********
// FORM --------------
// need to prevent the user from entering multiple words
// retrieve user's input from a form -> onSubmit listener ****DONE
// store user's input in state ****DONE
// search parameter -> user's input ****DONE
// call the giphy API using axios within a useEffect function ****DONE

// FETCHING API---------------
// if no results are returned by the API, prompt the user to re-enter their search term
// add in an API loading state -> if promise is still pending, then display a loading image?

// ERROR HANDLING
// In case of error, throw and catch the error

// DISPLAYING API DATA -----------
// API will return a data object ****DONE
// use .map() to iterate over all the objects and display ~5 gifs for the user to select ****DONE

// add some sort of scroll-down function to take the user to the results of their search

// if the user clicks any one of the images, then we store the image info (URL, alt text, username, and date) into firebase
// will need to push the image info into a larger array, which is then pushed to firebase

// Upon clicking a image, other images fade out

// if the user doesn't like any of the results, they can click a button to scroll back to the form and re-enter their mood/emotions

// display a timeline of all saved gifs from firebase:

// initialize firebase ****DONE
// import the database containing image info - this will already be in a sorted array, so just need to iterate through the array in order and display it
// alternatively, can also make a sorting function to sort all objects from the database based on their date

// ******** STRETCH GOALS ********

import Header from './Header';
import InputOutput from './InputOutput';
import Button from './Buttons';
import { useRef } from 'react';

function App() {
  // create reference to specific scroll locations on the virtual DOM
  const topOfPage = useRef(null);

  return (
    <div className="wrapper" ref={topOfPage}>
      <Header />
      <main>
        <InputOutput />
        {/* For each button, pass the scroll reference as props*/}
        <Button target={topOfPage} direction={'up'} />{' '}
      </main>
    </div>
  );
}

export default App;
