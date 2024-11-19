class LiftButton {
    public light: boolean;
    public doorStatus: 'OPEN' | 'CLOSED';

    constructor() {
        this.light = false;
        this.doorStatus = 'CLOSED';
    }

    public pressButton = () => {
        if (this.doorStatus === 'OPEN') {
            return;
        }
        if (this.light && this.doorStatus === 'CLOSED') {
            return;
        }
        this.light = true;
    };

    public openDoors = () => {
        this.doorStatus = 'OPEN';
        this.light = false;
    };

    public closeDoors = () => {
        this.doorStatus = 'CLOSED';
        this.light = false;
    };
}

export default LiftButton;
