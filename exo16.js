
const getDependencies = (tree) => {
  const array_of_dependencies = []
  const getAllDependencies = (tree) => {
    if (tree && tree.dependencies) {
      Object.keys(tree.dependencies).forEach(key => {
        const new_dependencies = `${key}@${tree.dependencies[key].version ?? ''}`
        if (!array_of_dependencies.includes(new_dependencies)){
          array_of_dependencies.push(new_dependencies)
        }
  
        getAllDependencies(tree.dependencies[key])
      })
    }
  }

  getAllDependencies(tree)

  return array_of_dependencies.sort()
}

module.exports = getDependencies
