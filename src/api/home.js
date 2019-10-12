export default (axios) => {
    return {
        gets: axios.request({
            url: '/www',
            method: 'get',
            params: {
                aa:11,
                bb:22
            }
        })
    }
}