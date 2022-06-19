const getTitle = (element_class, tag) => {
  titulos = document.getElementsByClassName(element_class)
  for (t of titulos) {
    child_nodes = t.parentNode.parentNode.childNodes // <-- ajustar o nível de profundidade do elemento (remover ou acrescentar .parentNode)
    i = getChildNodeByTagName(child_nodes, tag)
    t.innerText = child_nodes[i].innerText.toLowerCase()
  }
}

const getChildNodeByTagName = (child_nodes, element_tag) => {
  for (i in child_nodes) {
    if (child_nodes[i].localName == element_tag) {
      return i
    }
  }
}

(function toggleOnclickContent() {
    document.addEventListener('click', ((e) => {
      element_list = e.path
      child_nodes = element_list[getChildNodeByTagName(element_list, 'section')].childNodes
      onclick_content = child_nodes[getChildNodeByClassName(child_nodes, 'onclick-content')]
      if (onclick_content.style.display == '' || onclick_content.style.display == 'none') {
        onclick_content.style.display = 'block'
      } else {
        onclick_content.style.display = 'none'
      }
    }))
})()

const getChildNodeByClassName = (child_nodes, element_class) => {
  for (i in child_nodes) {
    if (child_nodes[i].className == element_class) {
      return i
    }
  }
}
