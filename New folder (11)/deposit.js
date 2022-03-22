function Deposit(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState(0);
    let balance = React.useState(0);  
    const ctx = React.useContext(UserContext);  
  
  
    function validate(num){
        if (isNaN(parseFloat(num))) {
          setStatus('Warning: Please enter a number');
          return false;
        }
        return true;
    }
  
    function handleDeposit(){
      console.log(deposit);
      if (!validate(deposit))   
       return;
       balance =+ deposit;
      setDeposit(balance)
    }   
  
    const handleSubmit = (event) => {
       balance =+ deposit;
      setDeposit(balance)
      event.preventDefault();
      alert("Success");
    };
  
    function clearForm(){
      setDeposit('');
      setShow(true);
    }
    
    
    return (
      <Card
        bgcolor="success"
        header="Deposit"
        status={status}
        body={show ? (  
                <>
                Account Balance: ${balance}
                <label readOnly={false} onChange={e => setBalance()}> </label> <br/><br/>
                <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={handleSubmit}></button>
                </> 
              )}
      />
    )
  }
  
  