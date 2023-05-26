import './Button.css'

const Button = ({ symbol, color, handleClick }) => {
    return ( <
        div onClick = {
            () => handleClick(symbol) }
        className = 'ButtonWrapper'
        style = {
            { backgroundColor: color }
        } > { symbol } <
        /div>
    )
}

export default Button;