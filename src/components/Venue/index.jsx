import './index.css'

export const Venue = (props) => {
    return (
        <div className='venue'>
            <p className='venue__title'>Místo konání:</p>
            <p className='venue__name'>{props.name} {props.city}, {props.street}</p>
            <p>{props.instructions}</p>    
        </div>
    )
} 