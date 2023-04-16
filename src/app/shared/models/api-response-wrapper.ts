export interface ApiResponseWrapper<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}
