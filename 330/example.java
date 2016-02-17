public class Component {
    
    public Component(int id) {
        this.id = id;
    }
    
    public void handleClick() {
        controller.handleClick(this.id);
    }
    
}

public class Container {
    public Container() {
        new Component(1);
        new Component(2);
        new Component(3);
    }
    
}

Component comp = new Component(3);