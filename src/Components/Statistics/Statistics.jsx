import propTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const table = stats.map(stat => (<li className={styles.item}>
        <span className={styles.label}>{stat.label}</span>
             <span className={styles.percentage}>{ stat.percentage}%</span>
    </li>))
  return (<section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    

    <ul className={styles.statList}>
{table}
  </ul>
</section>)
}
Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percent: propTypes.string.isRequired,
  })).isRequired}


export default Statistics;


// import propTypes from "prop-types";
// import styles from "./Statistics.module.css";

// const Statistics = ({ title, stats }) => {
//   return (<section className={styles.statistics}>
//     {title && <h2 className={styles.title}>{title}</h2>}

//     <ul className={styles.statList}>
//       {stats.map(stat => (<li className={styles.item}>
//         <span className={styles.label}>{stat.label}</span>
//              <span className={styles.percentage}>{ stat.percentage}%</span>
//     </li>))}
//   </ul>
// </section>)
// }
// Statistics.propTypes = {
//   title: propTypes.string.isRequired,
//   stats: propTypes.arrayOf(propTypes.shape({
//     id: propTypes.string.isRequired,
//     label: propTypes.string.isRequired,
//     percent: propTypes.string.isRequired,
//   })).isRequired}


// export default Statistics;