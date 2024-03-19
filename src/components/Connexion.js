import './Connexion.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {AuthContext} from '../provider/UserProvider';
import { Button } from '../stories/Button';

function Connexion() {
  const {login} = useContext(AuthContext);
  let rerender = useNavigate();
  const connexionfunction = () => {
    login(User);
    rerender('/');
  }
  const onChangeInput = (e) => {
    setUser(e.target.value);
  }
  const [User, setUser]= useState(null);

  return(
    <div className="App">
      <h1> Connexion</h1>
      <div className="form">
        <input name="username" onChange={onChangeInput}/>
        <Button primary backgroundColor="#979797" label="Submit" size="small" onClick={connexionfunction}/>
      </div>
    </div>
  )
}

export default Connexion;
   
