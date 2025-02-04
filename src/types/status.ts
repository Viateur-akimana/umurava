export interface StatsCardProps {
    title: string;
    count: number;
    isActive?: boolean;
}
export interface AdminStatsCardProps {
    title: string;
    count: number;
    rate: number;
    filter: string;
    onFilterChange: (value: string) => void;
}
