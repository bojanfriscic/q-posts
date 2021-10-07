import { Link } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';

const FourOFourPage = () => {
    useLogger({ componentName: '404 Page' });

    return (
        <div className="c-404">
            Looks like you lost your way. Return <Link to="/posts">home</Link>?
        </div>
    )
};

export default FourOFourPage;