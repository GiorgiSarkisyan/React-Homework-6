import GlobalImage from "../globalElements/defaultImage"

import GlobalTitle from "../globalElements/globalTitle"
import DefaultImage from "../globalElements/defaultImage"

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