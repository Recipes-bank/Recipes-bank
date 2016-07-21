var React = require('react');
require('./singleRec.scss');


module.exports = React.createClass({
  render: function(){
    return <div className='single_rec grid-item'>
      <img src={this.props.imgURL} />
      <div className='title'>
        <h2>{this.props.title}</h2>
        <h4>{this.props.category}</h4>
      </div>
      <div className='specification'>
        <h2>{this.props.title}</h2>
        <hr></hr>
        <p>{this.props.description}</p>
        <div className='row'>
          <div className='col-sm-3'>
            <div>Price: {this.props.price} zł</div>
            <div>Portion: {this.props.portion}</div>
          </div>
          <div className='col-sm-4'>
            <div>Time: {this.props.time}min</div>
            <div>Dificult: {this.props.dificult}</div>
          </div>
          <div className='col-sm-offset-1 col-sm-4 signature'>
            <div>TODAY DATE</div>
            <div><a>BY WHO</a></div>
          </div>
        </div>
      </div>
    </div>
  }
});
