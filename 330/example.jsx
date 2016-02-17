/* THE MODEL */
var game = new TicTacToeGame();

/* THE VIEW */
var Component = React.createClass({
    
    handleClick: function() {        
        controller.handleClick(this.props.id);
    }

    render: function() {
        return <button onClick={this.handleClick}>{game.getMove()}</button>
    }
});

var Container = React.createClass({
   render: function() {
       return (
           <Component id={1} />
           <Component id={2} />
           <Component id={3} />
       )
   }
    
});


/* THE CONTROLLER */
var controller = {
    handleClick:function(clickedId) {
        console.log("You clicked me!");
        game.makeMove(clickedId); //this changes the model
        ReactDOM.render(<Component id={3} />, document.getELeentById(stuff));                
    }    
}