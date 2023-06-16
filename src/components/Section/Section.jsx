
const Section = (props)=>{    
    return(
        <div>
            <h5>{props.tittle}</h5>
            {props.children}
        </div>                     
    )
}

export default Section;