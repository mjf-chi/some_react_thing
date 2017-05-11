const React = require('react');

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Main = (props) => {
  return (
    <div style={ styles.main }>
      <div>Header</div>
        { props.children }
      <div>Footer</div>
    </div>
  );
};

module.exports = Main;
