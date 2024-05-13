import { ProfileActionTypes } from "../types/profileActionTypes"

export function setProfileImage(image: string) {
  return {
    type: ProfileActionTypes.SET_PROFILE_IMAGE,
    payload: image,
  }
}

export function setFullName(name: string) {
  return {
    type: ProfileActionTypes.SET_FULL_NAME,
    payload: name,
  }
}
