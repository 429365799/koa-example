import { Map } from 'immutable';

const $$initState = Map({
    username: '',
    password: ''
});

function user (state = $$initState, action) {
    switch (action.type) {
        case 'DO_LOGIN': 
            return state.set('username', action.username)
    }
}