/** MODEL **/
var game = new TTTGame();


/** VIEW **/
var Component = React.createClass({

    handleClick: function() {
        //clicked
        this.prop.controller.handleClick(this.props.id);
    }

    render: function() {
        return <button onClick={this.handleClick}>Click me!</button>
    }
    
})

var Container = React.createClass({
   render: function() {
       return (
           <div>
            <Component id={1} ctrl={this.prop.controller} />
            <Component id={2} ctrl={this.prop.controller} />
            <Component id={3} ctrl={this.prop.controller} />
           </div>
       )
   }
    
});


ReactDOM.render(<Container controller={controller} />, document.stuff)
//controller.handleClick();

/** CONTROLLER **/
var controller = {
    handleClick: function(whichButton) {
        game.makeMove(whichButton);        
        ReactDOM.render(<Container controller={this} />, document.stuff)
    }
}