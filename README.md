# react-learning-app

  react-learning-app has the sample of react component with Material UI.

# Please find the steps followed to add Material UI with the React
	npx create-react-app react-learning-app
	npm i -D react-router-dom@latest
	npm install @loadable/component
	npm install @mui/material @emotion/react @emotion/styled
	npm install @mui/material @mui/styled-engine-sc styled-components
	npm install @mui/icons-material


  Reference : https://mui.com/material-ui/

# The steps to add the sample component mentioned below

  Add the component details in \src\MockData\componentmenulist.json
  Add the json data for the component \src\MockData
  Add router and import for the component in App.js
  	import listDataItems from './MockData/componentmenulist.json';
  	import ListComponent from './Components/ListComponent';
  	<Route path="menulist" element={<ListComponent itemData={listDataItems} />} />
  Create your component js in ./Component folder






