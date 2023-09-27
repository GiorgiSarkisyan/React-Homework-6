import DescriptionBox from "./descriptionBox"
import GlobalParagraph from "../globalElements/globalParagraph"
import LinkBox from "./linksSide"

function AboutMe() {
    return(
        <div className="about-me-container">
            <DescriptionBox 
                title="About Me" 
                secondTitle="Photo of me:" />
            <GlobalParagraph 
                text="Some text about me in culpa qui officia deserunt mollit anim.." />
            <LinkBox />
        </div>
    )
}

export default AboutMe