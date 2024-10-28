if (typeof vm.runtime.ext_globalCoordinate != "object") {
  fetch("http://localhost:8000/renderer/basic.pms")
    .then((r) => r.arrayBuffer())
    .then((buffer) => {
      vm.addSprite(buffer);
      vm.extensionManager.removeExtension("mspriteloader");
    })
    .then(() => {
      console.log("Done");
    })
    .catch((error) => {
      console.log("Error", error);
    });
} else {
  vm.extensionManager.removeExtension("mspriteloader");
}
class mspriteloader {
  getInfo() {
    return {
      id: "mspriteloader",
      name: "...",
      blocks: [],
    };
  }
}

Scratch.extensions.register(new mspriteloader());
