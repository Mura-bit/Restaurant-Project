import "./headerText.style.css";

const HeaderText = ()=> {
    const students = ["Murat", "Shahzod", "Tomasz", "Alina", "Esma"];

    const getRandomNumber = ()=> {
        const myNumber = Math.floor(Math.random() * 10 + 1);

        let message;
        for(let i = myNumber; i <= 10; i++) {
  
        if(i % 2 === 0) {
            message = `${myNumber} is even number`
        } 
  
        else {
            message = `${myNumber} is odd number`
        }
        
        }
        return message;
    }

    return (
        <>
            <h1>Students List</h1>
            <ul>
                {students.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            <h4>{getRandomNumber()}</h4>
        </>
    );
};

export default HeaderText;

