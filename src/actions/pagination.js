export function updateLimit(limit) {
    return {
        type: 'UPDATE_LIMIT',
        pagination: {
            limit,
        }
    };
}

export function nextPagination(next) {
    return {
        type: 'NEXT_PAGINATION',
        pagination: next
    };
}
