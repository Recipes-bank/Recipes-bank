var React = require('react');
var SingleRec = require('./singleRec');
require('./recList.scss');


module.exports = React.createClass({
  render: function(){
    var list = this.props.recData.map(function(recProps){
      return (
        <SingleRec {...recProps} />
      )
    });
  //return <div className='row top-xs'>{list}</div>
    return <div className='grid'>{list}</div>
  }
});
