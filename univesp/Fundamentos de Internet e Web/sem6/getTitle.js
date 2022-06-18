const getTitle = (element_class, tag) => {
  titulos = document.getElementsByClassName(element_class)
  for (t of titulos) {
    child_nodes = t.parentNode.parentNode.childNodes // <-- ajustar o nível de profundidade do elemento (remover ou acrescentar .parentNode)
    i = getChildNodeByTagName(child_nodes, tag)
    t.innerText = child_nodes[i].innerText.toLowerCase()
  }
}

const getChildNodeByTagName = (child_nodes, tag) => {
  for (i in child_nodes) {
    if (child_nodes[i].localName == tag) {
      return i
    }
  }
}