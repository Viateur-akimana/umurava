import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    getAllChallenges, 
    createChallenge, 
    getChallengeById, 
    updateChallenge, 
    deleteChallenge 
} from '@/services/challengesService';
import { Challenge } from '@/types/challenge';
import { toast } from 'react-toastify';

// Define the state type
interface ChallengesState {
    challenges: Challenge[];
    currentChallenge: Challenge | null;
    loading: boolean;
    error: string | null;
    pagination: {
        page: number;
        totalPages: number;
        totalChallenges: number;
    };
    counts: {
        all: number;
        open: number;
        ongoing: number;
        completed: number;
    };
}

// Initial state
const initialState: ChallengesState = {
    challenges: [],
    currentChallenge: null,
    loading: false,
    error: null,
    pagination: {
        page: 1,
        totalPages: 1,
        totalChallenges: 0
    },
    counts: {
        all: 0,
        open: 0,
        ongoing: 0,
        completed: 0
    }
};

// Helper function to calculate counts
const calculateCounts = (challenges: Challenge[]) => {
    return {
        all: challenges.length,
        open: challenges.filter(ch => ch.status === 'open').length,
        ongoing: challenges.filter(ch => ch.status === 'ongoing').length,
        completed: challenges.filter(ch => ch.status === 'completed').length
    };
};

// Async Thunks
export const fetchChallenges = createAsyncThunk(
    'challenges/fetchChallenges',
    async ({ 
        status, 
        page = 1, 
        limit = 6 
    }: { 
        status?: 'open' | 'ongoing' | 'completed', 
        page?: number, 
        limit?: number 
    }) => {
        const response = await getAllChallenges(status, page, limit);
        return response;
    }
);

export const fetchChallengeById = createAsyncThunk(
    'challenges/fetchChallengeById',
    async (id: string) => {
        const challenge = await getChallengeById(id);
        return challenge;
    }
);

export const createNewChallenge = createAsyncThunk(
    'challenges/createChallenge',
    async (challengeData: Partial<Challenge>, { rejectWithValue }) => {
        try {
            const newChallenge = await createChallenge(challengeData);
            toast.success('Challenge created successfully!');
            return newChallenge;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Failed to create challenge');
        }
    }
);

export const updateExistingChallenge = createAsyncThunk(
    'challenges/updateChallenge',
    async ({ challengeId, challengeData }: { challengeId: string, challengeData: Partial<Challenge> }, { rejectWithValue }) => {
        try {
            const updatedChallenge = await updateChallenge(challengeId, challengeData);
            toast.success('Challenge updated successfully!');
            return updatedChallenge;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Failed to update challenge');
        }
    }
);

export const removeChallenge = createAsyncThunk(
    'challenges/deleteChallenge',
    async (challengeId: string, { rejectWithValue }) => {
        try {
            await deleteChallenge(challengeId);
            toast.success('Challenge deleted successfully!');
            return challengeId;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Failed to delete challenge');
        }
    }
);

// Create the slice
const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        resetCurrentChallenge: (state) => {
            state.currentChallenge = null;
        },
        clearError: (state) => {
            state.error = null;
        },
        updateCounts: (state) => {
            state.counts = calculateCounts(state.challenges);
        }
    },
    extraReducers: (builder) => {
        // Fetch Challenges
        builder.addCase(fetchChallenges.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchChallenges.fulfilled, (state, action) => {
            state.loading = false;
            state.challenges = action.payload.data;
            state.pagination = {
                page: action.payload.pagination.page,
                totalPages: action.payload.pagination.totalPages,
                totalChallenges: action.payload.pagination.totalChallenges
            };
            // Update counts when challenges are fetched
            state.counts = calculateCounts(action.payload.data);
        })
        .addCase(fetchChallenges.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch challenges';
        })

        // Fetch Challenge by ID
        .addCase(fetchChallengeById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchChallengeById.fulfilled, (state, action) => {
            state.loading = false;
            state.currentChallenge = action.payload;
        })
        .addCase(fetchChallengeById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch challenge details';
        })

        // Create Challenge
        .addCase(createNewChallenge.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createNewChallenge.fulfilled, (state, action) => {
            state.loading = false;
            state.challenges.push(action.payload);
            // Update counts when a challenge is created
            state.counts = calculateCounts(state.challenges);
        })
        .addCase(createNewChallenge.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // Update Challenge
        .addCase(updateExistingChallenge.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateExistingChallenge.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.challenges.findIndex(ch => ch._id === action.payload._id);
            if (index !== -1) {
                state.challenges[index] = action.payload;
            }
            state.currentChallenge = action.payload;
            // Update counts when a challenge is updated
            state.counts = calculateCounts(state.challenges);
        })
        .addCase(updateExistingChallenge.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // Delete Challenge
        .addCase(removeChallenge.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(removeChallenge.fulfilled, (state, action) => {
            state.loading = false;
            state.challenges = state.challenges.filter(ch => ch._id !== action.payload);
            // Update counts when a challenge is deleted
            state.counts = calculateCounts(state.challenges);
        })
        .addCase(removeChallenge.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export const { resetCurrentChallenge, clearError, updateCounts } = challengesSlice.actions;
export default challengesSlice.reducer;