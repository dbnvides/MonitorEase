
export interface SubscribeInterface {
    id: number,
    imagem: string,
    nome: string,
    descricao: DescricaoInterface,
    categoria?: string | undefined
}[]

interface DescricaoInterface{
    pt: string,
    en: string
}