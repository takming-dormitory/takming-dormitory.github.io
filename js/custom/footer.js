const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
const getIpClient = async () => {
    const { ip } = await fetchData('https://api.ipify.org?format=json');
    let path = location.pathname.replace("/post", "");
    if (path === "/") {
        path = "/首頁";
    }
    const data = await fetchData(`https://api.sao-x.com/ip/${ip}` + path);
    let container = document.createElement('div');
    container.className = 'content';
    let foot = document.querySelector('.foot_content');
    let ul = document.createElement('ul');
    ul.className = 'Client-group';
    let date = new Date();
    let li = document.createElement('li');
    li.className = 'Client-group-item';
    li.innerHTML = `<span>${date.toLocaleString()}</sapn>`;
    ul.appendChild(li);
    for (let key in data) {
        let li = document.createElement('li');
        li.className = 'Client-group-item';
        let span = document.createElement('span');
        span.innerHTML = `${key}:&nbsp;${data[key]}`;
        li.appendChild(span);
        ul.appendChild(li);
    }
    container.appendChild(ul);
    foot.appendChild(container);
    console.log(foot);
};