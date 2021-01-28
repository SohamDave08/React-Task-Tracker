import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>This is a Task Tracker coded along with the React Crash Course 2021 by <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" style={{color: "red", textDecoration: "none"}}><b>Traversy Media</b></a></h4>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About
