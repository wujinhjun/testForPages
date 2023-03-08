export interface IPoemHtml {
    id: string;
    content: string;
    title: string;
    date: number;
}

export interface IPoem {
    allPostsData: IPoemHtml[];
}

export interface ICatalogs {
    id: string;
    title: string;
}

export interface IDisplay {
    catalogs: ICatalogs[],
    contents: IPoemHtml[],
}

export interface IPoemCard {
    title: string;
    content: string;
    id: string;
}