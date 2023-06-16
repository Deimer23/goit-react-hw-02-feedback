

const Statistics = (props)=>{
    return(
        <div>
            <label>Good: {props.good}</label><br/>
            <label>Neutral: {props.neutral}</label><br/>
            <label>Bad: {props.bad}</label><br/>
            <label>Total: {props.total}</label><br/>
            <label>Positive feedback: {props.positivePercentage}%</label>
        </div>
    );
}

export default Statistics;