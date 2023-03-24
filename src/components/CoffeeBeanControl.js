import React, { Component } from "react";
import CoffeeBeanDetail from "./CoffeeBeanDetail";
import CoffeeBeanList from "./CoffeeBeanList";
import EditCoffeeBeanForm from "./EditCoffeeBeanForm";
import NewCoffeeBeanForm from "./NewCoffeeBeanForm";

class CoffeeBeanControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeBeanList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCoffeeBean = (newBean) => {
    const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newBean);
    this.setState({mainCoffeeBeanList: newMainCoffeeBeanList,
                  formVisibleOnPage: false });
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeBeanForm onNewBeanCreation={this.handleAddingNewCoffeeBean}/>;
      buttonText = "Return to Coffee Bean List"; 
    } else {
      currentlyVisibleState = <CoffeeBeanList coffeeBeanList={this.state.mainCoffeeBeanList} />;;
      buttonText = "Add Coffee Bean";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeBeanControl;
