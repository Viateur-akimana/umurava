export interface Participant {
    fullName: string;
    email: string;
}

export interface ParticipantsResponse {
    _id: string;
    participants: Participant[];
    totalParticipants: number;
}