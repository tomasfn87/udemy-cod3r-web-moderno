const getTitle = (element_class, tag) => {
  titulos = document.getElementsByClassName(element_class)
  for (t of titulos) {
    child_nodes = t.parentNode.parentNode.childNodes // <-- ajustar o nível de profundidade do elemento (remover ou acrescentar .parentNode)
    t.innerText = child_nodes[getChildNodeIndexByTagName(child_nodes, tag)].innerText.toLowerCase()
  }
}

const getChildNodeIndexByTagName = (child_nodes, element_tag) => {
  for (i in child_nodes) {
    if (child_nodes[i].localName == element_tag) {
      return i
    }
  }
}

const toggleOnclickContent = (id) => {
  section = document.getElementById(id)
  section.addEventListener('click', () => {
    child_nodes = section.childNodes
    onclick_content_index = getChildNodeIndexByClassName(child_nodes, 'onclick-content')
    onclick_content = child_nodes[onclick_content_index]
    if (!onclick_content.style.display || onclick_content.style.display == 'none') {
      onclick_content.style.display = 'block'
    } else {
      onclick_content.style.display = 'none'
    }
  })
}

const getChildNodeIndexByClassName = (child_nodes, element_class) => {
  for (i in child_nodes) {
    if (child_nodes[i].className == element_class) {
      return i
    }
  }
}
