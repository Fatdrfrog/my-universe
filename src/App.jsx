import React from "react";
import "./App.css";
import Kairow from "./Kairow";

import auido from "./assets/myUniverse.mp3";

const myUniverse = new Audio(auido);

class App extends React.Component {
  state = {
    counter: 0,
    isLoading: false,
    isKairow: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ counter: 5, isLoading: false });
    }, 1000);

    setInterval(() => {
      this.setState({ isKairow: this.state.isKairow ? false : true });
    }, 3000);
  }

  componentDidUpdate() {}

  handlePlay = () => {
    if (myUniverse.paused) {
      myUniverse.play();
    }
  };

  render() {
    if (this.state.isLoading) return <>...Загружаю</>;

    return (
      <div className="App">
        {this.state.counter}
        <button onClick={this.handlePlay}>Play</button>
        {this.state.isKairow && <Kairow myUniverse={myUniverse} />}
      </div>
    );
  }
}

export default App;

// переписать App.jsx на классовый компонент.
// state counter => after 5 seconds    !5!
// до 5и секунд показать текст ...загружаю

// 1 => каждые 3 сек показывать и убирать картинку Кайрош
// 2 => "вынести" картинку в отдельный компонент

//1 => когда кнопка Play нажата 1 начать играть музыку, 2 показывать картинку
//2 => когда ещё раз нажать на кнопку, музыка должна перестать играть и картинку нужно убрать
