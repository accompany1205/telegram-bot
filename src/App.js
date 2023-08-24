import logo from './logo.svg';
import './App.css';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';

function App() {
  return (
    <div className="App">
      <TLoginButton
        botName="samplebot"
        buttonSize={TLoginButtonSize.Large}
        lang="en"
        usePic={false}
        cornerRadius={20}
        onAuthCallback={(user) => {
          console.log('Hello, user!', user);
        }}
        requestAccess={'write'}
      />
    </div>
  );
}

export default App;
