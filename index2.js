// const { fetchMyIP } = require("./iss_promised");
// const { fetchCoordsByIP } = require("./iss_promised");
const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function (passTimes) {
  for (const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${datetime} for ${time.duration} seconds`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  
