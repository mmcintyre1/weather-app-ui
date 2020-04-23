import React from 'react'
import '../shared/owfont-master/css/owfont-regular.css'


class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: null,
      imgUrl: null
    }
    this.formatImgUrl = this.formatImgUrl.bind(this);
  }

  formatImgUrl(data) {
    return `owf owf-${data.weather[0].id} owf-5x`
  }

  render() {
    const newDate = Date();
    if (this.props.reading) {
      const todaysData = this.props.reading[0]
      this.formatImgUrl(todaysData)
      return (
        <div className="cardContainer">
          <div className="card">
            <h3 className="card-title">{newDate}</h3>
            <i className={this.formatImgUrl(todaysData)}></i>
            <h2>{Math.round(todaysData.main.temp)} °F</h2>
            <div className="card-body">
              <p className="card-text">{todaysData.weather[0].description}</p>
            </div>
          </div>
        </div>
      )
    }
    return <div>Hello</div>
  }
}

export default DayCard