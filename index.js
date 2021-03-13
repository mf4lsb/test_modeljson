const tf = require('@tensorflow/tfjs');
// const fs = require('fs');

// require('@tensorflow/tfjs-node-gpu');

// fs.readFile('./tfjs_files/model.json', 'utf-8', (err, jsonString) => {
//     console.log(jsonString);
// })

async function models() {
    model = undefined;
    model = await tf.loadLayersModel()


    // var model;
    // fs.readFile('./tfjs_files/model.json', 'utf-8', async (err, jsonString) => {
    //     model = await tf.loadLayersModel(jsonString);
    // });
    // console.log(model);

    // const prediction = model.predict(tf.tensor([4129,82580,990.96]));
    // console.log(prediction);

    // tf.tensor([4129,82580,990.96]).print();

}

models();