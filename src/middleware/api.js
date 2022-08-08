const apiMiddleware = (store) => (next) => (action) => {
    switch(action.type){
        case 'FETCH_MOVIE_DATA':
            next(action)
            myMovieApi.get('/movies')
            .then(res => {
                store.dispatch({
                    type:'SET_MOVIE_DATA',
                    payload: {movies:res.data},
                })
            })
            .catch(err =>{
                store.dispatch({
                    type:'SET_MOVIE_DATA_ERROR',
                    payload: { error:err},
                })
            })
            break 

            default : next(action)
    }
}
export default apiMiddleware
