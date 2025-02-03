const isTokenExpired = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp ? payload.exp * 1000 < Date.now() : false;
    } catch {
        return true;
    }
};

export const getAuthHeaders = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem("token"); 
            return {};
        }
        return { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
    }
    return {};
};