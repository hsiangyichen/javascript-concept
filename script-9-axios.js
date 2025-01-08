const baseUrl = "https://reqres.in/api/users?page=1";

async function getUsersList() {
  try {
    const response = await axios.get(baseUrl);
    //   const { data: usersData } = response.data;
    const usersData = response.data;
    console.log(usersData);

    /* ----------------------- Update page and total_pages ---------------------- */
    const pageNumber = document.querySelector(".page-number");
    pageNumber.textContent = usersData.page;

    const totalPageNumber = document.querySelector(".total-pages");
    totalPageNumber.textContent = usersData.total_pages;

    /* ------------------------- Populate the users list ------------------------ */
    const usersList = document.querySelector(".users");
    usersList.innerHTML = "";

    usersData.data.forEach((user) => {
      console.log(user);

      const userItem = document.createElement("li");
      userItem.classList.add("user");

      const avatar = document.createElement("img");
      avatar.classList.add("user__avatar");
      avatar.src = user.avatar;
      avatar.alt = `${user.first_name} ${user.last_name}`;
      avatar.style.height = "100px";

      const name = document.createElement("span");
      name.classList.add("user__name");
      name.textContent = `${user.first_name} ${user.last_name}`;

      const email = document.createElement("span");
      email.classList.add("user__email");
      email.textContent = user.email;

      userItem.appendChild(avatar);
      userItem.appendChild(name);
      userItem.appendChild(document.createTextNode(" — "));
      userItem.appendChild(email);

      usersList.appendChild(userItem);

      /* ---------------- Populate the ad section with support data --------------- */
      const adElement = document.querySelector(".ad");
      const supportData = JSON.stringify(usersData.support, null, 2);
      adElement.innerHTML = `<pre><code>${supportData}</code></pre>`;
      // adElement.textContent = supportData;
    });
  } catch (error) {
    console.log(error);
  }
}

getUsersList();
