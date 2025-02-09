import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChallengeParticipants } from '@/services/participantsService';

export interface Participant {
    fullName: string;
    email: string;
}

export interface ParticipantsResponse {
    _id: string;
    participants: Participant[];
    totalParticipants: number;
}

interface ParticipantsState {
    participants: Participant[];
    totalParticipants: number;
    loading: boolean;
    error: string | null;
}

const initialState: ParticipantsState = {
    participants: [],
    totalParticipants: 0,
    loading: false,
    error: null
};

export const fetchChallengeParticipants = createAsyncThunk(
    'participants/fetchChallengeParticipants',
    async ({
        challengeId,
        page = 1,
        limit = 6
    }: {
        challengeId: string,
        page?: number,
        limit?: number
    }) => {
        const data: ParticipantsResponse = await getChallengeParticipants(challengeId, page, limit);
        return {
            participants: data.participants,
            totalParticipants: data.totalParticipants
        };
    }
);

const participantsSlice = createSlice({
    name: 'participants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChallengeParticipants.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallengeParticipants.fulfilled, (state, action) => {
                state.loading = false;
                state.participants = action.payload.participants;
                state.totalParticipants = action.payload.totalParticipants;
            })
            .addCase(fetchChallengeParticipants.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch participants';
            });
    }
});

export default participantsSlice.reducer;