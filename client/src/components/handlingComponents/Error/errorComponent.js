import './errorComponent.css';

export const ErrorComponent = (props) => {
    return(
        <div className="error-container">
            <p>{props.message ? props.message : "Something happened"}</p>
            <button onClick={()=>props.logout()}>Return</button>
        </div>
    )
}