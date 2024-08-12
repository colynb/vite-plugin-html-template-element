export default function htmlTemplateElementPlugin(): {
    name: string;
    transform(code: string, id: string): {
        code: string;
        map: null;
    } | undefined;
};
