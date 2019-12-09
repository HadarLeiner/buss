class bus_line {
    public line_number: number;
    public origin_station: string;
    public terminating_station: string;
    public on_time: boolean;
    public passengers: Array<Passenger>;
    public price: number;
    constructor(line_number: number,
        origin_station: string,
        terminating_station: string,
        on_time: boolean,
        passengers: Array<Passenger>,
        price: number) {
        this.line_number = line_number;
        this.origin_station = origin_station;
        this.terminating_station = terminating_station;
        this.on_time = on_time;
        this.passengers = passengers;
        this.price = price;
    }
    public calculates(): number {
        let total: number = this.price * this.passengers.length;
        return total;
    }
    public passenger(p: Passenger) {
        this.passengers.push(p)
    }
    public printDitails() {
        console.log(this.line_number + " " + this.origin_station + " " + this.terminating_station + " " + this.on_time + " " + this.passengers.length + " " + this.calculates() + " ");
    }
}


interface Passenger {
    name: string;
    age: number;
}


export { bus_line, Passenger }