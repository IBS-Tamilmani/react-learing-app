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
	Create new page for your component in ./Pages (Ex :'./MockData/Menu.page')
	If you have the mock date add it in ./MockData (Ex :'./MockData/componentmenulist.json')
 	Create the component and map with the page in ./Components (Ex: './Components/MenuListComponent')
	Add router page in the router App.js
	Add your component with menu by adding
  		{
        	"name": "Menu",
        	"icon": "@mui/icons-material/Delete",
        	"component": "MenuPage",
        	"path": "/menulist"
      	}
Note : Need to execute all the comments which added above and replace the files






