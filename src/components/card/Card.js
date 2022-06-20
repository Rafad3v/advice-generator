import React from 'react';
import IconDice from '../../assets/svg icons/IconDice';
import Loading from '../../assets/svg icons/Loading';
import PatternDividerMobile from '../../assets/svg icons/PatternDividerMobile';
import PatternDividerDesktop from '../../assets/svg icons/PatternDividerDesktop';
import './Card.css';

function Card() {

  const url = 'https://api.adviceslip.com/advice';
  const [advice, setAdvice] = React.useState(null);


  React.useEffect(() => {
    async function initialAdvice() {

      let result = await fetch(`${url}`);
      let {slip} = await result.json();
  
      setAdvice({ adviceNumber: slip.id, adviceReturn: slip.advice })
    }

    initialAdvice();
  }, [])


  async function newAdvice() {

    let result = await fetch(`${url}`);
    let {slip} = await result.json();

    setAdvice({ adviceNumber: slip.id, adviceReturn: slip.advice })
  }

  
  return (
    <>
      {
        (advice) ?

          <div className='card-container'>
            <span className='advice-number'>
              {(advice) && `ADVICE #${advice.adviceNumber}`}
            </span>
            <q className='advice-text'>
              {(advice) && advice.adviceReturn}
            </q>
            <PatternDividerMobile />
            <PatternDividerDesktop />
            <button className='next-button' onClick={newAdvice}>
            <IconDice />
            </button>
          </div>

        :

          <Loading />
      }
    </>
    
  )
}

export default Card