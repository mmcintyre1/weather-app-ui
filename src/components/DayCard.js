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
    if (this.props.reading) {
      const tomorrowsData = this.props.reading[0]
      this.formatImgUrl(tomorrowsData)
      return (
        <div className="cardContainer">
          <div className="card">
            <h3 className="card-title">{this.props.location}</h3>
            <p className="text-muted">{tomorrowsData.dt_txt}</p>
            <i className={this.formatImgUrl(tomorrowsData)}></i>
            <h2>{Math.round(tomorrowsData.main.temp)} °F</h2>
            <div className="card-body">
              <p className="card-text">{tomorrowsData.weather[0].description}</p>
            </div>
          </div>
        </div>
      )
    }
    return <div>Hello</div>
  }
}

export default DayCard