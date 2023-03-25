export const SELECT_CATEGORY = "SELECT_CATEGORY"

export const selectCategory = (categoryId) =>({
    type: SELECT_CATEGORY,
    categoryId
})