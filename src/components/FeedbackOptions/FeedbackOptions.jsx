import s from "./FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
    return(
        <div>
            <button className={s.buttons} onClick={props.onLeaveFeedback}>Good</button>
            <button className={s.buttons} onClick={props.onLeaveFeedback}>Neutral</button>
            <button className={s.buttons} onClick={props.onLeaveFeedback}>Bad</button>
        </div>
    );
};

export default FeedbackOptions;