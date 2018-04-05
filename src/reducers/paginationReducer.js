export function paginationReducer(pagination, action) {

    if (pagination === undefined) {
        return {
            limit: 15,
            next: '',
            isNext: true 
        }
    }

    if (action.type === 'UPDATE_PAGINATION') {
        return {
            ...pagination,
            ...action.pagination,
        }
    }
    
    return pagination;
}
