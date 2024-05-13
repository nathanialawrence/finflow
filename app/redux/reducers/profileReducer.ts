import { ProfileAction, ProfileActionTypes, ProfileState } from "../types/profileActionTypes"

const initialProfileState: ProfileState = {
  fullName: "",
  image: "",
}

const profileReducer = (
  state: ProfileState = initialProfileState,
  action: ProfileAction,
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.SET_PROFILE_IMAGE:
      return { ...state, image: action.payload }
    case ProfileActionTypes.SET_FULL_NAME:
      return { ...state, fullName: action.payload }
    default:
      return state
  }
}

export default profileReducer
