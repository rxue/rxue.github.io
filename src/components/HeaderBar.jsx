import { Link } from 'react-router'

function HeaderBar({ mode }) {
    return (
        <div>
            {mode === 'html' && <a href="/cv.pdf" className="download-link" download>Download PDF</a>}
            <div className="language-links">
                <Link to="#/fi">suomeksi</Link>
                {' | '}
                <Link to="#/">in English</Link>
            </div>
        </div>
    );
}

export default HeaderBar