import { DocumentReference, Timestamp } from 'firebase/firestore'

export type CollectionOption = 'clubs' | 'members' | 'staffs'

// We should persist this in the local storage
export type AnonymousId = string
export type Email = string

// Keep these types in sync with the real docs in firestore
export type ClubDoc = {
  // club name is the doc id itself
  members: DocumentReference[]
  posts: DocumentReference[]
}
export type MemberDoc = {
  club: DocumentReference // ClubDoc
  name: string
  studentId: string
  year: number
  badge: string
}
export type TextDoc = {
  by: Email | AnonymousId // stores email if logged in
  createdAt: Timestamp
  text: string
  name: string // The person who submits
  badge: string | null // The badge of the poster who is also a member of a club, null if the poster is not in a club
}
export type ReplyDoc = TextDoc
export type PostDoc = TextDoc & {
  replies: ReplyDoc[]
  likes: (Email | AnonymousId)[] // so that we know who likes this
  nLikes: number // number of likes, keep in sync with 'likes'
}
export type StaffDoc = {} // We just need emails of staffs as the document ids
