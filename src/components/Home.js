import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { homeData } = this.props;
    const cardsRow1 = homeData.cards.length  ? (
      homeData.cards.slice(0, 2).map(card => {
        return (
          <div className="col-md-6" key={card.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{card.subTitle}</h6>
                <p className="card-text">{card.description}</p>
                <Link to={card.link.to} className="card-link">{card.link.text}</Link>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        Failed to load cards
      </div>
    );
    const cardsRow2 = homeData.cards.length ? (
      homeData.cards.slice(2, 5).map(card => {
        return (
          <div className="col-md-4" key={card.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{card.subTitle}</h6>
                <p className="card-text">{card.description}</p>
                <Link to={card.link.to} className="card-link">{card.link.text}</Link>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        Failed to load cards
      </div>
    );
    return (
      <div className="home-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1 className="display-4">{homeData.jumbotron.title}</h1>
              <p className="lead">{homeData.jumbotron.primaryDescription}</p>
              <hr className="my-4" />
              <p>{homeData.jumbotron.secondaryDescription}</p>
              <p className="lead">
                <Link className="btn btn-outline-primary btn-lg" to={homeData.jumbotron.button.to} role="button">{homeData.jumbotron.button.text}</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {cardsRow1}
        </div>
        <div className="row mt-4">
          {cardsRow2}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    homeData: state.homeData
  }
}
 
export default connect(mapStateToProps)(Home);