import styles from '../styles/components/OrderCard.module.scss';

import  {ReactComponent as CreditCard} from '../assets/svgs/credit-cards.svg';
import {ReactComponent as Reload} from '../assets/svgs/reload.svg';
import {ReactComponent as Shipping} from '../assets/svgs/Shipping.svg';
import {ReactComponent as ChevronUp} from '../assets/svgs/chevron-up.svg';
import {ReactComponent as ChevronDown} from '../assets/svgs/chevron-down.svg';

const OrderCard = ({ children }) => {
    return <div className={styles['order-card']}>
        {children}
        <div className={styles['order-summary']}>
            <h1 className={styles['order-summary--header']}>Order summary</h1>
            <div className={styles['order-summary--steps']}>
                <button className={styles['order-summary--step']}>
                    <div className={styles['order-summary--step__icon-bg']}>
                        <Shipping className={styles['order-summary--step__icon']}/>
                    </div>
                    <div className={styles['order-summary--step__label']}>
                        <span>Step 1</span>
                        <span>Shipping</span>
                    </div>
                </button>
                <button className={styles['order-summary--step']}>
                    <div className={styles['order-summary--step__icon-bg']}>
                        <CreditCard className={styles['order-summary--step__icon']}/>
                    </div>
                    <div className={`${styles['order-summary--step__label']} ${styles['active']}`}>
                        <span>Step 2</span>
                        <span>Payment</span>
                    </div>
                </button>
                <button className={styles['order-summary--step']}>
                    <div className={styles['order-summary--step__icon-bg']}>
                        <Reload className={styles['order-summary--step__icon']}/>
                    </div>
                    <div className={styles['order-summary--step__label']}>
                        <span>Step 1</span>
                        <span>Shipping</span>
                    </div>
                </button>
            </div>

            {/* Accordions */}
            <div className={styles['accordions']}>
                {/* accordion */}
                <div className={styles['accordion']}>
                    <button  className={styles['accordion__header']}>
                        Prada
                        <ChevronUp/>
                    </button>
                    <div className={`${styles['accordion__body']} ${styles['active']}`}>
                        <div className={styles['accordion__body--item']}>
                            <p>Leather mini bag</p>
                            <span>$1850.00</span>
                        </div>
                        <div className={styles['accordion__body--item']}>
                            <p>Estimated Shipping</p>
                            <span>$370.00</span>
                        </div>
                        <div className={styles['accordion__body--item']}>
                            <p>Discount</p>
                            <span>$0.00</span>
                        </div>
                        <div className={styles['accordion__body--item']}>
                            <p>Total</p>
                            <span>$2220.00</span>
                        </div>
                    </div>
                </div>

                <div className={styles['accordion']}>
                    <button className={styles['accordion__header']}>Dr Martens
                         <ChevronDown/>
                    </button>
                    {/* <div>
                        <p>Leather mini bag</p>
                        <span>$1850.00</span>
                    </div> */}
                </div>

                <div className={styles['accordion']}>
                    <button className={styles['accordion__header']}>Chanel
                    <ChevronDown />
                    </button>
                    {/* <div>
                        <p>Leather mini bag</p>
                        <span>$1850.00</span>
                    </div> */}
                </div>
            </div>

            <div className={styles['order-summary--total']}>
                <p>Total Amount</p>
                <span>$3680.60</span>
            </div>
        </div>
    </div>
}

export default OrderCard;