import style from './Button.module.css'

const Button = props => {
    return (
    <button className={style.rating}> {props.value} 
    </button>)
}

export default Button ;