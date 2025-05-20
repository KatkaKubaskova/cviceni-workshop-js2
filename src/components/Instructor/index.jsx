import './index.css'

export const Instructor = (props) => {
    return (
        <div className='instructor'>
            <p className='instructor__title'>Lektorka:</p> 
            <p className='instructor__name'>{props.name} - {props.profession} </p>
            <p>{props.bio} </p>
        </div>
    )
}