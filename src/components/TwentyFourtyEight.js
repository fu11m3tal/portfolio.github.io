import React from 'react';
import '../css/TwentyFourtyEight.css';


class TwentyFourtyEight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      rows: [0,1],
      columns: [0,1,2,3],
      spaces: 16,
      score: 0,
      initiated: false
    }
    this.handleLeftSelect = this.handleLeftSelect.bind(this);
    this.handleRightSelect = this.handleRightSelect.bind(this);
    this.handleUpSelect = this.handleUpSelect.bind(this);
    this.handleDownSelect = this.handleDownSelect.bind(this);
    this.traverseMatrixVertical = this.traverseMatrixVertical.bind(this);
    this.traverseMatrixHorizontal = this.traverseMatrixHorizontal.bind(this);
    this.addNewSquare = this.addNewSquare.bind(this);
    this.getMovesLeftCount = this.getMovesLeftCount.bind(this);
    this.checkKeyPress = this.checkKeyPress.bind(this);
    this.initiateNewGame = this.initiateNewGame.bind(this);
  }

  initiateNewGame() {
    var {initiated} = this.state;
    if(initiated) {
      if(window.confirm("are you sure?")) {
        this.setState({
          matrix: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
          rows: [0,1],
          columns: [0,1,2,3],
          spaces: 16,
          score: 0,
          initiated: false
        })
        
      }
    } else {
      this.addNewSquare();
      this.setState({initiated: true});
    }
  }

  getMovesLeftCount() {
    var {matrix, score} = this.state;
    var spaces = [...matrix[0], ...matrix[1], ...matrix[2], ...matrix[3]]
    var spacesLeft = spaces.filter((value) => (value === 0));
    if(spacesLeft.length === -1) alert("game over")
    this.setState({spaces: spacesLeft.length, score: score+1})
  }

  traverseMatrixHorizontal(direction) {
    var {matrix} = this.state;
    for(var i = 0; i < 4; i++) {
      var occupied = [];
      var remainder = [];
      var empty = [];
      for(var j = 0; j < 4; j++) {
        matrix[i][j] === 0 ? empty.push(matrix[i][j]) : occupied.push(matrix[i][j])
      }
      var row = [];
      while(occupied.length > 0) {
        var value = occupied.shift();
        if(occupied[0] === value) {
          occupied.shift();
          remainder.push(value * 2)
          empty.push(0);
        } else {
          remainder.push(value);
        }
      }
      if(direction === "right") row = [...empty, ...remainder];
      if(direction === "left") row = [...remainder, ...empty]
      for(var k = 0; k < 4; k++) {
        matrix[i][k] = row[k]
      }
    }
    this.setState({matrix})
  }

  traverseMatrixVertical(direction) {
    var {matrix} = this.state;
    for(var i = 0; i < 4; i++) {
      var occupied = [];
      var empty = [];
      var remainder = [];
      for(var j = 0; j < 4; j++) {
        matrix[j][i] === 0 ? empty.push(matrix[j][i]) : occupied.push(matrix[j][i])
      }
      while(occupied.length > 0) {
        var value = occupied.shift();
        if(occupied[0] === value) {
          occupied.shift();
          remainder.push(value * 2)
          empty.push(0);
        } else {
          remainder.push(value);
        }
      }
      var column = [];
      if(direction === "down") column = [...empty, ...remainder];
      if(direction === "up") column = [...remainder, ...empty]
      for(var k = 0; k < 4; k++) {
        matrix[k][i] = column[k]
      }
    }
    this.setState({matrix})
  }

  addNewSquare() {
    var {matrix} = this.state;
    var moveLeft = false;
    matrix.forEach(row => {
      if(row.includes(0)) moveLeft = true;
    })
    if(!moveLeft) return "no moves left"
    var getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }
    var getRandomSquare = () => {
      var row = getRandomNumber(0,4);
      var column = getRandomNumber(0,4)
      return [row, column];
    }
    var squareCoordinates = getRandomSquare();
    if(matrix[squareCoordinates[0]][squareCoordinates[1]] === 0) {
      matrix[squareCoordinates[0]][squareCoordinates[1]] = 2;
      this.setState({matrix})
    } else {
      this.addNewSquare();
    }
  }


  handleLeftSelect() {
    this.traverseMatrixHorizontal("left")
    this.addNewSquare();
    this.getMovesLeftCount();
  }
  handleRightSelect() {
    this.traverseMatrixHorizontal("right");
    this.addNewSquare();
    this.getMovesLeftCount();
  }
  handleUpSelect() {
    this.traverseMatrixVertical("up");
    this.addNewSquare();
    this.getMovesLeftCount();
  }
  handleDownSelect() {
    this.traverseMatrixVertical("down");
    this.addNewSquare();
    this.getMovesLeftCount();
  }
  checkKeyPress(key) {
    console.log(key)
    var left = {
      keyCode: 37,
      handleDirectionSelection: this.handleLeftSelect
    }
    var right = {
      keyCode: 39,
      handleDirectionSelection: this.handleRightSelect
    }
    var up = {
      keyCode: 38,
      handleDirectionSelection: this.handleUpSelect
    }
    var down = {
      keyCode: 40,
      handleDirectionSelection: this.handleDownSelect
    }
    var controls = [left, right, up, down];
    controls.forEach(direction => {
      if(direction.keyCode === key.keyCode) direction.handleDirectionSelection();
    })
  }

  componentDidMount() {
    window.addEventListener("keydown", this.checkKeyPress, false);
  }

  render() {
    const {matrix} = this.state;
    return (
      <div className="app">
        <h3>2048</h3>
        <div className="board">
          {matrix.map((row, rIndex) => (
            <div key={rIndex} className="row" id={`row-${rIndex+1}`}>
              {row.map((box, bIndex) => (
                <div key={bIndex} className={box !== 0 ? "open" : "closed"} id={`box-${box}`}>
                  <p className="box">{box !== 0 ? box : null}</p>
                </div>
              ))}
            </div>
          ))}
          <div className="dashboard">
            <span/>
            <div className="score">
              SCORE: {`${this.state.score}`}
            </div>
            <span/>
          </div>
          <div className="controller">
            <div className="buttons">
              <span/>
              <span/>
              <span/>
              <button 
                  className="button" 
                  id="up"
                  onClick={this.handleUpSelect}
                >
                  <p className="arrow">&uarr;</p>
              </button>
              <span/>
              <span/>
              <span/>
            </div>
            <div className="buttons">
              <span/>
              <span/>
              <button 
                className="button" 
                id="left"
                onClick={this.handleLeftSelect}
                onKeyPress={() => {console.log("key press")}}
              >
                <p className="arrow">&larr;</p>
              </button>
              <span/>
              <button 
                className="button" 
                id="right"
                onClick={this.handleRightSelect}
              >
                <p className="arrow">&rarr;</p>
              </button>
              <span/>
              <span/>
            </div>
            <div className="buttons">
              <span/>
              <span/>
              <span/>
              <button 
                  className="button" 
                  id="down"
                  onClick={this.handleDownSelect}
                >
                  <p className="arrow">&darr;</p>
              </button>
              <span/>
              <span/>
              <span/>
            </div>
            <div className="buttons">
              <span/>
              <button 
                  className="button"
                  id="restart"
                  onClick={this.initiateNewGame}
                >
                  {this.state.initiated ? "Restart" : "Play"}
              </button>
              <span/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TwentyFourtyEight;
