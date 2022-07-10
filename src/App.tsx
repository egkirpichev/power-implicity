import './App.scss';
import { Navbar } from './Components/Navbar/Navbar';
import { Slider } from './Components/Slider/Slider';

function App() {
  return (
    <div className="wrapper">
			<div className="container">
				<Navbar />
				<Slider />
			</div>
		</div>
  );
}

export {App};
