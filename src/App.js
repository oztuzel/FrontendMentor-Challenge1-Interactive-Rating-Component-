import React, {Fragment , useState} from 'react' ;
import star from '../src/images/icon-star.svg';
import '../src/index.css';
import phone from "./images/illustration-thank-you.svg";

import Button from '../src/components/Button';

function App() {
  const [selected, setSelected] = useState();
  const [thx, setThx]= useState(false);
  

  const submitHandler = () => {
setThx(true);
  }

  return (
    <Fragment>
      {thx ===false ? 
      <div className="wrapper">
      <div className='star'>
        <img src={star} alt='' />
      </div>
      <h1 className='title'>How did we do?</h1>
      <p className='text'>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
      
      <div className='ratingDiv'>
        <Button onClick={() => {
          setSelected(1); 
          
          }} 
          value ={1} />
        <Button onClick={() => {
          setSelected(2);
          }} 
          value ={2} />
        <Button onClick={() => {
          setSelected(3); 
          }} 
          value ={3} />
        <Button onClick={() => {
          setSelected(4); 
          }} 
          value ={4} />
        <Button onClick={() => {
          setSelected(5); 
          }} 
          value ={5} />
      </div>
      
      <div >
      <button onClick={submitHandler} className='submit-button' text='Submit'>Submit </button>
      </div>
      
    </div>
    :
    <div className='thank-you'>
      <img src={phone} alt='phone' />
      <p className='you-selected'> 
      You selected {selected} out of 5
      </p>
      <p className='thanks' > Thank you!</p>
      <p> We appreciate you taking the time to give a rating.If you ever
          need more support dont hesitate to get in touch!
      </p>
    </div>
}
  
    </Fragment>
  );
}

export default App;
