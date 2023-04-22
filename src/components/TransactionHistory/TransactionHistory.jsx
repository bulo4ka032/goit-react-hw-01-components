import PropTypes from 'prop-types';
import { Table, TableHead, TableHeader, TableBody, TableBodyEL, TableRow} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </TableHead>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id} prop={type}>
              <TableBodyEL>{type}</TableBodyEL>
              <TableBodyEL>{amount}</TableBodyEL>
              <TableBodyEL>{currency}</TableBodyEL>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};


TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
}