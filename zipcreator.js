// Get input element
let fileInputs = document.querySelectorAll(".file_input");
let dropContainer = document.querySelectorAll(".drop_container");
// Assign new zip object
let zip = new JSZip();
let products = zip.folder("products");
// Add listener to listen for file changes
fileInputs.forEach((el) => {
  el.addEventListener("change", (evt) => {
    document
      .querySelector(`label[for="${el.id}"]`)
      .classList.add("change_to_green");
    document.querySelector(`label[for="${el.id}"]`).textContent =
      "Successfuly added!";
    setTimeout(() => {
      document
        .querySelector(`label[for="${el.id}"]`)
        .classList.remove("change_to_green");
      document.querySelector(`label[for="${el.id}"]`).textContent =
        "Or select more files";
    }, 3000);
    // Get filelist
    let files = evt.target.files;
    let folder = null;

    if (el.dataset.index == 1) folder = products.folder("product-images");
    else if (el.dataset.index == 2) folder = products.folder("product-models");
    else if (el.dataset.index == 3) folder = products.folder("textures");

    // Loop through the filelist to get each filename and pass each file to zip object
    for (let file of files) {
      let filename = file.name;
      folder.file(filename, file);
    }
  });
});

dropContainer.forEach((el) => {
  el.ondragover = el.ondragenter = function (evt) {
    el.style = "box-shadow: inset 0px 0px 10px #2196f3;border-color: #0a4d6b;";
    evt.preventDefault();
  };
  el.ondragleave = function (evt) {
    el.style = null;
  };

  el.ondrop = function (evt) {
    el.style = "box-shadow: inset 0px 0px 10px #4caf50;border-color: #4caf50;";
    setTimeout(() => {
      el.style = null;
    }, 3000);
    fileInput = document.querySelector(
      '.file_input[data-index="' + el.dataset.index + '"]'
    );

    // pretty simple -- but not for IE :(
    fileInput.files = evt.dataTransfer.files;

    // If you want to use some of the dropped files
    const dT = new DataTransfer();
    for (let index = 0; index < evt.dataTransfer.files.length; index++) {
      const element = evt.dataTransfer.files[index];
      dT.items.add(element);
    }
    fileInput.files = dT.files;
    fileInput.dispatchEvent(new Event("change"));
    evt.preventDefault();
  };
});

function generateZip() {
  content = document.getElementById("code").textContent;
  var obj = JSON.parse(content);
  var pretty_code =
    "export const modelsMenu =" + JSON.stringify(obj, undefined, 4);
  zip.file("models-settings.js", pretty_code);

  // Generate the complete zip file
  zip.generateAsync({ type: "blob" }).then((blobdata) => {
    // create zip blob file
    let zipblob = new Blob([blobdata]);

    // For development and testing purpose
    // Download the zipped file
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(zipblob);
    elem.download = "compressed.zip";
    elem.click();
  });
}
