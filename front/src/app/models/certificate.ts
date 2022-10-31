export interface Certificate {
    name: string,
    date: Date,
    image: string,
    url: string,
    delivered_by: {
        name: string,
        url: string
    }
}