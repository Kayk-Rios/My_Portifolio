import NavBar from "../../components/NavBar/NavBar"
import About from "./Section/About/About"
import Hero from "./Section/Hero/Hero"
import Projects from "./Section/Projects/Projects"
import { Skills } from "./Section/Skills/Skills"


const Home = ( ) => {


    return (

        <>
            <NavBar />
            <Hero />
            <About />
            <Skills/>
           <Projects/>
           
        </>

    )
}

export default Home
