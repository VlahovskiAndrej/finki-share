import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function SidebarComp({onPeriodClick, onTermClick}) {

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  
  function handlePeriod (periodType){
   onPeriodClick(periodType);
  }

  function handleTerm(termType){
    onTermClick(termType);
  }

  return (
    <Sidebar  >
      <Menu  style={{backgroundColor: '#CDC1B6', minHeight: '630px'}}> 
        <SubMenu label="Период"  >
          <MenuItem onClick={() => handlePeriod("зимски")}  style={{backgroundColor: '#CDC1B6'}}> Зимски </MenuItem>
          <MenuItem onClick={() => handlePeriod("летен")}  style={{backgroundColor: '#CDC1B6'}}> Летен </MenuItem>
        </SubMenu>
        <SubMenu label="Семестар">
          {semesters.map((semester => (
            <MenuItem style={{backgroundColor: '#CDC1B6'}} key={semester} onClick={() => handleTerm(semester)}>{semester}  Семестар</MenuItem>
          )))}

        </SubMenu>
      </Menu>
    </Sidebar>
  );
}