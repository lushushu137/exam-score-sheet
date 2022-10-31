# Exam Score Sheet
## 🪄 How to start
1. It is deployed on Github Page: https://lushushu137.github.io/exam-score-sheet. Click to see.
2. Or, download the repository, run the following code.

```
npm install
npm run start
```
## 🌟 Features
- Basic data fetching (mock) and displaying ✔
  - I mocked the http request by ```Promise + setTimeout```.
  - I used ```sessionStorage``` to store data.
- Creating, deleting, filtering data records ✔
  - All data manipulation are in the mock backend. I implemented creating, deleting, and filtering the data in the ```api.js``` file. 
  - The table doesn't maintain any filter state. It is only responsible for displaying data.  
- Responsive on mobile device ✔
  - I took use of the default breakpoints defined by Material UI. I used two of them, which are ```xs``` and ```sm```. One for mobile devices, one for PC. 

## 🫡 Built with
- create-react-app
  - Since there is no backend server for this project, the client side rendering is enough.
- Material UI
  - I used components from Material to make it good-looking.
- Formik & Yup
  - I used Formik and Yup to handle form state and validation.
- material-table
  - I chose this package to enhance the default Table component of Material. It has good support for inline actions and localization (Although I haven't done localization). 
- uuid
  - I used this tool to generate unique ID for each data record.
## 🤔 Have to admit
- Tried best to make UI good-looking
- Need more time to localize
- No time for unit test
