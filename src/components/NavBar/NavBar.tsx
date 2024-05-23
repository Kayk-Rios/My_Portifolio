import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-around'
    }))
  const handleMenuClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (

        <>

            <AppBar position="absolute">
                <StyledToobar > 
                    <MenuItem onClick={() => handleMenuClick('about')}>
                        About
                    </MenuItem>
                    <MenuItem  onClick={() => handleMenuClick('skills')}>
                        Skills
                    </MenuItem>
                    <MenuItem  onClick={() => handleMenuClick('projects')}>
                        Project
                    </MenuItem>
                </StyledToobar>


            </AppBar>
          
        </>

    )
}

export default NavBar
