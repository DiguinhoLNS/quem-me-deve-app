export interface SectionProps {
    children: React.ReactNode

    type?: 'column' | 'row'
    wrap?: boolean
    center?: boolean,
    between?: boolean,
    padding?: boolean
    marginTop?: number,
    marginBottom?: number,
}