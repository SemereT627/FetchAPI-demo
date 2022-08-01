const postDiv = document.querySelector(".posts");

const localDataBtn = document.getElementById("localData");
const picsumDataBtn = document.getElementById("picsumData");

localDataBtn.addEventListener("click", () => renderFromLocal());

async function getDataFromLocal() {
  try {
    let response = await fetch("./data/data.json");
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderFromLocal() {
  let posts = await getDataFromLocal();
  let output = "";
  if (posts.length != 0) {
    posts.forEach((post) => {
      output += `<div class="rounded rounded-xl bg-gray-700 shadow shadow-2xl">
      <div class="image"> <img class="h-56 w-full object-cover rounded-t-lg" src="${post.image}"> </div>
      <div class="text-white p-4 flex flex-col justify-center items-center">
            <a class="header" class="w-full text-center" href="#" id="bTitle"> ${post.postTitle} </a>
            <div class="meta">
                <span id="bDate">${post.date} </span>
                <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
            </div>
            <div class="description"><p class="text-justify mt-2" id="bDesc">  ${post.postText} </p>  </div>
            <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
      </div>
      </div>`;
    });
  }
  postDiv.innerHTML = output;
}

// TODO: from an API

