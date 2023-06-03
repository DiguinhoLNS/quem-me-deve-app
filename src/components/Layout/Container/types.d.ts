export interface ContainerProps {
    children: React.ReactNode

    type?: 'column' | 'row'
    wrap?: boolean
    width?: string
    center?: boolean,
    between?: boolean,
    padding?: boolean
    marginTop?: number,
    marginBottom?: number,
}