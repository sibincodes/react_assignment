const initialState = {
	RegistrationDetails: ''
}


function UserReducer(state = initialState, action) {
	switch (action.type) {

		case 'SAMPLE':

			return {

				...state,
				sibinData: action.data

			}

		case 'RESET_STORE':

			return state;

		default: return state;
	}

}

export default UserReducer;