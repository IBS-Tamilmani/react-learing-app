import * as React from 'react';
import  MenuListComponent from '../Components/MenuListComponent'
import listMenuDataItems from '../MockData/componentmenulist.json';

export default function MenuPage() {
  return (
    <MenuListComponent itemData={listMenuDataItems} />
  );
}
