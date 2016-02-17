public class Component {
    
    public Component(int id, Controller ctrl){
        this.id = id;
        this.controller = ctrl;
    }
    
    public void handleClick(){
        this.controller.handleClick(this.id)
    }
}



component = new Component(3);





public class Container {
    public Container() {
        new Component(1);
        new Component(2);
        new Component(3);
    }
}