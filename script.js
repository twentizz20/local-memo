/////
let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
render();
/////

// const memobtn = document.getElementById("memoButton");

const memobtn = document.querySelector("#memoButton");
memobtn.addEventListener("click", memo);
///
function memo1() {
  //이게 왜 실행되냐
  console.log("memo1 start");
}

function memo() {
  console.log("memo start");
  const title = document.getElementById("memoTitle").value;
  const content = document.getElementById("memoContent").value;

  console.log(title);
  console.log(content);

  allMemo.push({ title, content, len: allMemo.length });

  localStorage.setItem("allMemo", JSON.stringify(allMemo));

  console.log(allMemo);
  render();
}

function render() {
  console.log("render start");
  const display = document.querySelector(".show");
  display.innerHTML = "";

  // // 최신 게시물이 위로 올라오도록
  // for (let i = allMemo.length; i > 0 ; i--) {
  //     // 아래와 유사 코드
  // }

  for (const item of allMemo) {
    const wrapper = document.createElement("section");
    wrapper.className = "contentWrapper";
    display.append(wrapper);

    const title = document.createElement("h3");
    title.className = "contentTitle";
    title.textContent = item.title;

    const content = document.createElement("textarea");
    content.className = "content";
    content.textContent = item.content;

    const del = document.createElement("button");
    del.className = "contentDelete";
    del.textContent = "삭제";

    const mod = document.createElement("button");
    mod.className = "contentModify";
    mod.textContent = "수정";

    //innerhtml-덧씌우기
    wrapper.appendChild(title);
    wrapper.appendChild(content);
    wrapper.appendChild(del);
    wrapper.appendChild(mod);

    del.setAttribute("id", item.len);
    del.setAttribute("onclick", "remove()");

    // modifyMemoBtn.setAttribute("id", item.len);
    // modifyMemoBtn.setAttribute("onclick", "remove()");
  }
}

function remove() {
  // console.log(event.srcElement.id);
  // console.log(allMemo);
  const idx = allMemo.find((item) => item.len == event.srcElement.id);
  if (idx) {
    allMemo.splice(
      allMemo.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}

function modify() {
  console.log("modify start");
  const title = document.querySelector("#memoTitle").value;
  const content = document.getElementById("memoContent").value;

  console.log(title);
  console.log(content);

  allMemo.push({ title, content, len: allMemo.length });

  localStorage.setItem("allMemo", JSON.stringify(allMemo));

  console.log(allMemo);
  render();
}

// // 최신 게시물이 위로 올라오도록
// for (let i = allMemo.length; i > 0 ; i--) {
