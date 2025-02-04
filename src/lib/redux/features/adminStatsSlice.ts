import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAdminStats } from '@/services/adminStatsService';

type StatDetail = {
    current: number;
    previous: number;
    changePercent: number;
};

type AdminStats = {
    totalChallenges: StatDetail;
    totalParticipants: StatDetail;
    completedChallenges: StatDetail;
    openChallenges: StatDetail;
    onGoingChallenges: StatDetail;
};

interface AdminStatsState {
    stats: AdminStats | null;
    loading: boolean;
    error: string | null;
}

const initialState: AdminStatsState = {
    stats: null,
    loading: false,
    error: null,
};

export const fetchAdminStats = createAsyncThunk(
    'adminStats/fetchAdminStats',
    async (filter: string = 'this_week', { rejectWithValue }) => {
        try {           
            const data = await getAdminStats(filter);
            return data;
        } catch (error) {
            return rejectWithValue(
                error instanceof Error 
                    ? error.message 
                    : 'Failed to fetch admin stats'
            );
        }
    }
);

const adminStatsSlice = createSlice({
    name: 'adminStats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminStats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdminStats.fulfilled, (state, action) => {
                state.stats = action.payload;
                state.loading = false;
            })
            .addCase(fetchAdminStats.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

export default adminStatsSlice.reducer;