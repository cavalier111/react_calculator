import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
"use strict";



//You need this npm package to do createReactClass

class Square extends React.Component {

  render() {

    return (

      <button className="btn btn-primary custom"  onClick={this.props.onClick}>{this.props.value} </button>

    );

  }

}

 

class Board extends React.Component {

    constructor(props) {

    super(props);

    this.state = {

      curr:""

    };

  }

         

 handleClick(i) {

		if(i == 'C'){

	      const newCurr = "";

	      this.setState({curr: newCurr});

	    }


	   else if (i=='='){
	   		try{
	      		const newCurr = eval(this.state.curr);
	     		this.setState({curr: newCurr});
	 		}

	 		catch(e){
	 			this.setState({curr: this.state.curr});
	 		}

	   	}


	   	else if (i=='%'){
	   		try{
	      		const newCurr = eval(this.state.curr) / 100;
	     		this.setState({curr: newCurr});
	 		}

	 		catch(e){
	 			this.setState({curr: this.state.curr});
	 		}
	 	}


	 	else if (i=='+-'){
	 		if (this.state.curr.length != 0) {

	   		try{
	   			var sign  = this.state.curr.substring(0,1)
	   			if(sign == '-'){
	   				this.setState({curr: this.state.curr.substring(1,)});
	   			}
	   			else{
	   				const newCurr = "-" + this.state.curr;
	   				this.setState({curr: newCurr});
	   			}
	      	}

	 		catch(e){
	 			this.setState({curr: this.state.curr});
	 		}
	 		
	 	}

	   	}
	   
	  /*  condition zeros so that there are no leading zeros (considered octal numbers)*/

	   else if ( (i!='0') || (this.state.curr.length != 0)){
	    	const newCurr = this.state.curr + i.toString() ;
	     	this.setState({curr: newCurr});
	   }
  }

  renderSquare(i) {

    return (<Square value = {i}

              onClick={() => this.handleClick(i)}

              />);

  }

 

  render() {

    const status = this.state.curr;
 	
    return (

    <div className="calc">


      <div>

        <div className="status"> {status}</div>

        <div className="board-row">

          {this.renderSquare(0)}

          {this.renderSquare(1)}

          {this.renderSquare(2)}

        </div>

        <div className="board-row">

          {this.renderSquare(3)}

          {this.renderSquare(4)}

          {this.renderSquare(5)}

        </div>

        <div className="board-row">

          {this.renderSquare(6)}

          {this.renderSquare(7)}

          {this.renderSquare(8)}

        </div>

        <div className="board-row">

          {this.renderSquare("+")}

          {this.renderSquare("-")}

          {this.renderSquare("=")}

        </div>

        <div className="board-row">

          {this.renderSquare("*")}

          {this.renderSquare("/")}

          {this.renderSquare("C")}


        </div>
        <div className="board-row">

        	{this.renderSquare(".")}
        	{this.renderSquare("%")}
        	{this.renderSquare("+-")}
		</div>
      </div>
      </div>

    

    );

  }

}

 



 


 

ReactDOM.render(



  <Board />

 ,

  document.getElementById('root')

);