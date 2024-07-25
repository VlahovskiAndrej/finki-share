import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';

const SidebarSubjects = ({onPeriodClick, onTermClick}) => {

    const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    const handlePeriod = (periodType) => {
        onPeriodClick(periodType);
    }

    const handleTerm = (termType) => {
        onTermClick(termType);
    }

    return (
        <Sidebar>
            <Menu style={{backgroundColor: '#CDC1B6', minHeight:"100vh"}}>
                <SubMenu label="Период">
                    <MenuItem onClick={() => handlePeriod("зимски")}
                              style={{backgroundColor: '#CDC1B6'}}> Зимски </MenuItem>
                    <MenuItem onClick={() => handlePeriod("летен")}
                              style={{backgroundColor: '#CDC1B6'}}> Летен </MenuItem>
                </SubMenu>
                <SubMenu label="Семестар">
                    {semesters.map((semester => (
                        <MenuItem style={{backgroundColor: '#CDC1B6'}} key={semester}
                                  onClick={() => handleTerm(semester)}>{semester} Семестар</MenuItem>
                    )))}

                </SubMenu>
            </Menu>
        </Sidebar>
    );
}

export default SidebarSubjects;