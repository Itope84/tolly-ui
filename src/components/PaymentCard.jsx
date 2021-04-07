import styles from '../styles/components/PaymentCard.module.scss';
import { ReactComponent as ChevronDown } from '../assets/svgs/chevron-down.svg';
import { ReactComponent as LockIcon } from '../assets/svgs/lock-alt.svg';
import { ReactComponent as Mastercard } from '../assets/svgs/mastercard.svg';
import { ReactComponent as Visa } from '../assets/svgs/visa.svg';
import { ReactComponent as PlusIcon } from '../assets/svgs/plus.svg';
import {ReactComponent as CheckIcon} from '../assets/svgs/checkmark.svg';
import MastercardLogo from '../assets/img/mastercard.png'


const PaymentCard = () => {
    return <div className={styles['payment-card']}>
        <div  className={styles['payment-card--header']}>
            <div  className={styles['payment-card--header__logo']}>Tolly</div>
             
            <div className={styles['payment-card--header__user']}>
                <ChevronDown/>
                Annette
                <img src="https://picsum.photos/300/300.jpg" alt="User icon"/>
            </div>
        </div>
        <div className={styles['payment-card--body']}>
            <div className={styles['payment-card--body__header']}>
                <h1>Payment details</h1>

                <div className={styles['payment-card--body__header--secure']}>
                    <LockIcon />
                    <div>
                        <h5 className={styles['payment-card--body__header--secure__header']}>Card is secure</h5>
                        <p>Your data is protected. Everything will be private.</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className={styles['payment-card--body--tabs__wrapper']}>
                <div className={styles['payment-card--body--tabs']}>
                    <div className={`${styles['payment-card--body--tab']} ${styles['active']}`}>Credit Card</div>
                    <div className={styles['payment-card--body--tab']}>Paypal</div>
                    <div className={styles['payment-card--body--tab']}>Other</div>
                </div>
            </div>

            {/* Tab body */}
            <div className={styles['payment-card--body--content']}>
                <div className={styles['cards']}>
                    <div className={`${styles['card']} ${styles['mastercard']}`}>
                        <span className={styles['card--number']}>**** 4232</span>
                        <div className={styles['card--logo']}>
                            <Mastercard/>
                        </div>
                    </div>
                    <div className={`${styles['card']} ${styles['visa']}`}>
                        <span className={styles['card--number']}>**** 5442</span>
                        <div className={styles['card--logo']}>
                            <Visa/>
                        </div>
                    </div>
                    <div className={`${styles['card']} ${styles['new']}`}>
                        <span className={styles['selected-indicator']}>
                            <CheckIcon/>
                        </span>

                        <span className={styles['card--add-new']}>Add new
                         <span className={styles['card--add-new-icon']}>
                            <PlusIcon />
                         </span>
                        </span>
                    </div>
                </div>

                <div className={styles['form']}>
                    <div className={styles['form--field']}>
                        <label>Credit card</label>
                        
                        <div className={styles['form--field--input']}>
                            <input readOnly type="text" value="4441 2354 3266 5655" />
                            <img src={MastercardLogo} className={styles['form--field--input__suffix']} alt="Mastercard logo"/>
                        </div>
                    </div>


                    <div className={styles['form--field']}>
                        <label>Name</label>
                        {/* set to readonly for demo purposes */}
                        <div className={styles['form--field--input']}>
                            <input type="text" value="Annette Murphy" />
                            
                        </div>
                    </div>

                    <div className={styles['form--row']}>
                        <div className={styles['form--field']}>
                            <label>Expiration date</label>
                            {/* set to readonly for demo purposes */}
                            <div className={styles['form--field--input']}>
                                <input type="text" value="08 / 2021" />
                            </div>
                        </div>

                        <div className={styles['form--field']}>
                            <label>CVV</label>
                            {/* set to readonly for demo purposes */}
                            <div className={styles['form--field--input']}>
                                <input type="text" value="407" />
                            </div>
                        </div>
                    </div>

                    <div className={styles['form--row']}>
                        <button className={styles['form--submit']} >Confirm Order</button>

                        <button className={styles['form--cancel']} >Cancel and Return</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PaymentCard;