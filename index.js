const tf = require('@tensorflow/tfjs');
// const fs = require('fs');

// require('@tensorflow/tfjs-node-gpu');

// fs.readFile('./tfjs_files/model.json', 'utf-8', (err, jsonString) => {
//     console.log(jsonString);
// })

async function models() {
    model = undefined;
    console.log("MASUK");
    model = await tf.loadLayersModel('https://raw.githubusercontent.com/mf4lsb/test_modeljson/main/tfjs_files/model.json');


    // var model;
    // fs.readFile('./tfjs_files/model.json', 'utf-8', async (err, jsonString) => {
    //     model = await tf.loadLayersModel(jsonString);
    // });
    // console.log(model);

    console.log("model loaded");
    var output;
    input = tf.tensor2d([[4129,82580,990.96]]);
    output = model.predict(input);
    const outputData = output.dataSync();
    console.log(outputData[0]);
    

    // model.predict(tf.tensor([[4129,82580,990.96]])).print();

    // tf.tensor([4129,82580,990.96]).print();

}

models = models();

// function prediction() {
//     var output;
//     input = tf.tensor2d([4129,82580,990.96]);
//     output = model.predict(input);
//     console.log(output);
// }

