// ******** MVP ********

// retrieve user's input from a form -> onSubmit listener
// store user's input in state
// need to prevent the user from entering multiple words

// call the giphy API using axios within a useEffect function
// search parameter -> user's input
// if no results are returned by the API, prompt the user to re-enter their search term
// add in an API loading state -> if promise is still pending, then display a loading image?

// add some sort of scroll-down function to take the user to the results of their search
// API will return a data object
// use .map() to iterate over all the objects and display ~5 gifs for the user to select
// if the user doesn't like any of the results, they can click a button to scroll back to the form and re-enter their mood/emotions

// if the user clicks any one of the images, then we store the image info (URL, alt text, username, and date) into firebase
// will need to push the image info into a larger array, which is then pushed to firebase

// display a timeline of all saved gifs from firebase:
// initialize firebase
// import the database containing image info - this will already be in a sorted array, so just need to iterate through the array in order and display it
// alternatively, can also make a sorting function to sort all objects from the database based on their date

// ******** STRETCH GOALS ********

import firebase from './firebase';
import Header from './Header';
import InputOutput from './InputOutput';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <InputOutput />
      </main>
    </div>
  );
}

export default App;
