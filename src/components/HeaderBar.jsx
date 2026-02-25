function HeaderBar({ mode }) {
    return (
        <div>
            {mode === 'html' && <a href="/cv.pdf" className="download-link" download>Download PDF</a>}
            <div className="language-links">
                <a href="/fi">suomeksi</a>
                {' | '}
                <a href="/">in English</a>
            </div>
        </div>
    );
}

export default HeaderBar