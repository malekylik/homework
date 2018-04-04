export function updatePagination(limit, offset) {
    return {
        type: 'UPDATE_PAGINATION',
        pagination: {
            limit,
            offset
        }
    };
}
