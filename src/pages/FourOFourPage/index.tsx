import { Link } from 'react-router-dom';

const FourOFourPage = () => {
    return (
        <div className="c-404">
            Looks like you lost your way. Return <Link to="/posts">home</Link>?
        </div>
    )
};

export default FourOFourPage;