var React = require('react');
var SingleRec = require('./singleRec');


module.exports = React.createClass({
  render: function(){
    var list = this.props.recData.map(function(recProps){
      return <SingleRec {...recProps} />
    });
  return <div>{list}</div>
  }
});
