var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx')

var LeadCapture = React.createClass({
  onSubmit: function(e) {
    if (!this.refs.fieldEmail.state.valid) {
      alert("You suck at filling out forms!");
    } else {
      //send request to email host or server
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldFirstName.state.value,
        lastName: this.refs.fieldLastName.state.value
      }
      console.log(httpRequestBody);
      this.refs.fieldEmail.clear();
      this.refs.fieldFirstName.clear();
      this.refs.fieldLastName.clear();
    }
  },

  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <EmailField ref="fieldEmail"/>
            <NameField type="First" ref="fieldFirstName" />
            <NameField type="Last" ref="fieldLastName" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
