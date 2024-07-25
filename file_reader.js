const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  console.log(data1)
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    console.log(data2)
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      console.log(data3)
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        console.log(data4)
        console.log(`${data1} ${data2} is ${50} years old and his hoobies are ${data4}`)
      })
    })
  })
   
})