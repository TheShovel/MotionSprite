fetch("https://theshovel.rocks/MotionSprite/renderer/basic.pms")
  .then((r) => r.arrayBuffer())
  .then((buffer) => vm.addSprite(buffer))
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.log("Error", error);
  });
