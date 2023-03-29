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
      mainCoffeeBeanList: [],
      selectedBean: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBean != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBean: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeBean = (newBean) => {
    const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newBean);
    this.setState({mainCoffeeBeanList: newMainCoffeeBeanList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedBean = (id) => {
    const selectedBean = this.state.mainCoffeeBeanList.filter(bean => bean.id === id)[0];
    this.setState({selectedBean: selectedBean});
  }

  handleDeletingCoffeeBean = (id) => {
    const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(bean => bean.id !== id);
    this.setState({
      mainCoffeeBeanList: newMainCoffeeBeanList,
      selectedBean: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingBeanInList = (beanToEdit) => {
    const editedMainCoffeeBeanList = this.state.mainCoffeeBeanList.map(bean => {
      if (bean.id === this.state.selectedBean.id) {
        return beanToEdit;
      } else {
        return bean; 
      }
    });
    this.setState({
      mainCoffeeBeanList: editedMainCoffeeBeanList,
      editing: false,
      selectedBean: null
    });
  }

  handleSellingCoffeeBean = (beanId) => {
    const updatedCoffeeBeanList = this.state.mainCoffeeBeanList.map(bean => {
      if (bean.id === beanId && bean.quantity > 0) {
        return { ...bean, quantity: bean.quantity - 1 };
      }
      return bean;
    });
  
    const updatedSelectedBean = updatedCoffeeBeanList.find(bean => bean.id === beanId);
  
    this.setState({ 
      mainCoffeeBeanList: updatedCoffeeBeanList, 
      selectedBean: updatedSelectedBean 
    });
  };
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeBeanForm bean={this.state.selectedBean} onEditBean = {this.handleEditingBeanInList} />
      buttonText = "Return to Coffee Bean List";
    } else if (this.state.selectedBean != null) {
      currentlyVisibleState = 
      <CoffeeBeanDetail 
        bean={this.state.selectedBean} 
        onClickingDelete={this.handleDeletingCoffeeBean}
        onClickingEdit={this.handleEditClick} 
        onClickingSell={this.handleSellingCoffeeBean}
      />
      buttonText = "Return to Coffee Bean List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewCoffeeBeanForm onNewBeanCreation={this.handleAddingNewCoffeeBean}/>;
      buttonText = "Return to Coffee Bean List"; 
    } else {
      currentlyVisibleState = <CoffeeBeanList coffeeBeanList={this.state.mainCoffeeBeanList} onBeanSelection={this.handleChangingSelectedBean} />;
      buttonText = "Add Coffee Bean";
    }
    return (
      <div className="main-container">
        {currentlyVisibleState}
        <button className="main-button" onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default CoffeeBeanControl;
