function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]       = React.useState('');
    const ctx = React.useContext(UserContext);  
  
    function validate(num){
        if (typeof num !== "number") {
          setStatus('Error: Please enter a number');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleWithdraw(){
      console.log(withdraw);
      if (!validate(withdraw, 'withdraw'))   
       return;
      ctx.users.push({withdraw});
      setShow(false);
    }    
  
    function clearForm(){
      setWithdraw('');
      setShow(true);
    }
    
    
    return (
      <Card
        bgcolor="success"
        header="Withdraw"
        status={status}
        body={show ? (  
                <>
                Withdrawl Amount<br/>
                <input type="input" className="form-control" id="withdraw" placeholder="Withdrawl Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
              ):(
                <>
                <h5>Successful Transaction</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}></button>
                </>
              )}
      />
    )
  }
  