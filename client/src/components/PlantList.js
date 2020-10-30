import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
    copy: [],
  };

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((resp) =>
        this.setState({
          plants: [...resp.data.plantsData],
          copy: [...resp.data.plantsData],
        })
      )
      .catch((err) => {
        debugger;
      });
  }

  onClick = (e) => {
    if (e.target.value === "all") {
      this.setState({
        plants: [...this.state.copy],
      });
    } else {
      this.setState({
        plants: this.state.copy.filter((plant) => {
          return plant.difficulty === e.target.value;
        }),
      });
    }
  };

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
        <div className="links-heading">
          <h3>Sort by difficulty</h3>
        </div>
        <div className="links">
          {["easy", "medium", "all"].map((item) => {
            return (
              <button onClick={this.onClick} value={item}>
                {item}
              </button>
            );
          })}
        </div>
        <main className="plant-list">
          {this.state?.plants?.map((plant) => (
            <div data-testid="plant-card" className="plant-card" key={plant.id}>
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </>
    );
  }
}
