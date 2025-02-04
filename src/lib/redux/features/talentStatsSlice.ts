import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChallengeStats } from '@/services/talentStatsService';
import { TalentChallengeStats } from '@/types/stats';

interface TalentStatsState {
    stats: TalentChallengeStats | null;
    loading: boolean;
    error: string | null;
}

const initialState: TalentStatsState = {
    stats: null,
    loading: false,
    error: null
};

export const fetchChallengeStats = createAsyncThunk(
    'talentStats/fetchChallengeStats',
    async () => {
        const data = await getChallengeStats();
        return data;
    }
);

const talentStatsSlice = createSlice({
    name: 'talentStats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChallengeStats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallengeStats.fulfilled, (state, action) => {
                state.loading = false;
                state.stats = action.payload;
            })
            .addCase(fetchChallengeStats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch challenge stats';
            });
    }
});

export default talentStatsSlice.reducer;