import React from 'react';

class Navbar extends React.Component {
render (){

  return (
    <div >
      <div>
        <img style={styles.cartIcon} src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="cart-icon" />
        <span >3</span>
      </div>
    </div>
  );
  }
}
const styles = {
  image:{
    height: 110,
    width :110,
    borderRadius: 4,
    background: '#ccc'
  }
};
export default Navbar;