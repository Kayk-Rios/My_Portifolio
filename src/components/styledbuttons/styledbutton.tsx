import { styled } from "@mui/material"
import { ReactNode } from "react"

interface Styledbutton {
    children: ReactNode
}

const Styledbutton: React.FC<Styledbutton>  = ({children}) => {


    const Styledbutton = styled("button")(({theme}) => ({
      backgroundColor: 'transparent',
      borderRadius: '3px',
      border: `1px solid  ${theme.palette.primary.contrastText}`,
      padding: '4px 20px ',
      width: '100%',
      alignItems:'center',
      justifyContent:'center',
      display:'inline-flex',
    gap:'10px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      }
    }))

    return (

        <>
    
    <Styledbutton>{children} </Styledbutton>

        </>

    )
}

export default Styledbutton
