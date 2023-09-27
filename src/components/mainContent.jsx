import GlobalParagraph from "./globalParagraph"
import DescriptionBox from "./descriptionBox"

function MainContent( ) {
    return(
        <div className="main-content">
            <div className="main-content-box">
                <DescriptionBox 
                    title="TITLE HEADING" 
                    secondTitle="Title description, Dec 7, 2020" />
                <GlobalParagraph 
                    text="Some Text..." />
                <GlobalParagraph 
                text="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
"           </div>
            <div className="main-content-box">
                <DescriptionBox 
                    title="TITLE HEADING" 
                    secondTitle="Title description, Dec 7, 2020" />
                <GlobalParagraph 
                    text="Some Text..." />
                <GlobalParagraph 
                text="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
            </div>
        </div>
    )
}

export default MainContent