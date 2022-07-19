import './errorComponent.css';

export const ErrorComponent = (props) => {
    return(
        <div className="error-container">
            <p>Something happened</p>
            <button onClick={()=>props.logout()}>Return</button>
        </div>
    )
}