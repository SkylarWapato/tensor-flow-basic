import { layers, sequential } from "@tensorflow/tfjs";

export function createModel() {
  // Create a sequential model
  const model = sequential();

  // Add a single input layer
  model.add(layers.dense({inputShape: [1], units: 1, useBias: true}));

  model.add(layers.dense({units: 50, activation: 'sigmoid'}));

  model.add(layers.dense({units: 50, activation: 'sigmoid'}));

  model.add(layers.dense({units: 50, activation: 'sigmoid'}));

  // Add an output layer
  model.add(layers.dense({units: 1, useBias: true}));

  return model;
}
