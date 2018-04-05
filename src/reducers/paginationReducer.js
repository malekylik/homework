export function paginationReducer(pagination, action) {

    if (pagination === undefined) {
        return {
            limit: 15,
            offset: 0 
        }
    }

    if (action.type === 'UPDATE_LIMIT') {
        return {
            ...pagination,
             ...action.pagination
        }
    }
    
    if (action.type === 'NEXT_PAGINATION') {
        return {
            offset: action.pagination.offset + action.pagination.limit,
            limit: action.pagination.limit
        }
    }


    return pagination;
}
