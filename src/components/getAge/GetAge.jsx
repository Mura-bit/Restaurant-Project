import "./getAge.style.css";

const GetAge = ()=> {
    let birthYear = prompt("Please type date of birth");
    const currentYear = 2023;
    const getAge = currentYear - parseInt(birthYear);
    return (
        <h1>You are {getAge}</h1>
    );
}


export default GetAge;