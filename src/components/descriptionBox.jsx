import GlobalImage from "./defaultImage"

import GlobalTitle from "./globalTitle"
import DefaultImage from "./defaultImage"

function DescriptionBox({title, secondTitle}) {
return(
    <div className="about-me-top-side">
        <GlobalTitle 
            title={title} 
            secondTitle={secondTitle} />
        <DefaultImage />
    </div>)
}

export default DescriptionBox