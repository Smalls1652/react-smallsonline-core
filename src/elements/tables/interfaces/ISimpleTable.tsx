import ISimpleTableItem from "./ISimpleTableItem";

export default interface ISimpleTable {
    title: string;
    items: ISimpleTableItem[];
    className?: string;
}