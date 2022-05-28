import logo from '../logo.svg';
import './LandingPage.css';
import ListDividers from '../Components/ListComponent'
import ComponentList from '../MockData/componentlist.json'


function LandingPage() {
  return (
    <ListDividers itemData={ComponentList}/>
  );
}

export default LandingPage;
