import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises,
    category: ""
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        // Eger ayni kas kategorisine ait egzersiz varsa grupla yok yeni grup olarak dön
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const category = this.state.category;

    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
