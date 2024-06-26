import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ input }){
    const results = calculateInvestmentResults(input)
    const initialInvestment = 
    results[0].valueEndOfYear - 
    results[0].annualInvestment - 
    results[0].interest;
    return(
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
        <tbody>
        {results.map(yearData => {
            const totalInterest = yearData.valueEndOfYear-
            yearData.annualInvestment*yearData.year - initialInvestment;
            const collectiveInvestment = yearData.valueEndOfYear-totalInterest ;
            return(
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(collectiveInvestment)}</td>
                </tr>
            )
})}
        </tbody>
        </table>
    )
}