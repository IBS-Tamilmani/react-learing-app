import * as React from 'react';
import  ListComponent from '../Components/ListComponent'
import listDataItems from '../MockData/componentlist.json';

export default function MenuPage() {
  return (
    <ListComponent itemData={listDataItems} />
  );
}
