export enum ProfileActionTypes {
  SET_PROFILE_IMAGE = "SET_PROFILE_IMAGE",
  SET_FULL_NAME = "SET_FULL_NAME",
}

export interface ProfileState {
  fullName: string
  image: string
}

export interface SetProfileImageAction {
  type: ProfileActionTypes.SET_PROFILE_IMAGE
  payload: string
}

export interface SetFullNameAction {
  type: ProfileActionTypes.SET_FULL_NAME
  payload: string
}

export type ProfileAction = SetProfileImageAction | SetFullNameAction
