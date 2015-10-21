var Header = require('../layout/Header.react'),
	Footer = require('../layout/Footer.react'),
    MainSection = require('../layout/MainSection.react'),
    Input = require('../common/Input.react'),
    React = require('react');

var TestApp = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection />
        <Input />
        <MainSection />
        <Footer/>
      </div>
    );
  },
});

module.exports = TestApp;