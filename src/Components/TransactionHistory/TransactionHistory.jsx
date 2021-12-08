import propTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
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
{items.map(item => ( 
    <tr>
      <td className={styles.row}>{ item.type}</td>
      <td className={styles.row}>{ item.amount}</td>
      <td className={styles.row}>{item.currency }</td>
    </tr>
  ))}
  </tbody>

</table>)
}
TransactionHistory.propTypes = {
    type: propTypes.string,
    amount: propTypes.number,
    currency: propTypes.string,
  }

export default TransactionHistory;





