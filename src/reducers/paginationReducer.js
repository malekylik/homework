export function paginationReducer(pagination, action) {

    if (pagination === undefined) {
        return {
            limit: 15,
            next: '',
            error: false
        }
    }

    if (action.type === 'UPDATE_PAGINATION') {
        return {
            ...pagination,
            ...action.pagination,
        }
    }

    if (action.type === 'LOAD_ERROR') {
        return {
            ...pagination,
            error: action.error
        }
    }
    
    return pagination;
}
