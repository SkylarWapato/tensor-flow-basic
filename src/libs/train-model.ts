import { losses, Sequential, train } from "@tensorflow/tfjs";
import { show } from "@tensorflow/tfjs-vis";

export async function trainModel(model: Sequential, inputs: any, labels: any) {
  // Prepare the model for training.
  model.compile({
    optimizer: train.adam(),
    loss: losses.meanSquaredError,
    metrics: ['mse'],
  });

  const batchSize = 32;
  const epochs = 200;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: show.fitCallbacks(
      { name: 'Training Performance' },
      ['loss', 'mse'],
      { height: 200, callbacks: ['onEpochEnd'] }
    )
  });
}
