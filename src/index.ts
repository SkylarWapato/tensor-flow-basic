import { render, show } from "@tensorflow/tfjs-vis";
import { convertToTensor } from "./libs/convert-to-tensor";
import { createModel } from "./libs/create-model";
import { getData } from "./libs/get-data";
import { testModel } from "./libs/test-model";
import { trainModel } from "./libs/train-model";

async function run() {
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  render.scatterplot(
    {name: 'Horsepower v MPG'},
    {values}, 
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300
    }
  );
  // Create the model
  const model = createModel();  
  show.modelSummary({name: 'Model Summary'}, model);

  // Convert the data to a form we can use for training.
  const tensorData = convertToTensor(data);
  const {inputs, labels} = tensorData;
      
  // Train the model  
  await trainModel(model, inputs, labels);
  console.log('Done Training');// Make some predictions using the model and compare them to the
  // original data
  testModel(model, data, tensorData);
}

document.addEventListener('DOMContentLoaded', run);