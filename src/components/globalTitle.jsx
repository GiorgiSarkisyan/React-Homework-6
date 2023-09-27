function GlobalTitle({ title, secondTitle }) {
    return (
        <div className="global-title-box"> 
            <h2 className="global-title">
                {title}
            </h2>
            <h3 className="global-second-title">
                {secondTitle}
            </h3>
        </div>
    );
}

export default GlobalTitle;
