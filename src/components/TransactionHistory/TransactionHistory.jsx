import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
       <table className={css.table}>
  <thead>
    <tr className={css.th}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map((item)=> {
           return (<tr className={css.td} key={item.id}>
      <td className={css.firstColumn}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)         
      })}          
            </tbody>
            


</table>
   ) 
}