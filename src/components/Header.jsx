import logo from './assets/investment-calculator-logo.png'


export function Header(){\
    return(
    <header>
        <img src={logo} alt='logo'/>
        <h1>Investment calculator</h1>
    </header>
    )
}