function Test(value) {
    const handleInput = (e) =>{
        console.log(e.target.value);
    }
  return (
      <div>
          <h3>{value.value}</h3>
          <div>
              <button className="btn btn-primary w-25" value="oui" onClick={(e) => handleInput(e, 'value')}>Oui</button>
              <button className="btn btn-primary w-25" value="non" onClick={(e) => handleInput(e, 'value')}>Non</button>
          </div>
      </div>
  );
}
export default Test;
