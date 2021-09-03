import { DocumentReference, Timestamp } from 'firebase/firestore'

export type CollectionOption = 'clubs' | 'members' | 'posts' | 'replies' | 'staffs'

// We should persist this in the local storage
export type AnonymousId = string

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
export type PostDoc = {
  by: DocumentReference | AnonymousId
  likes: (DocumentReference | AnonymousId)[] // so that we know who likes this
  postedAt: Timestamp
  replies: DocumentReference[] // ReplyDoc[]
  text: string
}
export type ReplyDoc = {
  by: DocumentReference | AnonymousId
  likes: (DocumentReference | AnonymousId)[] // so that we know who likes this
  repliedAt: Timestamp
  text: string
}
export type StaffDoc = {
  name: string
  studentId: string
  year: number
}
