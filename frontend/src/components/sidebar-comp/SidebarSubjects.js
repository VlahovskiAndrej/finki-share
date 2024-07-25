import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';

const SidebarSubjects = ({onSemesterClick, onAcademicYearClick}) => {

    const academicYear = [1, 2, 3, 4];
    const semesters = ["Зимски", "Летен"]

    return (
        <Sidebar>
            <Menu style={{backgroundColor: '#CDC1B6', height:"100%"}}>
                <SubMenu label="Семестар">
                    {semesters.map((semester => (
                        <MenuItem style={{backgroundColor: '#CDC1B6'}} key={semester}
                                  onClick={() => onSemesterClick(semester)}>{semester}</MenuItem>
                    )))}
                </SubMenu>
                <SubMenu label="Академска година">
                    {academicYear.map((year => (
                        <MenuItem style={{backgroundColor: '#CDC1B6'}} key={year}
                                  onClick={() => onAcademicYearClick(year)}>{year} година</MenuItem>
                    )))}

                </SubMenu>
            </Menu>
        </Sidebar>
    );
}

export default SidebarSubjects;