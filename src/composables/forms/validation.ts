import { User, Room } from "@/enums/FormSign";

export function useRoomCodeValidation(roomCode?: number) {
  return roomCode?.toString().length === Room.MaxCodeLength;
}

export function useUserNameValidation(userName?: string) {
  return userName?.length && userName.length <= User.MaxLength;
}
