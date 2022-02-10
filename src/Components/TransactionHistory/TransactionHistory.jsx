import propTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const table = items.map(item => ( 
    <tr>
      <td className={styles.row}>{ item.type}</td>
      <td className={styles.row}>{ item.amount}</td>
      <td className={styles.row}>{item.currency }</td>
    </tr>
  ))
  return (
        <table className={styles.transactionHistory}>
     <thead className={styles.head}>
    <tr>
             <th>Type</th>
             <th>Amount</th>
             <th>Currency</th>
    </tr>
      </thead>
       <tbody>
          {table}
  </tbody>
</table>)
}

TransactionHistory.defaultProps = {
    items: []
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}

export default TransactionHistory;




