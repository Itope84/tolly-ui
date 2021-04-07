import styles from './styles/components/App.module.scss';
import OrderCard from './components/OrderCard';
import PaymentCard from './components/PaymentCard';

function App() {
  return (
    <div className={styles.App}>
      <OrderCard>
        <PaymentCard/>
      </OrderCard>
    </div>
  );
}

export default App;
