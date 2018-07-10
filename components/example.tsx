import * as React from 'react';
import axios from 'axios';

interface State {
    city: string,
    unit: string
}
export default class Example extends React.Component<{},State> {
    state: State = {
        city: '',
        unit: 'metric'
    }
    getInfo = () => {
        const city = this.state.city;
        const unit = this.state.unit;

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a363a7c6557aca6c921d4911b8333b60&units=${unit}`)
            .then(res => {
                console.log(JSON.stringify(res.data.main));
                this.setState({
                    city: res.data.main.temp
                })
            })
    }
        search: any
      cityChange = () => {
          this.setState({
              city: this.search.value
          }, () => {
              if (this.state.city && this.state.city.length > 1) {
                  if (this.state.city.length % 2 === 0) {
                      this.getInfo()
                  }
              }
          })
      }
    
    public render(){
        return(
            <div>
            <form>
        <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.cityChange}
        />
        <p>{`It is ${this.state.city} Degrees Celsius`}</p>
        </form>
            </div>
        )
    }
}
