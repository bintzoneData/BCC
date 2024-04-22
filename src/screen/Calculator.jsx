import style from './calculator.module.css';
import { Button } from 'antd';
import { InputNumber } from 'antd';
import { useEffect, useState } from 'react';
const Calculator = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    cost: 0,
    investment: 0,
    current: 0,
    profit: null,
  });
  const { cost, investment, current, profit } = formData;
  const onPurchase = (value) => {
    setFormData({ ...formData, cost: value });
  };
  const onInvestment = (value) => {
    setFormData({ ...formData, investment: value });
  };
  const onCurrent = (value) => {
    setFormData({ ...formData, current: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //
    const totalCoins = investment / cost;
    setFormData({
      ...formData,
      profit: (totalCoins * current - investment).toFixed(2),
    });
    setIsDisabled(true);
  };
  useEffect(() => {
    setFormData({ ...formData, profit: null });
  }, [current, investment, cost]);
  return (
    <div className={style.calculator}>
      <div className={style.container}>
        <form onSubmit={onSubmit} className={style.card}>
          <header className={style.header}>
            <h1 className={style.title}>crypto calculator</h1>
            {isDisabled && (
              <Button
                type='primary'
                onClick={() => {
                  setFormData({
                    cost: 0,
                    investment: 0,
                    current: 0,
                    profit: null,
                  });
                  setIsDisabled(false);
                }}
                danger
              >
                clear
              </Button>
            )}
          </header>
          <main className={style.main}>
            <section className={style.boxes}>
              <div className={style.box}>
                <label htmlFor='crypto'>Coin Purchase Price</label>
                <InputNumber
                  className={style.input}
                  onChange={onPurchase}
                  type='number'
                  required
                  value={cost === 0 ? '' : cost}
                  disabled={isDisabled}
                  step={1}
                />
              </div>
              <div className={style.box}>
                <label htmlFor='crypto'>Invested Amount</label>
                <InputNumber
                  className={style.input}
                  onChange={onInvestment}
                  type='number'
                  required
                  value={investment === 0 ? '' : investment}
                  disabled={isDisabled}
                  step={1}
                />
              </div>
            </section>
            <section className={style.boxes}>
              <div className={style.box}>
                <label htmlFor='crypto'>Coin Current Price</label>
                <InputNumber
                  type='number'
                  className={style.input}
                  onChange={onCurrent}
                  required
                  value={current === 0 ? '' : current}
                  disabled={isDisabled}
                  step={1}
                />
              </div>
              <div className={style.box}>
                <label htmlFor='crypto'>profit</label>
                <InputNumber
                  className={style.input}
                  onChange={onCurrent}
                  value={profit}
                  type='number'
                  disabled
                />
              </div>
            </section>
            <div className={style.btnBox}>
              <Button disabled={isDisabled} htmlType='submit' type='primary'>
                Calculate
              </Button>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
