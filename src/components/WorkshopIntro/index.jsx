import './index.css'

export const WorkshopIntro = (props) => {
    const formatDate = (apiDate) => {
        const date = new Date(apiDate)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${day}. ${month}. ${year}`
    }

    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <div className='date'>
                <p>{formatDate(props.date)}, {props.startTime}</p>
                <p>{props.name}, {props.city}</p> 
            </div>
            <p className='intro'>{props.intro}</p>
        </header>)
}