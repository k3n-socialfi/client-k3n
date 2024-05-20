export interface IFilterRanking {
    type?: string;
    verification?: boolean;
    lowerLimit?: number;
    upperLimit?: number;
    tags?: string[];
    page?: number;
    limit?: number;
    top?: number;
}