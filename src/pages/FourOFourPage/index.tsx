import { Link } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';
import Container from '../../hoc/Container';

const FourOFourPage = () => {
    useLogger({ componentName: '404 Page' });

    return (
        <div className="c-404">
            <Container>
                Looks like you lost your way. Return <Link to="/posts">home</Link>?
            </Container>
        </div>
    )
};

export default FourOFourPage;