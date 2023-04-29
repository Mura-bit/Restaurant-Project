import HeaderText from "./components/headerText/HeaderText.jsx";
import GeneralText from "./components/generalText/GeneralText.jsx";
import InputField from "./components/inputField/InputField.jsx";
import './App.css';

function App() {
  const schoolName = "React App";
  let age =18;

  return (
    <>
      <HeaderText />

      <GeneralText />

      <InputField />
    </>
  );
}

export default App;
