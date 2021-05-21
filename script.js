const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html')

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae repellendus cumque? Quibusdam error expedita distinctio nesciunt et soluta voluptate inventore aliquid doloremque, hic suscipit voluptatum laboriosam nisi molestiae eius.'

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listitem = document.createElement('li');
    const listcontent = prompt('Favorite color?');
    listitem.textContent = listcontent;
    list.appendChild(listitem);

    listitem.onclick = function (event) {
        event.stopPropagation();
        const listcontent = prompt('Change your color');
        this.textContent = listcontent
    }
}