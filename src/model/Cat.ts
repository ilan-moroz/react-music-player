class Cat {
  private categoryName: string[] = []

  addCat = (newCategoryName: string) => {
    this.categoryName.push(newCategoryName)
  }

  allCat = () => {
    return this.categoryName
  }
}

let cat = new Cat()
cat.addCat('General')
cat.addCat('Metal')
export default cat
