import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/detail">detail</Link>
            <ul></ul>
            <Link to="/movie">movie</Link>
        </div>
    )
}
export default Home