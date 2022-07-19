import { Oval } from  'react-loader-spinner'

export const LoadingComponent = () => {
    return(
        <div className="error-container">
            <div className="loading-spin"><Oval
                height="200"
                width="200"
                color='blue'
                ariaLabel='loading'
            /></div>
            
        </div>
    )
}