import axios from 'axios';

export const getInfo = () => dispatch => {      //  action creater for GET
    axios.get('/db')
        .then(res =>
            dispatch({
                type: 'GET',
                data: res.data
            })
        ).catch(err => {
            console.log(err);
        })
}

export const add = id => ({ type: 'ADD', id });
export const remove = id => ({ type: 'REMOVE', id });

/*
    Here the data will change only on client side but not change on server side
    The code below allows you to change data in Json server,
*/

/*

export const add = (id) => dispatch => {
    axios.get('/recommendations/' + id)
        .then(res => {
            axios.post('/myList', res.data)
                .then(res => {
                    axios.delete('/recommendations/' + id)
                        .then(res => {
                            axios.get('/db')
                                .then(res => {
                                    dispatch({
                                        type: 'GET',
                                        data: res.data
                                    })
                                })
                        })
                })
        }
        ).catch(err => {
            console.log(err);
        })

}

export const remove = (id) => dispatch => {
    axios.get('/myList/' + id)
        .then(res => {
            axios.post('/recommendations', res.data)
                .then(res => {
                    axios.delete('/myList/' + id)
                        .then(res => {
                            axios.get('/db')
                                .then(res => {
                                    dispatch({
                                        type: 'GET',
                                        data: res.data
                                    })
                                })
                        })
                })
        }
        ).catch(err => {
            console.log(err);
        })
} 

*/