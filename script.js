// toggle sidebar
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const icon = sidebarToggle.querySelector("span");
const ulList = document.querySelector(".list");
const oneBtn = document.querySelector(".one-btn");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  icon.classList.toggle("normal-btn");
  icon.classList.toggle("rotated-btn");
  ulList.classList.toggle("list");
  ulList.classList.toggle("list-hide");
  oneBtn.classList.toggle("one-btn-hide");
  oneBtn.classList.toggle("one-btn");
});

// fetch JSON data;
const fetchData = async () => {
  return fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setDataToUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Re-throw the error for proper handling
    });
};
fetchData();

const setDataToUI = (data) => {
  const heading1 = document.getElementById("heading-1");
  const taskTitle = document.getElementById("task-title");
  const taskDescription = document.getElementById("task-description");

  heading1.innerText = data.title;
  taskTitle.innerText = data.tasks[0].task_title;
  taskDescription.innerText = data.tasks[0].task_description;

  // asset 1
  const assetTitle1 = document.getElementById("asset-title1");
  const assetDescription1 = document.getElementById("asset-description1");
  const assetContent1 = document.getElementById("asset-content1");

  // asset 2
  const assetTitle2 = document.getElementById("asset-title2");
  const assetDescription2 = document.getElementById("asset-description2");
  const assetContent2 = document.getElementById("asset-content2");

  // asset 3
  const assetTitle3 = document.getElementById("asset-title3");
  const assetDescription3 = document.getElementById("asset-description3");
  const assetContent3 = document.getElementById("asset-content3");

  // asset 4
  const assetTitle4 = document.getElementById("asset-title4");
  const assetDescription4 = document.getElementById("asset-description4");
  const assetContent4 = document.getElementById("asset-content4");

  // assets selector variables array
  const selectorVariableArr = [
    {
      assetTitle: assetTitle1,
      assetDescription: assetDescription1,
      assetContent: assetContent1,
    },
    {
      assetTitle: assetTitle2,
      assetDescription: assetDescription2,
      assetContent: assetContent2,
    },
    {
      assetTitle: assetTitle3,
      assetDescription: assetDescription3,
      assetContent: assetContent3,
    },
    {
      assetTitle: assetTitle4,
      assetDescription: assetDescription4,
      assetContent: assetContent4,
    },
  ];

  // assets array
  const assetsArr = data?.tasks[0].assets;

  // looping for calling set assets function
  for (let i = 0; i < assetsArr.length; i++) {
    setAssetsToUI(assetsArr, selectorVariableArr[i], i);
  }
};

// function for setting data to frontend UI
const setAssetsToUI = (assets, selectorVariable, index) => {
  // setting data to frontend UI
  selectorVariable.assetTitle.innerText = assets[index].asset_title;
  selectorVariable.assetDescription.innerText = assets[index].asset_description;
  if (selectorVariable.assetContent !== null) {
    selectorVariable.assetContent.src = assets[index].asset_content;
  }
};
