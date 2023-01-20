import PropTypes from 'prop-types';
import { Table , Head , Cell } from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    const elements = items.map(({id, type, amount, currency}) => {
        return (
            <tr key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
        </tr>

        )});


    return (
        <Table>
            <Head>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Head>
            <tbody>
                {elements}
            </tbody>
        </Table>
    )
}

TransactionHistory.defaultProps = {
    items: {},
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}