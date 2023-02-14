export interface ITodo {
    id: number;
    title: string;
    body: string;
    priority: TodoPriority;
    createDateTime: string;
    aproveDateTime?: string;
    expectDateTime?: string;
}

export enum TodoPriority {
    high,
    medium,
    low
}