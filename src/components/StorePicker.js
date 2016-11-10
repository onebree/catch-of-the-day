import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();

    console.log("You changed the URL");

    // First grab the text from the box
    console.log(this.storeInput.value)

    // Second, trasnition from / to /store/:storeId
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={
          getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit store</button>
      </form>
    )
  } 
}

export default StorePicker;
