import GlobalTitle from './globalTitle';

function LinkBox() {
    return (
        <div className="global-link-box">
            <GlobalTitle title="Some Links" secondTitle="Lorem ipsum dolor sit amet" />
            <a href="#">active</a>
            <a href="#">link</a>
            <a href="#">link</a>
        </div>
    );
}

export default LinkBox;
